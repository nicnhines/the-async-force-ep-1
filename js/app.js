console.log('sanity check');
let xhr = new XMLHttpRequest();
xhr.addEventListener('load', person4Name);
xhr.open('GET', 'https://swapi.co/api/people/4/');
xhr.send();

function person4Name() {
    let person4Data = JSON.parse(this.response);
    document.getElementById('person4Name').innerText = person4Data.name;

    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', homeWorld4);
    xhr.open('GET', person4Data.homeworld);
    xhr.send();

    function homeWorld4() {
        let homeWorld4Data = JSON.parse(this.response);
        document.getElementById('person4HomeWorld').innerText = homeWorld4Data.name;
    };
};

let xhr2 = new XMLHttpRequest();
xhr2.addEventListener('load', person14Name);
xhr2.open('GET', 'https://swapi.co/api/people/14/');
xhr2.send();

function person14Name() {
    let person14Data = JSON.parse(this.response);
    document.getElementById('person14Name').innerText = person14Data.name;

    let newReq = new XMLHttpRequest();
    newReq.addEventListener('load', person14Species);
    newReq.open('GET', person14Data.species);
    newReq.send();

    function person14Species() {
        let speciesObject = JSON.parse(this.response);
        document.getElementById('person14Species').innerText = speciesObject.name;
    };
};

function shortXhr(link, listener) {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', listener);
    xhr.open('GET', link);
    xhr.send();
};


shortXhr('https://swapi.co/api/films/', filmsRequest);

function filmsRequest() {

    let parsedFilms = JSON.parse(this.response).results;

    for (let i = 0; i < parsedFilms.length; i++) {
        let planetsUl = document.createElement('ul');
        createList(parsedFilms, i, planetsUl);
        for (let j = 0; j < parsedFilms[i].planets.length; j++) {
            createPlanets(planetsUl, parsedFilms[i].planets[j]);
        }
    }
};

function createPlanets(planetList, list) {

    shortXhr(list, planetRequest);

    function planetRequest() {
        let planetObject = JSON.parse(this.response);
        let planetNameList = document.createElement('li');
        let planetNameHeader = document.createElement('h4');
        planetNameHeader.innerText = planetObject.name;
        planetNameList.appendChild(planetNameHeader);
        planetList.appendChild(planetNameList);
    };
};

function createList(array, index, list) {
    let filmList = document.createElement('li');
    let filmheader = document.createElement('h2');
    let planetHeader = document.createElement('h3');
    planetHeader.innerText = 'Planets';
    filmheader.innerText = array[index].title;
    filmList.appendChild(filmheader);
    filmList.appendChild(planetHeader);
    filmList.appendChild(list);
    document.getElementById('filmList').appendChild(filmList);
};


