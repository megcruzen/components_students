const students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

let containerRef = document.querySelector("#container");
console.log(containerRef);

const h1 = (title, style) => {
    return `<h1 class="xx-large ${style}">${title}</h1>`
}

const section = (title, style) => {
    return `<section class="bordered dashed ${style}">${title}</section>`
}

const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`
}

// Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.


const student = (name, className, info, gradeClass) => `
    <div id="student">
        ${h1(name, gradeClass)}
        ${section(className, "section--padded")}
        ${aside(info, "pushRight")}
    </div>
`


for (let i = 0; i < students.length; i++) {
    let studentComponent = ""
    if (students[i].score >= 60) {
        studentComponent = student(students[i].name, students[i].class, students[i].info, "passing")
    } else {
        studentComponent = student(students[i].name, students[i].class, students[i].info, "failing")
    }
    containerRef.innerHTML += studentComponent;
  }


/* If a student is passing, then the structure should look like the following.

<div class="student">
    <h1 class="xx-large passing">Student Name</h1>
    <section class="bordered dashed section--padded">Student class</section>
    <aside class="pushRight">Additional information</aside>
</div> 
*/