export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Fetch failed: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
};

export function renderData(templateFunction, parentElement) {
    parentElement.innerHTML = templateFunction;
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function replaceSpace(string){
  const formatted = string.replace(" ", "+");
  return formatted.toLowerCase();
}

export function existsInArray(array, scripture) {
  return array.some(script => script.reference === scripture.reference);
}
