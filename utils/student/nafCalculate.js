import calculateAverage from "./calculateAverage.js";

export default function nafCalculate(studentTestScores) {
  const average = calculateAverage(studentTestScores);
  const naf = 100 - average;
  return Math.round(naf).toString();
}
