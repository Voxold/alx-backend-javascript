import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const rooms = [];

  const sizes = [19, 20, 34];

  for (let i = 0; i < sizes.length; i += 1) {
    const room = new ClassRoom(sizes[i]);
    rooms.push(room);
  }

  return rooms;
}