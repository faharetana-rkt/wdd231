const url =
  "https://faharetana-rkt.github.io/wdd231/chamber/data/membership.json";
const modalContainer = document.querySelector("#membership-modals");

async function getMemberships() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    //console.log(data);
    displayMembership(data);
  } catch (error) {
    console.error("Fetch error", error);
  }
}

function displayMembership(memberships) {
    memberships.forEach(membership => {
        const div = document.createElement("div");
        div.setAttribute("class", "membership-card");
        div.innerHTML = `
        <h3>${membership.level} Membership Level</h3>
        <button class="open-modal">Learn more</button>
        `;        
        const dialog = document.createElement("dialog");
        dialog.innerHTML = `
        <h3>${membership.level} Membership Level</h3>
        <p><span class="bold-underline">Description:</span> ${membership.description}</p>
        <p><span class="bold-underline">Monthly Fee:</span> ${membership.fee}</p>
        <p><span class="bold-underline">Perks:</span> ${membership.perks}</p>
        <button class="close-modal">❌</button>
        `;
        const open = div.querySelector(".open-modal");
        const close = dialog.querySelector(".close-modal");
        open.addEventListener("click", () => {
            dialog.showModal();
        })
        close.addEventListener("click", () => {
            dialog.close();
        })
        modalContainer.appendChild(div);
        modalContainer.appendChild(dialog);
    });
}

getMemberships();