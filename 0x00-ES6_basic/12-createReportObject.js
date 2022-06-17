export default function createReportObject(employeesList) {
  const dict = {};
  dict.allEmployees = employeesList;
  dict.getNumberOfDepartments = (employeesList) => Object.keys(employeesList).length;
  return dict;
}
