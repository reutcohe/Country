// import {createCountryByCode}from "./countryMenager";
import { createCountryByCode, sortBy } from "./countryMenager.js"
import { searchInput } from "./countryMenager.js";

export const declarEvent = () => {
    let id_usa = document.querySelector("#id_usa");
    let id_israel = document.querySelector("#id_israel");
    let id_uk = document.querySelector("#id_uk");
    let id_france = document.querySelector("#id_france");
    let id_thailand = document.querySelector("#id_thailand");
    let btn_Search = document.querySelector("#btn_Search");
    let id_input = document.querySelector("#id_input");
    let burger_btn = document.querySelector("#burger_btn");

    id_usa.addEventListener("click", () => {
        createCountryByCode("usa");
    })
    id_israel.addEventListener("click", () => {
        createCountryByCode("IL");
    })
    id_uk.addEventListener("click", () => {
        createCountryByCode("GB");
    })
    id_france.addEventListener("click", () => {
        createCountryByCode("FR");
    })
    id_thailand.addEventListener("click", () => {
        createCountryByCode("TH");
    })
    id_input.addEventListener("input", () => {
        searchInput(id_input.value);
    })
    id_select_sort.addEventListener("change", () => {
        if (id_select_sort.value != "sort by...") {
            sortBy(id_select_sort.value)
        }

    })
    burger_btn.addEventListener("click", () => {
        let bur_nav = document.querySelector("#id_nav");
        (bur_nav.style.display != "block") ?  bur_nav.style.display = "block" :  bur_nav.style.display = "none";
    })






























    // let input = document.querySelector("#id_input");
    // let btn_Search=document.querySelector("#btn_Search")
    // btn_Search.addEventListener("click", () => {
    //     countries.forEach(country => {
    //         console.log("ff")
    //         country.name == input.value;
    //     });
    // })
}