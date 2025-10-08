import { setLocalStorage, getLocalStorage, existsInArray } from "./utils.mjs";

export default class Favorites {
    constructor(key) {
        this.key = key;
    }
    addToFavorites(scripture) {
        const array = getLocalStorage(this.key) || [];
        if (existsInArray(array, scripture)) {
            return;
        }
        array.push(scripture);
        setLocalStorage(this.key, array);
    }
    removeFromFavorites(scripture) {

    }
}