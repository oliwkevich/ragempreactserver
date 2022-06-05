<<<<<<< HEAD
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
require('./modules/pauseMenu/customPauseLines');
let browser = null;
mp.events.add('playerReady', () => {
    let player = mp.players.local;
    browser = mp.browsers.new('package://cef/index.html');
});

mp.events.add('guiReady', () => {
    mp.events.add('browserDomReady', (browser) => {
        mp.gui.cursor.visible = true;
        mp.gui.cursor.show(true, true);
        browser.execute(`eventsManager.callCEF('switchMenu', ${false})`);
    });
});

mp.events.add('log', () => {
    mp.console.logInfo('ЛОГ ОК!', true, true);
});
=======
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./modules/pauseMenu/customPauseLines");
require("./modules/keys");
require("./modules/preventGameActions");
require("./modules/camera");
require("./modules/radar");
require("./modules/authorization");
//debug
require("./modules/debug");
>>>>>>> 2c08dec6648da06a5e8103b12c62b01b9cf3521a
