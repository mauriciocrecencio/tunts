import calculateAverage from "./calculateAverage.js";

export default function isNeedFinalExam(tests) {
  const average = calculateAverage(tests);
  if (average >= 50 && average < 70) {
    return true;
  }
  return false;
}
