const myInfo = new URLSearchParams(window.location.search);
const container = document.querySelector("#thanks-container");

container.innerHTML = "";
container.innerHTML = `
    <h2>Below are your application information ${myInfo.get("firstName")}</h2>
    <ul>
        <li><span class="bold-underline">First name:</span> ${myInfo.get("firstName")}</li>
        <li><span class="bold-underline">Last name:</span> ${myInfo.get("lastName")}</li>
        <li><span class="bold-underline">Organizational title:</span> ${myInfo.get("title")}</li>
        <li><span class="bold-underline">Email:</span> ${myInfo.get("email")}</li>
        <li><span class="bold-underline">Last name:</span> ${myInfo.get("lastName")}</li>
        <li><span class="bold-underline">Phone number:</span> ${myInfo.get("phone")}</li>
        <li><span class="bold-underline">Name of organization:</span> ${myInfo.get("orgName")}</li>
        <li><span class="bold-underline">Membership type:</span> ${myInfo.get("membership")}</li>
        <li><span class="bold-underline">Organization description:</span> ${myInfo.get("description")}</li>
        <li><span class="bold-underline">Date and time of application:</span> ${myInfo.get("timestamp")}</li>
    </ul>
`;
