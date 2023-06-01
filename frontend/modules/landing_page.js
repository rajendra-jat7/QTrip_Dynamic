import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();
  console.log("Hello init() method called!!!")

  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  //const response = await fetch("http://13.235.109.143:8082/cities");
  //const data = await response.json();
  //return data;
  //console.log(data);
  try{
    let cities = await fetch(config.backendEndpoint + "/cities");
    return cities.json();
  }
  catch(e){
    return null;
  }

}


//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let card = document.getElementById("data");
  let content = document.createElement("div");
  content.className = "col-6 col-md-4 col-lg-3 mb-4";
  content.innerHTML = `
                      <a href = "pages/adventures/?city=${id}"id="${id}">
                        <div class = "tile">
                          <div class = "tile-text text-center">
                            <h5>${city}</h5>
                            <p>${description}</p>
                          </div>
                        <img class = "img-responsive" src="${image}">
                        </div>
                      </a>
                      `;
                      card.appendChild(content);
}

export { init, fetchCities, addCityToDOM };
