const key = "f26976f1030d69a9f418448c9d6ec7d5";

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const figCaption = document.querySelector("figcaption");

const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=${key}&units=metric`;

async function apiFetch() {
    try{    
        const response = await fetch(url);
        if (response.ok) {
            data = await response.json();
            //console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch(error) {
        console.log(error);
    }
};

apiFetch();

const displayWeather = (data) => {
    const temperature = `${data.main.temp} °C`;
    const url = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const description = data.weather[0].description;
    currentTemp.innerHTML = temperature;
    figCaption.innerHTML = description;
    weatherIcon.setAttribute("src", url);
    weatherIcon.setAttribute("alt", `icon of ${description}`);
}