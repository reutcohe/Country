import { getNameByCode } from "./countryMenager.js";
import { createCountryByCode } from "./countryMenager.js";

export default class Country {
    constructor(_parent, _item, _createCountryByCode) {
        this.parent = _parent,
            this.img = _item.flags.png,
            this.name = _item.name.common,
            this.nameOfficial = _item.name.official,
            this.population = _item.population > 1000000 ? (_item.population / 1000000).toLocaleString(undefined, { maximumFractionDigits: 0 }) + " M" : _item.population;
        this.region = _item.region,
            this.languages = _item.languages ? Object.values(_item.languages).join(', ') : "none",
            this.currencies = _item.currencies ? Object.keys(_item.currencies).join(" ,") : "none";
        // this.currencies = _item.currencies ? Object.values(_item.currencies).join(', ') : "none",
        this.capital = _item.capital,
            this.map = _item.latlng,
            this.createCountryByCode = _createCountryByCode,
            // this.coins=_item.
            // this.getNameByCode=_getNameByCode,
            this.borders = _item.borders ? _item.borders : "none";
        // this.singelCountry = singelCountry
        // console.log(Object.values(_item.currencies).join(', ') );
        // this.img=_item.flags.png ? _item.flags.png  : "https://he.wiktionary.org/wiki/%D7%A1%D7%99%D7%9E%D7%9F_%D7%A9%D7%90%D7%9C%D7%94#/media/%D7%A7%D7%95%D7%91%D7%A5:Blue_question_mark.jpg"
    }
    previewRender() {

        let card = document.createElement("div");
        card.className = "col-12 col-md-6 col-lg-4 mt-3";
        card.innerHTML = `
        <div class="card m-2 box_info col-11 border border-1 shadow text-dark bg-transparent text-center overflow-hidden h-100"  style="cursor: pointer;">
        <img src="${this.img}" title="${this.name}"  alt="${this.name}" class="my-2 mx-auto col-11" height="200" width="170" >
        <h2>${this.name}</h2>
        <p>pupolar:${this.population}</p>
        <p>region:${this.region}</p>
        </div>`

        document.querySelector(this.parent).append(card);
        let box_info = card.querySelector(".box_info");
        box_info.addEventListener("click", () => {
            this.render(this.name);
        })
    }
    getShortTitle(title) {
        let arry = title.split(" ");
        if (arry.length > 3) {
            return arry[0] + " " + arry[1] + " " + arry[2] + "...";
        }
        return title;
    }
    render() {
        document.querySelector(this.parent).innerHTML = "";
        document.querySelector(this.parent).innerHTML = `
        <div class="row m-auto mt-5">
        <img src="${this.img}" class="col-12 col-lg-6 my-auto p-0" style="height: 280px;" alt="${this.name}">
        <div class="div_info col-12 col-lg-5 pt-1 ps-3 text-center text-lg-start shadow mt-3" >
        <h2 class="text-center">${this.getShortTitle(this.nameOfficial)} </h2>
        <table class="table ">
        <tbody>
        <tr>
        <th>population:</th>
        <td>${this.population}</td>
        </tr>
        <tr>
        <th>region:</th>
        <td>${this.region}</td>
        </tr>
        <tr>
        <th>Languages:</th>
        <td>${this.languages}</td>
        </tr>  
        <tr>
        <th>Coins:</th>
        <td>${this.currencies}</td>
        </tr> 
        <tr>
        <th>Capital:</th>
        <td>${this.capital}</td>
        </tr> 
        </tbody>
        </table>
        </div>
        <iframe class="mt-4 col-12" height="400" src="https://maps.google.com/maps?q=${this.map[0]},${this.map[1]}&z=7&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ></iframe>
        <div id="id_border" class="text-center mt-5  text-light">
        <h5 class="font-100 ">States with borders:</h5>
        <p id="id_border">
        </p>
        </div>
        </div>`
        // let i =0;
        for (let i = 0; i < this.borders.length; i++) {
            console.log(this.borders);
            if (this.borders != "none") {
                console.log(this.borders[i])
                let nameBorder = getNameByCode(this.borders[i]);
                let parentBorder = document.querySelector("#id_border");
                let linkBorder = document.createElement("span");
                if(i!=this.borders.length-1){
                    linkBorder.innerHTML = `${nameBorder},`  
                }
                else{
                    linkBorder.innerHTML = `${nameBorder}.`
                }
                linkBorder.className = "mb-5 px-2 class_bor";
                linkBorder.style = "cursor: pointer;"
                linkBorder.addEventListener("click", () => {
                    createCountryByCode(this.borders[i])
                })
                parentBorder.append(linkBorder)
            }
            else {
                document.querySelector("#id_border").innerHTML += `<span class="mb-5">${this.borders}</span>`
                i = this.borders.length;
            }


        }
    }
}