//Rendering businesses
const url = "https://faharetana-rkt.github.io/wdd231/chamber/data/members.json";
const container = document.querySelector(".businesses");

async function getMembersData() {
  const response = await fetch(url);
  const data = await response.json();
  displayMember(data);
}

const displayMember = (members) => {
  members.forEach((member) => {
    const card = document.createElement("div");
    const logo = document.createElement("img");
    const name = document.createElement("h3");
    const address = document.createElement("p");
    const contact = document.createElement("p");
    const website = document.createElement("p");

    logo.src = member.image;
    logo.alt = `${member.name} logo`;
    logo.setAttribute("width", "150");
    logo.setAttribute("height", "auto");
    name.innerText = member.name;
    address.innerText = member.address;
    contact.innerText = member.phone;
    website.innerText = member.site;

    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(contact);
    card.appendChild(website);

    container.appendChild(card);
  });
};

getMembersData();

/*Toogle button from list to grid*/

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".businesses");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("grid");
});
