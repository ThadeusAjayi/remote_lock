export function fetchUsers() {
  return fetch("http://localhost:4000/api/users").then((res) => res.json());
}
export function fetchDevices(query) {
  return fetch(`http://localhost:4000/api/devices?name=${query}`).then((res) =>
    res.json()
  );
}
//Localhost doesn't work on android, change localhost to ip that the expo client is running on
