export default function getStudentIdsSum(students) {
  const newList = students.reduce((prev, current) => prev + current.id, 0);
  return newList;
}
