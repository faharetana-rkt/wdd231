import Favorites from "./Favorites.mjs";
import { getLocalStorage } from "./utils.mjs";

const container = document.querySelector("#favorite-scriptures");
const favorites = new Favorites("scriptures");

const scriptureArray = getLocalStorage("scriptures") || [];
if (scriptureArray.length === 0) {
    container.innerHTML = `<p>No favorites yet.</p>`;
} else {
    favorites.renderFavorites(scriptureArray, container);
}

container.addEventListener("click", (e) => {
    if (!e.target.matches(".remove-from-favorites")) return;
    const ref = e.target.dataset.ref;
    const htmlArray = favorites.removeFromFavorites(ref);
    favorites.renderFavorites(htmlArray);
})

