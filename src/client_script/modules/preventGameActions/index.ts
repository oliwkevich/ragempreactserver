setInterval(() => { //AFK CAMERA OFF
    mp.game.invoke('0x9E4CFFF989258472');
    mp.game.invoke('0xF4F2C0D4EE209E20');
}, 25000);

mp.game.audio.startAudioScene("CHARACTER_CHANGE_IN_SKY_SCENE"); //FULL SILENT(УБИРАЕТ ЗВУК ТАЧЕК И ПОЛИЦИИ)

mp.events.add("render", () => { //селектор оружия и названия улиц + названия класса и названия авто
    mp.game.ui.hideHudComponentThisFrame(19); // Оружия
    mp.game.ui.hideHudComponentThisFrame(20);
    mp.game.ui.hideHudComponentThisFrame(22);
    mp.game.ui.hideHudComponentThisFrame(6); // названия ниже
    mp.game.ui.hideHudComponentThisFrame(7);
    mp.game.ui.hideHudComponentThisFrame(8);
    mp.game.ui.hideHudComponentThisFrame(9);
    mp.game.ui.hideHudComponentThisFrame(3); //худ денег
})

// mp.gui.chat.activate(false) //офф чата