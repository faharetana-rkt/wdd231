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
