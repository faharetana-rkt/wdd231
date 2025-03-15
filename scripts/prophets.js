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

const allButton = document.querySelector("#all");
const utahButton = document.querySelector("#utah");
const outsideButton = document.querySelector("#outside-us");
const livedLongButton = document.querySelector("#lived95plus");
const childrenButton = document.querySelector("#children10plus");
const presidentButton = document.querySelector("#president15plus");

allButton.addEventListener("click", async () => {
    const prophets = await getProphetsData();
    console.table(prophets);
    document.querySelector("#cards").innerHTML = "";
    displayProphets(prophets);
})

utahButton.addEventListener("click", async () => {
    const prophets = await getProphetsData();
    document.querySelector("#cards").innerHTML = "";
    const filteredProphets = prophets.filter(prophet => prophet.birthplace.toLowerCase() === "utah");
    displayProphets(filteredProphets);
})

outsideButton.addEventListener("click", async () => {
    const prophets = await getProphetsData();
    document.querySelector("#cards").innerHTML = "";
    const filteredProphets = prophets.filter(prophet => prophet.birthplace.toLowerCase() === "england");
    displayProphets(filteredProphets);
})

function calculateAge (birthDateString, deathDateString) {
    let birthDate = new Date(birthDateString);
    let deathDate = deathDateString ? new Date(deathDateString) : new Date();
    let age = deathDate.getFullYear() - birthDate.getFullYear();
    return age;
}

livedLongButton.addEventListener("click", async () => {
    const prophets = await getProphetsData();
    document.querySelector("#cards").innerHTML = "";
    const filteredProphets = prophets.filter(prophet => calculateAge(prophet.birthdate, prophet.death) >= 95);
    displayProphets(filteredProphets);
})

childrenButton.addEventListener("click", async () => {
    const prophets = await getProphetsData();
    document.querySelector("#cards").innerHTML = "";
    const filteredProphets = prophets.filter(prophet => prophet.numofchildren > 10);
    displayProphets(filteredProphets);
})

presidentButton.addEventListener("click", async () => {
    const prophets = await getProphetsData();
    document.querySelector("#cards").innerHTML = "";
    const filteredProphets = prophets.filter(prophet => prophet.length > 15);
    displayProphets(filteredProphets);
})