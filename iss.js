const request = require("request");

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request("https://api.ipify.org?format=json", function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body).ip;
    callback(null, data);
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.success === false) {
      callback(data.message, null);
      return;
    }
    callback(null, data);
  });
};
const fetchISSFlyOverTimes = function(coords, callback) {
  // ...
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
