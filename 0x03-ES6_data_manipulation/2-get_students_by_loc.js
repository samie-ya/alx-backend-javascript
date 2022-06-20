export default function getStudentsByLocation(students, city) {
  const whichCity = students.filter((x) => x.location === city);
  return whichCity;
}
