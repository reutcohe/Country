import Country from "./classCountry.js"

let arrCountries = [];

export const shpwLoading = () => {
    document.querySelector("#id_loading").style.display = "block";
    document.querySelector("#id_row").style.display = "nune";
}

export const hideLoding = () => {
    document.querySelector("#id_loading").style.display = "none";
    document.querySelector("#id_row").style.display = "flex";
}

export const getAllCountry = (_ar) => {
    document.querySelector("#id_row").innerHTML = "";
    shpwLoading()
    arrCountries = _ar;
     console.log(arrCountries);
    hideLoding()
    arrCountries.forEach(item => {
        let country = new Country("#id_row", item);
        // console.log(country)
        country.previewRender();
    })
}
export const fillSelectBox = () => {
    let select = document.querySelector("#id_select");
    arrCountries.forEach(item => {
        let op = document.createElement("option");
        op.innerHTML = item.name.common
        select.append(op);
    })
    select.addEventListener("change", () => {
        document.querySelector("#id_row").innerHTML = "";
        console.log(select.value)
        createCountryByName(select.value);
    })
}



export const createCountryByCode = async (code) => {
    let url = `https://restcountries.com/v3.1/alpha/${code}`
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data)
    let country = new Country("#id_row", data[0]);
    //     console.log(country)
    // // return data[0];
    document.querySelector("#id_row").innerHTML = "";
    country.previewRender();
    //    getAllCountry(data)
}

export const createCountryByName = async (name) => {
    let url = `https://restcountries.com/v3.1/name/${name}`
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data)
    // document.querySelector("#id_row").innerHTML = "";
    // let arryCountryByName = { ...data }
    // console.log(arryCountryByName)
    data.forEach(item => {
        let country = new Country("#id_row", item);
        country.previewRender();
    })


    //    getAllCountry(data)
}
export const searchInput = (_input) => {
    let arr = arrCountries.filter(x => x.name.common.toLowerCase().includes(_input.toLowerCase()));
    document.querySelector("#id_row").innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        // console.log(_input.toLowerCase())
        // _input.toLowerCase();
        // console.log(arr[i].name.common)
        createCountryByName(arr[i].name.common)

    }

}
export const getNameByCode = (code) => {
    console.log(code)
    let nameBor = [];
    nameBor = arrCountries.filter(x => x.cca3 == code)
    console.log(nameBor)
    return nameBor[0].name.common;
}
export const sortBy = (select_val) => {
    console.log(select_val)
if(select_val=="name"){
    let sortArry= _.sortBy(arrCountries, select_val+".common");
    getAllCountry(sortArry);
}
else{
    let sortArry= _.sortBy(arrCountries, select_val);
    getAllCountry(sortArry);
}



}
// export const singelCountry = (name) => {
//     console.log(name)
//     countries.forEach(item => {
//         if (item.name.common == name) {
//             console.log(item)
//             let country = new Country("#id_row", item);
//             country.showSingleCountry();
//         }
//     })
//}

