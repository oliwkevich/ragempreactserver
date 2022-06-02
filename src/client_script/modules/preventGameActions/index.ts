setInterval(() => { //AFK CAMERA OFF
    mp.game.invoke('0x9E4CFFF989258472');
    mp.game.invoke('0xF4F2C0D4EE209E20');
}, 25000);

mp.game.audio.startAudioScene("CHARACTER_CHANGE_IN_SKY_SCENE"); //FULL SILENT(УБИРАЕТ ЗВУК ТАЧЕК И ПОЛИЦИИ)