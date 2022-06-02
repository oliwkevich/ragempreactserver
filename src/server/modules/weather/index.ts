import cron from "node-cron";

let getJSON = require("get-json");
let weatherURL = "http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/2515327?apikey=e3VlK1UFwNn15SJ6y6EukB2CAJ29wKmJ";

function updateData() {
    let date = new Date()
    let minute = date.getMinutes()
    let hour = date.getHours()
    mp.world.time.set(hour, minute, 0);

    {
        getJSON(weatherURL, function (error: any, response: any) {
          let weatherInfo = response[0].WeatherIcon;
    
          if (weatherInfo == 1) {
            mp.world.weather = "EXTRASUNNY";
          } else if (weatherInfo == 2 || weatherInfo == 3 || weatherInfo == 4 || weatherInfo == 30 || weatherInfo == 33 || weatherInfo == 34) {
            mp.world.weather = "CLEAR";
          } else if (
            weatherInfo == 5 ||
            weatherInfo == 6 ||
            weatherInfo == 7 ||
            weatherInfo == 9 ||
            weatherInfo == 10 ||
            weatherInfo == 20 ||
            weatherInfo == 21 ||
            weatherInfo == 24 ||
            weatherInfo == 31 ||
            weatherInfo == 32 ||
            weatherInfo == 35 ||
            weatherInfo == 36 ||
            weatherInfo == 37 ||
            weatherInfo == 38 ||
            weatherInfo == 43 ||
            weatherInfo == 44
          ) {
            mp.world.weather = "CLOUDS";
          } else if (weatherInfo == 19) {
            mp.world.weather = "SMOG";
          } else if (weatherInfo == 11) {
            mp.world.weather = "FOGGY";
          } else if (weatherInfo == 8) {
            mp.world.weather = "OVERCAST";
          } else if (weatherInfo == 12 || weatherInfo == 13 || weatherInfo == 14) {
            mp.world.weather = "CLEARING";
          } else if (
            weatherInfo == 18 ||
            weatherInfo == 22 ||
            weatherInfo == 23 ||
            weatherInfo == 25 ||
            weatherInfo == 26 ||
            weatherInfo == 27 ||
            weatherInfo == 28 ||
            weatherInfo == 29 ||
            weatherInfo == 39 ||
            weatherInfo == 40
          ) {
            mp.world.weather = "RAIN";
          } else if (weatherInfo == 15 || weatherInfo == 16 || weatherInfo == 17 || weatherInfo == 41 || weatherInfo == 42) {
            mp.world.weather = "THUNDER";
          }
        });
      };
};

cron.schedule(`0 0 * * * *`, () => {
    updateData();
});

updateData();