// const {
//   fetchMyIP,
//   fetchCoordsByIP,
//   fetchISSFlyOverTimes,
//   nextISSTimesForMyLocation
// } = require("./iss");

// // fetchMyIP((error, ip) => {
// //   if (error) {
// //     console.log("It didn't work!", error);
// //     return;
// //   }
// //   console.log("It worked! Returned IP:", ip);
// // });

// // fetchCoordsByIP("68.1.9.67", (error, data) => {
// //   if (!data) {
// //     console.log("It didn't work!", error);
// //     return;
// //   }
// //   console.log(
// //     "it work look this are your cordinates:",
// //     `logitude = ${data.longitude} latitude = ${data.latitude}`
// //   );
// // });
// fetchISSFlyOverTimes(
//   { latitude: "49.27670", longitude: "-123.13000" },
//   (error, data) => {
//     if (error) {
//       console.log("It didn't work!", error);
//       return;
//     }
//     console.log("It worked! Returned IP:", data);
//   }
// );
//////////////////NEW CODE/////////////////////
const { nextISSTimesForMyLocation } = require("./iss");

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});
