import { fetchData, renderData } from "./utils.mjs";

const mannaUrl = "https://beta.ourmanna.com/api/v1/get?format=json&order=daily";
const scriptureUrl = "https://faharetana-rkt.github.io/wdd231/project/data/scriptures.json"
// console.log(await fetchData(mannaUrl));

// Template function for the renderData function
function templateDaily(dailyScripture) {
    return `
    <h2>Your Scripture of the day</h2>
    <div id="dailyContainer">
    <p class="reference bold-underline">${dailyScripture.verse.details.reference}</p>
    <p class="verse">${dailyScripture.verse.details.text}</p>
    </div>`;
}

function renderMoods(parentElement, scriptures) {
    scriptures.forEach(scripture => {
         const div = document.createElement("div");
        div.setAttribute("class", "scripture-card");
        div.innerHTML = `
        <p>Feeling ${scripture.theme}?</p>
        <p>Click here!</p>
        `;        
        const dialog = document.createElement("dialog");
        dialog.innerHTML = `
        <h3>${scripture.motivation}</h3>
        <p class="bold-underline">${scripture.verse}</p>
        <p>${scripture.text}</p>
        <button class="close-modal">❌</button>
        `;
        const open = div;
        const close = dialog.querySelector(".close-modal");
        open.addEventListener("click", () => {
            dialog.showModal();
        });
        close.addEventListener("click", () => {
            dialog.close();
        });
        parentElement.appendChild(div);
        parentElement.appendChild(dialog);
    });
   
}

const dailyScripture = await fetchData(mannaUrl);
const dailyContainer = document.querySelector("#daily-scripture");
renderData(templateDaily(dailyScripture), dailyContainer);

const scriptures = await fetchData(scriptureUrl);
const moodContainer = document.querySelector("#moods");
renderMoods(moodContainer, scriptures);



