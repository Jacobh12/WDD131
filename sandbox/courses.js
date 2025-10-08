// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
  ],
  enrollStudents: function(sectionNum) {
    console.log(`in enrollstudents`, this)
    const section = this.sections.find(s => s.sectionNum === sectionNum);
}};

const fieldName = "code";
aCourse[fieldName]; // "CSE121b"
aCourse.sections[0].roomNum;


function getSectionInfo(course) {
const nameEl= document.querySelector('#courseName');
const codeEl= document.querySelector('#courseCode');
    nameEl.textContent = course.name;
    codeEl.textContent = course.code;
}

function sectionTemplate(section) {
    return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
  </tr>`;
}

function renderSections(sections) {
const sectionEl = document.querySelector('#sections');
const htmlStrings = sections.map(sectionTemplate);
sectionEl.innerHTML = htmlStrings.join("");
}

getSectionInfo(aCourse);
renderSections(aCourse.sections);


function clickHandler(event) {
  console.log('in clickHandler', this);
aCourse.enrollStudents(2);
}


document.querySelector('#enrollStudent').addEventListener('click', clickHandler );