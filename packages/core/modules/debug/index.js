"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("../authorization/events");
mp.events.addCommand(`crd`, (player) => {
    console.log(`new mp.Vector3(${player.position.x}, ${player.position.y}, ${player.position.z})`);
});
mp.events.addCommand(`nw`, (player) => {
    (0, events_1.normalizeWeather)(player);
});
