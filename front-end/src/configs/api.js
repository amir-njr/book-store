function UserBaseUrl(endPoint) {
  return `http://localhost:3000/user/${endPoint}`;
}

function BookBaseUrl(endPoint) {
  return `http://localhost:3000/book/${endPoint}`;
}

function ShoppingCardBaseUrl(endPoint) {
  return `http://localhost:3000/card/${endPoint}`;
}
function DataBaseUrl(endPoint) {
  return `http://localhost:3000/data/${endPoint}`;
}

export { UserBaseUrl, BookBaseUrl, ShoppingCardBaseUrl, DataBaseUrl };
