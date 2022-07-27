import init, {get_week_of_year} from "./hello-wasm/pkg/hello_wasm.js";
      init()
        .then(() => {
const d = new Date()
let counterState = get_week_of_year(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`);

const ids = [
  {name:'K',number:'0987654321'},
  {name:'L',number:'1234567890'},
  {name:'A',number:'5555555555'},
]
const turns = [
  {emoji:'🗑',name:'garage and trash'},
  {emoji:'🧹',name:'spot and floors'},
  {emoji:'🧽',name:'outer space and kitchen'},
]
function draw(weekOfYear) {
  document.querySelector('#🔢').textContent = counterState
  const garageIndex = weekOfYear % ids.length - 1
  const getStr = (turnIndex, idIndex) => `${turns[turnIndex].emoji} ${ids[idIndex].name} this week is ${turns[turnIndex].name}\n`
  const div = document.querySelector('#♼')
  div.innerHTML = ''
  for (let i = 0; i < ids.length; i++) {
    // TODO: this is why reversing ids was needed - fix this to still rotate properly without reversing ids
    const str = getStr(i, (weekOfYear - i) % ids.length)
    const row = document.createElement('div')
    row.textContent = str
    div.appendChild(row)
  }
}
draw(counterState)
document.querySelector('#➖').addEventListener('click', () => {
  draw(--counterState)
});
document.querySelector('#➕').addEventListener('click', () => {
  draw(++counterState)
});
});
