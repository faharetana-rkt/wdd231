import { renderData } from "./utils.mjs";

function templateFunction(info) {
    if (info.get("feedback") === "") {
        info.set("feedback", "No feedback provided");
    }
    return `
    <p><span class="bold-underline">First Name:</span> ${info.get("fname")}</p>
    <p><span class="bold-underline">Last Name:</span> ${info.get("lname")}</p>
    <p><span class="bold-underline">Email:</span> ${info.get("email")}</p>
    <p><span class="bold-underline">Frequency:</span> ${info.get("frequency")}</p>
    <p><span class="bold-underline">Feedback:</span> ${info.get("feedback")}</p>
    `
};

const info = new URLSearchParams(window.location.search);
const container = document.querySelector("#personal-infos");

renderData(templateFunction(info), container);