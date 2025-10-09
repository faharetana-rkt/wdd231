import { setLocalStorage, getLocalStorage, existsInArray, renderData } from "./utils.mjs";


export default class Favorites {
    constructor(key) {
        this.key = key;
    }

    addToFavorites(scripture) {
        const array = getLocalStorage(this.key) || [];
        if (existsInArray(array, scripture)) {
            alert("This scripture is already in your favorites.");
            return;
        }
        array.push(scripture);
        setLocalStorage(this.key, array);
        alert("Successfully added to favorites.");
    }

    removeFromFavorites(reference) {
        if(!reference) return;
        const array = getLocalStorage(this.key);
        const filtered = array.filter(item => item.reference !== reference);
        setLocalStorage(this.key, filtered);
        return filtered;
    }

    renderFavorites(array, parentElement) {
        parentElement.innerHTML = "";
        renderData(this.templateFunction(array), parentElement);
    }

    templateFunction(scriptureArray){
        let htmlArray = [];
        scriptureArray.forEach(scripture => {
            htmlArray.push(`<div class="scripture-card">
                            <h3 class="bold-underline">${scripture.reference}</h3>
                            <p>${scripture.text}</p>
                            <button class="remove-from-favorites" data-ref=${scripture.reference}>✖</button>
                            </div>`);
        });
        return htmlArray.join(" ");
    };
}