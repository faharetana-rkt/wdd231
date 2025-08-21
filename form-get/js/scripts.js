// const getString = window.location.search;
// console.log(getString);

const myInfo = new URLSearchParams(window.location.search);

const displayResult = document.querySelector("#results");
displayResult.innerHTML = `
<p>Appointment for: ${myInfo.get("first")} ${myInfo.get("last")}.</p>
<p>Proxy ${myInfo.get("ordinance")} on ${myInfo.get("date")} at ${myInfo.get("location")} temple.</p>
<p>Your Phone number: ${myInfo.get("phone")}. </p>
<p>Your Email: ${myInfo.get("email")}. </p>
`;
