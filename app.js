let allCountry = 'https://restcountries.com/v3.1/all';
let urlAfrica = 'https://restcountries.com/v3.1/region/africa';
let urlAmerica = 'https://restcountries.com/v3.1/region/america';
let urlAsia = 'https://restcountries.com/v3.1/region/asia';
let urlOceania = 'https://restcountries.com/v3.1/region/oceania';
let urlEurope = 'https://restcountries.com/v3.1/region/europe';

let btnAfrica  = document.getElementById('africa');
let btnAmerica  = document.getElementById('america');
let btnAsia  = document.getElementById('asia');
let btnOceania  = document.getElementById('oceania');
let btnEurope  = document.getElementById('europe');


fetch(allCountry)
    .then((data)=> data.json())
    .then((country) => all(country))

function all(countrys) {
    for (const country of countrys) {
        document.querySelector('.home-body').innerHTML += `
        <div class="cardAll">
            <div class="flag">
                <img src="${country.flags.svg}"/>
            </div>
            <div class="short-info">
                <h2>${country.name.common}</h2>
                <p><span>Population:</span> ${country.population.toLocaleString()}</p>
                <p><span>Region:</span> ${country.region}</p>
                <p><span>Capital:</span> ${country.capital}</p>
                <p><span>Subregion:</span> ${country.subregion}</p>
            </div>
        </div>
        `
        }
}

btnAfrica.addEventListener('click', function(){
    document.querySelector('.display-africa').style.display = "";
    document.querySelector('.home-body').style.display = "none";
    document.querySelector('.display-america').style.display = "none";
    document.querySelector('.display-asia').style.display = "none";
    document.querySelector('.display-europe').style.display = "none";
    document.querySelector('.display-oceania').style.display = "none";

        fetch(urlAfrica)
        .then((data)=> data.json())
        .then((country) => all(country))

    function all(countrys) {
        for (const country of countrys) {
            document.querySelector('.display-africa').innerHTML += `
            <div class="cardAll">
                <div class="flag">
                    <img src="${country.flags.svg}"/>
                </div>
                <div class="short-info">
                    <h2>${country.name.common}</h2>
                    <p><span>Population:</span> ${country.population.toLocaleString()}</p>
                    <p><span>Region:</span> ${country.region}</p>
                    <p><span>Capital:</span> ${country.capital}</p>
                    <p><span>Subregion:</span> ${country.subregion}</p>
                </div>
            </div>
            `
            }
    }
})


btnEurope.addEventListener('click', function(){
    document.querySelector('.display-europe').style.display = "";
    document.querySelector('.home-body').style.display = "none";
    document.querySelector('.display-africa').style.display = "none";
    document.querySelector('.display-asia').style.display = "none";
    document.querySelector('.display-america').style.display = "none";
    document.querySelector('.display-oceania').style.display = "none";

        fetch(urlEurope)
        .then((data)=> data.json())
        .then((country) => all(country))

    function all(countrys) {
        for (const country of countrys) {
            document.querySelector('.display-europe').innerHTML += `
            <div class="cardAll ">
                <div class="flag">
                    <img src="${country.flags.svg}"/>
                </div>
                <div class="short-info">
                    <h2>${country.name.common}</h2>
                    <p><span>Population:</span> ${country.population.toLocaleString()}</p>
                    <p><span>Region:</span> ${country.region}</p>
                    <p><span>Capital:</span> ${country.capital}</p>
                    <p><span>Subregion:</span> ${country.subregion}</p>
                </div>
            </div>
            `
            }
    }
})


btnAmerica.addEventListener('click', function(){
    document.querySelector('.display-america').style.display = "";
    document.querySelector('.home-body').style.display = "none";
    document.querySelector('.display-africa').style.display = "none";
    document.querySelector('.display-asia').style.display = "none";
    document.querySelector('.display-europe').style.display = "none";
    document.querySelector('.display-oceania').style.display = "none";

        fetch(urlAmerica)
        .then((data)=> data.json())
        .then((country) => all(country))

    function all(countrys) {
        for (const country of countrys) {
            document.querySelector('.display-america').innerHTML += `
            <div class="cardAll ">
                <div class="flag">
                    <img src="${country.flags.svg}"/>
                </div>
                <div class="short-info">
                    <h2>${country.name.common}</h2>
                    <p><span>Population:</span> ${country.population.toLocaleString()}</p>
                    <p><span>Region:</span> ${country.region}</p>
                    <p><span>Capital:</span> ${country.capital}</p>
                    <p><span>Subregion:</span> ${country.subregion}</p>
                </div>
            </div>
            `
            }
    }
})

btnAsia.addEventListener('click', function(){
    document.querySelector('.display-asia').style.display = "";
    document.querySelector('.home-body').style.display = "none";
    document.querySelector('.display-africa').style.display = "none";
    document.querySelector('.display-america').style.display = "none";
    document.querySelector('.display-europe').style.display = "none";
    document.querySelector('.display-oceania').style.display = "none";

        fetch(urlAsia)
        .then((data)=> data.json())
        .then((country) => all(country))

    function all(countrys) {
        for (const country of countrys) {
            document.querySelector('.display-asia').innerHTML += `
            <div class="cardAll ">
                <div class="flag">
                    <img src="${country.flags.svg}"/>
                </div>
                <div class="short-info">
                    <h2>${country.name.common}</h2>
                    <p><span>Population:</span> ${country.population.toLocaleString()}</p>
                    <p><span>Region:</span> ${country.region}</p>
                    <p><span>Capital:</span> ${country.capital}</p>
                    <p><span>Subregion:</span> ${country.subregion}</p>
                </div>
            </div>
            `
            }
    }
})

btnOceania.addEventListener('click', function(){
    document.querySelector('.display-oceania').style.display = "";
    document.querySelector('.home-body').style.display = "none";
    document.querySelector('.display-africa').style.display = "none";
    document.querySelector('.display-america').style.display = "none";
    document.querySelector('.display-europe').style.display = "none";
    document.querySelector('.display-asia').style.display = "none";

        fetch(urlOceania)
        .then((data)=> data.json())
        .then((country) => all(country))

    function all(countrys) {
        for (const country of countrys) {
            document.querySelector('.display-oceania').innerHTML += `
            <div class="cardAll ">
                <div class="flag">
                    <img src="${country.flags.svg}"/>
                </div>
                <div class="short-info">
                    <h2>${country.name.common}</h2>
                    <p><span>Population:</span> ${country.population.toLocaleString()}</p>
                    <p><span>Region:</span> ${country.region}</p>
                    <p><span>Capital:</span> ${country.capital}</p>
                    <p><span>Subregion:</span> ${country.subregion}</p>
                </div>
            </div>
            `
            }
    }
})