import { fetchData, renderData, replaceSpace } from "./utils.mjs";
import Favorites from "./Favorites.mjs";

export function templateSearch(scripture) {
    return `
            <h3>${scripture.reference}</h3>
            <p>${scripture.text}</p>
            <button id="add-to-favorite" aria-label="add to favorite button">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg>
            </button>
            `;
};

export default class SearchScripture{
    constructor(input, parentElement) {
        this.input = input;
        this.parentElement = parentElement;
        this.scripture = null;
    }
    async init() {
        const input = replaceSpace(this.input);
        const scripture = await fetchData(`https://bible-api.com/${input}?translation=kjv`);
        this.scripture = scripture;
        this.renderScripture(scripture);
    }
    renderScripture(scripture) {
        this.parentElement.innerHTML = "";
        renderData(templateSearch(scripture), this.parentElement);
        
        // appending event listener for favorite button at each render
        const addFavoriteButton = this.parentElement.querySelector("#add-to-favorite");
        if (addFavoriteButton) {
            addFavoriteButton.addEventListener("click", () => {
                const favorites = new Favorites("scriptures");
                favorites.addToFavorites(scripture);
            })
        }
    }
}