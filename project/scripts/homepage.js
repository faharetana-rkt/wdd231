import { fetchData, renderData } from "./utils.mjs";

const mannaUrl = "https://beta.ourmanna.com/api/v1/get?format=json&order=daily";
// console.log(await fetchData(mannaUrl));

// Template function for the renderData function
function templateDaily(dailyScripture) {
    return `
    <h3>Your Scripture of the day</h3>
    <div id="dailyContainer">
    <p class="reference">${dailyScripture.verse.details.reference}</p>
    <p class="verse">${dailyScripture.verse.details.text}</p>
    </div>`;
}

const dailyScripture = await fetchData(mannaUrl);
const dailyContainer = document.querySelector("#daily-scripture");

renderData(templateDaily(dailyScripture), dailyContainer);