export default function calculateAverage(testScores) {
  const totalTests = 3;
  let sumOfTests = testScores.reduce((a, b) => a + b);
  let average = sumOfTests / totalTests;
  return average;
}
