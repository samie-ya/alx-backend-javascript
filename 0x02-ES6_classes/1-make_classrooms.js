import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classroom = new ClassRoom(19);
  const classroom2 = new ClassRoom(20);
  const classroom3 = new ClassRoom(34);
  return [classroom, classroom2, classroom3];
}
