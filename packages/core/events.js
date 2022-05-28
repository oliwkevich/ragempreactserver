"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const characters_1 = require("./modules/game_models/characters");
mp.events.add('playerReady', (player) => {
    player.user = new characters_1.userModel(player, 1, `poshelnahuy`, 99999);
    player.user.init();
    player.user.teleport(new mp.Vector3(0, 0, 0));
    player.user.setState('isAdmin', true);
});
