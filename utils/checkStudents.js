import isApproved from "./isApproved.js";
import isDisapproved from "./isDisapproved.js";
import nafCalculate from "./nafCalculate.js";
import isNeedFinalExam from "./isNeedFinalExam.js";

let updatedStudentsArray = [];
const situationIndex = 5;
const finalExamScoreIndex = 6;

function updateStudentSituation(studentIndex, situation) {
  updatedStudentsArray[+studentIndex][situationIndex] = situation;
}
function updateStudentFinalExamScore(studentIndex, score) {
  updatedStudentsArray[+studentIndex][finalExamScoreIndex] = score;
}

function extractSituationAndFinalScore() {
  const situationAndFinalScore = [];
  updatedStudentsArray.forEach((student) => {
    situationAndFinalScore.push([
      student[situationIndex],
      student[finalExamScoreIndex],
    ]);
  });
  return situationAndFinalScore;
}

function checkStudents(studentsArray) {
  studentsArray.forEach((student, index) => {
    const studentTestScores = [+student[2], +student[3], +student[4]];
    const studentAbsence = student[1];
    updatedStudentsArray.push(student);
    if (isDisapproved(studentAbsence)) {
      updateStudentSituation(index, "Reprovado por Falta");
      updateStudentFinalExamScore(index, "0");
    } else if (isApproved(studentTestScores)) {
      updateStudentSituation(index, "Aprovado");
      updateStudentFinalExamScore(index, "0");
    } else if (isNeedFinalExam(studentTestScores)) {
      const scoreNeeded = nafCalculate(studentTestScores);
      updateStudentSituation(index, "Exame Final");
      updateStudentFinalExamScore(index, scoreNeeded);
    } else {
      updateStudentSituation(index, "Reprovado por Nota");
      updateStudentFinalExamScore(index, "0");
    }
  });
  return extractSituationAndFinalScore();
}

export default checkStudents;
