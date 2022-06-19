export default function createIteratorObject(report) {
  const list = [];
  const dict = report.allEmployees;
  for (const [key, value] of Object.entries(dict)) { // eslint-disable-line no-unused-vars
    for (const name of value) {
      list.push(name);
    }
  }
  return list;
}
