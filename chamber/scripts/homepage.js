//Rendering random businesses
const urlMember =
  "https://faharetana-rkt.github.io/wdd231/chamber/data/members.json";
const container = document.querySelector(".random-businesses");

function randomItemArray(array) {
  if (array.length === 0) return null; // nothing left to pick
  const index = Math.floor(Math.random() * array.length);
  return array.splice(index, 1)[0]; // remove and return item
}

async function getMembersData() {
  const response = await fetch(urlMember);
  const data = await response.json();
  const silverGoldArray = [];
  data.forEach((member) => {
    if (member.membership == "gold" || member.membership == "silver") {
      silverGoldArray.push(member);
    }
  });

  displayMember(randomItemArray(silverGoldArray));
  displayMember(randomItemArray(silverGoldArray));
  displayMember(randomItemArray(silverGoldArray));
}

const displayMember = (member) => {
  const card = document.createElement("div");
  const logo = document.createElement("img");
  const name = document.createElement("h3");
  const address = document.createElement("p");
  const contact = document.createElement("p");
  const website = document.createElement("p");
  const containerText = document.createElement("div");

  logo.src = member.image;
  logo.alt = `${member.name} logo`;
  logo.setAttribute("width", "150");
  logo.setAttribute("height", "auto");
  containerText.setAttribute("class", "text-field");
  card.setAttribute("class", "randoms");

  name.innerText = member.name;
  contact.innerHTML = `<span class="bold-underline">Tel:</span> ${member.phone}`;
  website.innerHTML = `<span class="bold-underline">URL:</span> ${member.site}`;
  address.innerHTML = `<span class="bold-underline">Address:</span> ${member.address}`;

  card.appendChild(name);
  card.appendChild(logo);
  containerText.appendChild(address)
  containerText.appendChild(contact);
  containerText.appendChild(website);
  card.appendChild(containerText);

  container.appendChild(card);
};

getMembersData();

/*Current Weather api -18.149582216322468, 49.40376319374992*/
const key = "f26976f1030d69a9f418448c9d6ec7d5";
const temp = document.querySelector("#temp");
const description = document.querySelector("#description");
const icon = document.querySelector("#weather-icon");
const high = document.querySelector("#high");
const low = document.querySelector("#low");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const url = `https://api.openweathermap.org/data/2.5/weather?lat=-18.15&lon=49.4&appid=${key}&units=metric`;

async function currentWeatherFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      data = await response.json();
      displayWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function capitalizeWords(string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const displayWeather = (data) => {
  const temperature = `${Math.round(data.main.temp)} °C`;
  const url = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const weatherInfo = data.weather[0].description;
  const min = `${Math.round(data.main.temp_min)} °C`;
  const max = `${Math.round(data.main.temp_max)} °C`;
  const humid = data.main.humidity;
  const dateSunrise = data.sys.sunrise;
  const rise = new Date(dateSunrise * 1000);
  const dateSunset = data.sys.sunset;
  const set = new Date(dateSunset * 1000);
  temp.innerHTML = temperature;
  description.innerHTML = capitalizeWords(weatherInfo);
  icon.setAttribute("src", url);
  icon.setAttribute("alt", `icon of ${weatherInfo}`);
  low.innerHTML = min;
  high.innerHTML = max;
  humidity.innerHTML = `${humid}%`;
  sunrise.innerHTML = rise.toLocaleTimeString();
  sunset.innerHTML = set.toLocaleTimeString();
};

currentWeatherFetch();

/*Weather Forecast Api*/
const first = document.querySelector("#day1");
const second = document.querySelector("#day2");
const third = document.querySelector("#day3");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=-18.15&lon=49.4&appid=${key}&units=metric`;

async function weatherForecastFetch() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      data = await response.json();
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

const displayForecast = (data) => {
  const day1 = new Date(data.list[0].dt * 1000);
  first.innerHTML = `<span class="bold-underline">Today:</span> ${Math.round(
    data.list[0].main.temp
  )}°C`;

  //Find date 24h and 48h from day1
  const secondData = data.list.find((entry) => {
    let entryDate = new Date(entry.dt * 1000);
    return entryDate.getDate() !== day1.getDate();
  });

  const thirdData = data.list.find((entry) => {
    let entryDate = new Date(entry.dt * 1000);
    return (
      entryDate.getDate() !== day1.getDate() &&
      entryDate.getDate() !== new Date(secondData.dt * 1000).getDate()
    );
  });

  const day2 = new Date(secondData.dt * 1000);
  const day3 = new Date(thirdData.dt * 1000);
  second.innerHTML = `<span class="bold-underline">${
    days[day2.getDay()]
  }:</span> ${Math.round(secondData.main.temp)}°C`;
  third.innerHTML = `<span class="bold-underline">${
    days[day3.getDay()]
  }:</span> ${Math.round(thirdData.main.temp)}°C`;
};

weatherForecastFetch();
