import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const room1 = classRoom(19);
  const room2 = classRoom(20);
  const room1 = classRoom(34);
  return [
    new classRoom(19),
    new classRoom(20),
    new classRoom(34),
  ];
}
