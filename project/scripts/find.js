import SearchScripture from "./scriptureSearch.mjs";

const search = document.querySelector(".search-input");
const parentElement = document.querySelector(".scripture-response");

// hide the scripture container at first render
parentElement.classList.add("hide");


search.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        const renderScripture = new SearchScripture(search.value, parentElement);
        renderScripture.init();
        // show the container after rendering the searched scripture
        parentElement.classList.remove("hide");
    }
});


