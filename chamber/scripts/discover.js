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

const msgContainer = document.querySelector("#welcome-msg");
msgContainer.innerHTML = "";
// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 86400000;

const today = Date.now();
if (localStorage.getItem("lastvisit") == null) {
  const h2 = document.createElement("h2");
  h2.innerHTML = `Welcome! Let us know if you have any questions.`;
  msgContainer.appendChild(h2);
  localStorage.setItem("lastvisit", `${today}`);
} else {
  const lastvisit = localStorage.getItem("lastvisit");
  const interval = (today - lastvisit) / msToDays;
  if(interval < 1) {
    const h2 = document.createElement("h2");
    h2.innerHTML = "Back so soon! Awesome!";
    msgContainer.appendChild(h2);
    localStorage.setItem("lastvisit", `${today}`);
  } else if (Math.floor(interval) == 1) {
    const h2 = document.createElement("h2");
    h2.innerHTML = `You last visited 1 day ago`;
    msgContainer.appendChild(h2);
    localStorage.setItem("lastvisit", `${today}`);
  } else if (Math.floor(interval) > 1) {
    const h2 = document.createElement("h2");
    h2.innerHTML = `You last visited ${Math.round(interval)} days ago`;
    msgContainer.appendChild(h2);
    localStorage.setItem("lastvisit", `${today}`);
  }
};

