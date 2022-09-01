const { fetchMyIP, fetchCoordsByIP } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP:", ip);
// });

fetchCoordsByIP("68.1.9.67", (error, data) => {
  if (!data) {
    console.log("It didn't work!", error);
    return;
  }
  console.log(
    "it work look this are your cordinates:",
    `logitude = ${data.longitude} latitude = ${data.latitude}`
  );
});
