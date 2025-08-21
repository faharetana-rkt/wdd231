// Date rendering
const currentDate = new Date();
const year = currentDate.getFullYear();
document.getElementById("currentYear").innerHTML = `&copy; ${year}`;

// Last modified rendering
const lastModified = document.lastModified;
document.querySelector(
  "#lastModified"
).innerHTML = `Last modified on: ${lastModified}`;

/*hamburger button*/
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("#animateme");
hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// Detecting active page
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".link");
  const currentUrl = window.location.pathname.split("/").pop();

  links.forEach((link) => {
    if (link.getAttribute("href") === currentUrl) {
      link.classList.add("active");
    }
  });
});
