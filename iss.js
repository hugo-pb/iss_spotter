const request = require("request");

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request(`https://api.ipify.org?format=jsonp&callback=getip`, function(
    error,
    response,
    body
  ) {
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
    data = body.ip;
    callback(error, data);
  });
};

module.exports = { fetchMyIP };
