use wasm_bindgen::prelude::*;
use chrono::NaiveDate;

#[wasm_bindgen]
pub fn get_week_of_year(ymd: &str) -> i32 {
    let date_only = NaiveDate::parse_from_str(ymd, "%Y-%m-%d").unwrap();
    date_only.format("%U").to_string().parse::<i32>().unwrap()
}

