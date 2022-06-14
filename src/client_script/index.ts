
import './modules/pauseMenu/customPauseLines';
import './modules/keys';
import './modules/preventGameActions';
import './modules/camera';
import './modules/radar';
import './modules/authorization';

// ----------- debug -----------

import './modules/debug';

// ----------- CLOSE debug -----------

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
