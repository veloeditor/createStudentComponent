const students = [
    {
      name: "Chris Miller",
      subject: "History",
      info: "Failed last exam",
      score: 59
    },
    {
      name: "Courtney Seward",
      subject: "History",
      info: "Has completed all homework",
      score: 91
    },
    {
      name: "Garrett Ward",
      subject: "History",
      info: "Wonderful at helping other students",
      score: 88
    },
    {
      name: "John Dulaney",
      subject: "History",
      info: "Has never missed a class or exam",
      score: 92
    },
    {
      name: "Greg Lawrence",
      subject: "History",
      info: "Sub-par performance all around",
      score: 64
    },
    {
      name: "Leah Duvic",
      subject: "History",
      info: "Wonderful student",
      score: 97
    },
    {
      name: "Jesse Page",
      subject: "History",
      info: "Smokes too much. Distracting.",
      score: 76
    },
    {
      name: "Kevin Haggerty",
      subject: "History",
      info: "Falls asleep in class",
      score: 79
    },
    {
      name: "Max Wolf",
      subject: "History",
      info: "Talks too much",
      score: 83
    },
    {
      name: "Lissa Goforth",
      subject: "History",
      info: "Asks pointless, unrelated questions",
      score: 78
    },
    {
      name: "Tyler Bowman",
      subject: "History",
      info: "When was the last time he attended class?",
      score: 48
    },
    {
      name: "Ray Medrano",
      subject: "History",
      info: "Needs to contribute to in-class discussions",
      score: 95
    }
  ]
  
  const createStudentComponent = (name, subject, info, score) => {
    return `
          <div class="student">
              <h1 class= ${score > 70 ? `xx-large passing`: "failing"}>${name}</h1>
              <section>${subject}</section>
              <aside>
                  ${info}
              </aside>
              <aside>
              current score: ${score < 70 ? "failed": "passed"}
              </aside>
          </div>
      `
  }
  const studentContainer = document.querySelector("#container")
  
  students.forEach(student => { 
      const studentComponent = createStudentComponent( student.name, student.subject, student.info, student.score)
              studentContainer.innerHTML += studentComponent
    
  })

//   for (const student of students) {
//     let studentComponent = ""
//     if (student.score >= 60) {
//        studentComponent = `
//        <div class="student">
//            <h1 class="xx-large passing">${student.name}</h1>
//            <section class="bordered dashed section--padded">${student.subject}</section>
//            <aside class="pushRight">
//                ${student.info}
//            </aside>
//            <aside>
//            current score: ${student.score < 70 ? "failed": "passed"}
//            </aside>
//            </div>
//            `
//            studentContainer.innerHTML += studentComponent
//     } else {
//         studentComponent = createStudentComponent( student.name, student.subject, student.info, student.score)
//         studentContainer.innerHTML += studentComponent
//     }
// }