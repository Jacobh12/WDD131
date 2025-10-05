function convrtGPA(grade) {

}






function calculateGPA(gpaPoints) {

}






function getGrades() {
const gradesEl = document.querySelector("#grades");
let grades = gradesEl.ariaValueMax.split(",");
grades = grades.map(convertGradeToPoints => grade.trim().toUpperCase());
return grades;
}





function calculateHandler() {

}





function outputGPA(gpa) {
const gpaPoints = getGrades();    
const gpa = calculateGPA(gpaPoints);
    outputGPA(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", calculateHandler);