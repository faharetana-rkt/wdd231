// Date rendering
const currentDate = new Date();
const year = currentDate.getFullYear();
document.getElementById("currentYear").innerHTML = `&copy; ${year}`;

// Last modified rendering
const lastModified = document.lastModified;
document.querySelector(".lastModified").innerHTML = `Last modified on: ${lastModified}`;

/*hamburger button*/
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("#animateme");
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Detecting active page
document.addEventListener("DOMContentLoaded", function () {
	const links = document.querySelectorAll(".link");
	const currentUrl = window.location.pathname.split("/").pop();
  
	links.forEach(link => {
	  if (link.getAttribute("href") === currentUrl) {
		link.classList.add("active");
	  }
	});
  });

// Courses array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// Course rendering
renderCourse(courses);;
renderTotal(getTotalCredit(courses));

// Button filtered button
const allButton = document.querySelector("#course-all");
const cseButton = document.querySelector("#course-cse");
const wddButton = document.querySelector("#course-wdd");

// Function for rendering the courses in the page
function renderCourse(courses) {
    courses.forEach(course => {
        const div = document.createElement("div");
        div.innerHTML = `${course.subject} ${course.number}`;
        const parent = document.querySelector(".courses");
        // Adding class finished in finished courses
        if(course.completed === true) {
            div.classList.add("finished");
        }
        parent.appendChild(div);
    })
}

// Function to return the sum of the credits
function getTotalCredit(courses) {
    const total = courses.reduce((acc, course) => acc + course.credits, 0);
    return total;
}

// Function to render the Total number of credits
function renderTotal(total) {
    const div = document.createElement("div");
    div.innerHTML = `Total of credits: ${total}`;
    div.classList.add("total");
    const parent = document.querySelector(".courses");
    parent.appendChild(div);
}

allButton.addEventListener("click", () => {
    document.querySelector(".courses").innerHTML = "";
    renderCourse(courses);
    renderTotal(getTotalCredit(courses));
});

cseButton.addEventListener("click", () => {
    document.querySelector(".courses").innerHTML = "";
    const filteredCourses = courses.filter(course => course.subject === "CSE");
    renderCourse(filteredCourses);
    renderTotal(getTotalCredit(filteredCourses));
});

wddButton.addEventListener("click", () => {
    document.querySelector(".courses").innerHTML = "";
    const filteredCourses = courses.filter(course => course.subject === "WDD");
    renderCourse(filteredCourses);
    renderTotal(getTotalCredit(filteredCourses));
});
