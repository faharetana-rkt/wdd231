// function setSectionSelection(sections) {
//   const sectionSelect = document.querySelector("#sectionNumber");
//   sections.forEach((section) => {
//     const option = document.createElement("option");
//     option.value = section.sectionNumber;
//     option.textContent = `${section.sectionNumber}`;
//     sectionSelect.appendChild(option);
//   });
// }

// export function populateSection(sections) {setSectionSelection(sections)};

// Alternative
export function populateSection(sections) {
    const sectionSelect = document.querySelector("#sectionNumber");
  sections.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.sectionNumber;
    option.textContent = `${section.sectionNumber}`;
    sectionSelect.appendChild(option);
  });
}