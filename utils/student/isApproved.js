import calculateAverage from "./calculateAverage.js";

export default function isApproved(tests) {
  if (calculateAverage(tests) >= 70) {
    return true;
  } else {
    return false;
  }
}
