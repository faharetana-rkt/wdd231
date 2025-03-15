const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphets() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
        const birthDate = document.createElement('p');
        const birthPlace = document.createElement('p');
        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
        birthDate.innerHTML = `<u>Date of Birth</u>: ${prophet.birthdate}`;
        birthPlace.innerHTML = `<u>Place of Birth</u>: ${prophet.birthplace}`;
        portrait.setAttribute('src', `${prophet.imageurl}`);
        portrait.setAttribute('alt', `Portrait image of ${fullName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

getProphets();

async function getProphetsData() {
    const response = await fetch(url);
    const data = await response.json();
    return data.prophets;
}

const prophets = getProphetsData();
const allButton = document.querySelector("#all");
const utahButton = document.querySelector("#utah");
const outsideButton = document.querySelector("#outside-us");
const livedLongButton = document.querySelector("#lived95+");
const childrenButton = document.querySelector("#children10+");
const presidentButton = document.querySelector("#president15+");

allButton.addEventListener("click", () => {
    document.querySelector("#cards").innerHTML = "";
    displayProphets(prophets);
})

utahButton.addEventListener("click", () => {
    document.querySelector("#cards").innerHTML = "";
    const filteredProphets = prophets.filter(prophet => prophet.birthplace.toLowerCase() === "utah");
    displayProphets(filteredProphets);
})

outsideButton.addEventListener("click", () => {
    document.querySelector("#cards").innerHTML = "";
    const filteredProphets = prophets.filter(prophet => prophet.birthplace.toLowerCase() === "england");
    displayProphets(filteredProphets);
})

function calculateAge (birthDateString, deathDateString) {
    let birthDate = new Date(birthDateString);
    let deathDate = deathDateString ? new Date(deathDateString) : newDate();
    

}

livedLongButton.addEventListener("click", () => {
    document.querySelector("#cards").innerHTML = "";
    const filteredProphets = prophets.filter(prophet => prophet.birthplace.toLowerCase() === "utah");
    displayProphets(filteredProphets);
})