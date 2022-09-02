const request = require("request-promise-native");

const fetchMyIP = () => request("https://api.ipify.org?format=json");

const fetchCoordsByIP = body => {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`);
};
const fetchISSFlyOverTimes = coords => {
  const c = JSON.parse(coords);
  let cor = {
    latitude: c.latitude,
    longitude: c.longitude
  };

  return request(
    `https://iss-pass.herokuapp.com/json/?lat=${cor.latitude}&lon=${cor.longitude}`
  );
};
const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(data => {
      const { finalresponse } = JSON.parse(data);
      return finalresponse;
    });
};

module.exports = { nextISSTimesForMyLocation };
