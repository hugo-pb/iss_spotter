const request = require("request");

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request(`https://api.ipify.org?format=jsonp&callback=getip`, function(
    error,
    response,
    body
  ) {
    data = body.ip;
    callback(error, data);
  });
};

module.exports = { fetchMyIP };
