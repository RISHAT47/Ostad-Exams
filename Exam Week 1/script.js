function updateRoomCount(packageType, change) {
  const priceElement = document.getElementById(`${packageType}-price`);
  const roomsElement = document.getElementById(`${packageType}-rooms`);
  let price = parseInt(priceElement.textContent.replace('$', ''));
  let rooms = parseInt(roomsElement.textContent.replace(' room', ''));

  const pricePerRoom = packageType === 'basic' ? 199 : 249;
  rooms = Math.max(1, rooms + change); // Ensure rooms is at least 1

  price = rooms * pricePerRoom;

  priceElement.textContent = `$${price}`;
  roomsElement.textContent = `${rooms} room${rooms > 1 ? 's' : ''}`;
}

function signUp(packageType) {
  const roomsElement = document.getElementById(`${packageType}-rooms`);
  const thankYouElement = document.getElementById(`${packageType}-thank-you`);
  const rooms = roomsElement.textContent;

  thankYouElement.textContent = `Thank you for choosing ${rooms}`;
}
