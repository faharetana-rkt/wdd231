import SearchScripture from "./scriptureSearch.mjs";
import Favorites from "./Favorites.mjs";

const search = document.querySelector(".search-input");
const parentElement = document.querySelector(".scripture-response");

search.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        const renderScripture = new SearchScripture(search.value, parentElement);
        renderScripture.init();
        // let addFavorite = document.querySelector("#add-to-favorite");
        // const favorites = new Favorites("scriptures");
        // addFavorite.addEventListener("click", favorites.addToFavorites(renderScripture.scripture));
    }
});

parentElement.addEventListener("click", (e) => {
    if (e.target && e.target.id === "add-to-favorite") {
        if (!currentRender || !currentRender.scripture) return;
        favorites.addToFavorites(currentRender.scripture);
    }
})