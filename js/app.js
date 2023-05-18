import Country from "./classCountry.js";
import { declarEvent } from "./event.js";
import { getAllCountry,fillSelectBox} from "./countryMenager.js";

const init = () => {
    declarEvent();
    doApi();
}



const doApi = async () => {
    let url = "https://restcountries.com/v3.1/all";
    let resp = await fetch(url);
    let data = await resp.json();
    getAllCountry(data);
    fillSelectBox();
   
}





init();