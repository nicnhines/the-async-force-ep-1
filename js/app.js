console.log('sanity check')

let xhr = new XMLHttpRequest();
xhr.addEventListener('load', reqListener);
xhr.open('GET', 'https://swapi.co/api/people/4/');
xhr.send();

function reqListener() {
    //console.log(this);
    //console.log(this.responseText);
    let person4Name = JSON.parse(this.response);
    document.getElementById('person4Name').innerText = person4Name.name;

    let xhrHome = new XMLHttpRequest();
    xhrHome.addEventListener('load', reqHome);
    xhrHome.open('GET', 'https://swapi.co/api/planets/1/');
    xhrHome.send();
};

function reqHome() {
    //console.log(this);
    let person4Home = JSON.parse(this.response);
    document.getElementById('person4HomeWorld').innerText = person4Home.name;
};

let newXhr = new XMLHttpRequest();
newXhr.addEventListener('load', person14);
newXhr.open('GET', 'https://swapi.co/api/people/14/');
newXhr.send();

function person14() {
    //console.log(this.response);
    let person14Name = JSON.parse(this.response);
    document.getElementById('person14Name').innerText = person14Name.name;

    let reqspecies14 = new XMLHttpRequest();
    reqspecies14.addEventListener('load', req14pecies);
    reqspecies14.open('GET', 'https://swapi.co/api/species/1/');
    reqspecies14.send();
}

function req14pecies() {
    //console.log(this.response);
    let species14Name = JSON.parse(this.response);
    document.getElementById('person14Species').innerText = species14Name.name;
};

let reqFilms = new XMLHttpRequest();
reqFilms.addEventListener('load', listFilms);
reqFilms.open('GET', 'https://swapi.co/api/films/');
reqFilms.send(); 

function listFilms() {
    //console.log(this.response);
    let filmList = document.getElementById('filmList');
    let parsedFilms = JSON.parse(this.response).results;
    console.log(parsedFilms);
    for(let i = 0; i < parsedFilms.length; i++){
        let filmLi = document.createElement('li');
        let filmTitle = document.createElement('h2');
        filmTitle.innerHTML = parsedFilms[i].title;
        filmLi.appendChild(filmTitle);
        filmList.appendChild(filmLi);

        var planetH3 = document.createElement("h3");
        planetH3.innerHTML = "Planets";
        filmLi.appendChild(planetH3);
        var planetUL = document.createElement("ul");
        planetUL.className = "filmPlanets";
        filmLi.appendChild(planetUL);
    }
    let reqPlanet = new XMLHttpRequest();
    reqPlanet.addEventListener('load', getPlanetName);
    reqPlanet.open('GET', 'https://swapi.co/api/films/');
    reqPlanet.send();

    function getPlanetName() {
        //console.log(this.response)
        let planetsParsed = JSON.parse(this.response).name;
        console.log(planetsParsed)
        for(let j = 0; j < parsedFilms.length; j++){
            let planetsLi = document.createElement('li');
            planetsLi.className = 'planet';
            let planetName = document.createElement('h4');
            planetName.innerText = planetsParsed[j].name;
            planetUL.appendChild(planetsLi);
            planetsLi.appendChild(planetName);
        }
    }

}