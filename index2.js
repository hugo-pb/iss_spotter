const { fetchMyIP, fetchCoordsByIP } = require("./iss_promised");

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(data => console.log(data));
