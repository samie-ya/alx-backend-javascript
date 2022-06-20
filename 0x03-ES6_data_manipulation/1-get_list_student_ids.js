export default function getListStudentIds(lists) {
  if (Array.isArray(lists)) {
    const newList = lists.map((x) => x.id);
    return newList;
  }
  return [];
}
