const url = "https://faharetana-rkt.github.io/wdd231/chamber/data/places.json";
const cardContainer = document.querySelector("#discover-cards");

async function getPlaces() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    //console.log(data);
    displayPlaces(data);
  } catch (error) {
    console.error("Fetch error", error);
  }
};

getPlaces();

function displayPlaces(places) {
    places.forEach(place => {
        const div = document.createElement("div");
        div.setAttribute("class", "card-place");
        div.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.link}" alt="an image of ${place.name}">
            <figcaption>Image of ${place.name}</figcaption>
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <a href="${place.website}" target="_blank">
            <button>Learn more</button>
        </a>
        `;
        cardContainer.appendChild(div);
    });
};