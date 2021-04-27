export default function isDisapproved(studentAbsence) {
  const maxAbsence = 15;
  if (studentAbsence >= maxAbsence) {
    return true;
  }
  return false;
}
