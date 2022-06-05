mp.events.add(`setAuthWeather`, () => {
    mp.game.time.setClockTime(20, 0, 0)
    mp.game.gameplay.setWeatherTypeNow(`EXTRASUNNY`);
})

mp.events.add(`normalizeWeather`, (time, weather) => {
    mp.game.time.setClockTime(time.h, time.m, time.s)
    mp.game.gameplay.setWeatherTypeNow(weather);
})