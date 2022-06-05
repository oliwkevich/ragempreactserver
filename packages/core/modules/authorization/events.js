"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeWeather = void 0;
mp.events.add(`playerReady`, (player) => {
    player.call(`setAuthWeather`);
});
function normalizeWeather(player) {
    player.call(`normalizeWeather`, [{ h: mp.world.time.hour, m: mp.world.time.minute, s: mp.world.time.second }, mp.world.weather]);
}
exports.normalizeWeather = normalizeWeather;
