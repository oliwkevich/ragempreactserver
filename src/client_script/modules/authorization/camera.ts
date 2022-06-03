mp.events.add(`playerReady`, () => {
    mp.gui.chat.push(`playerReady`)
    mp.camerasModule.createCamera('auth', new mp.Vector3(-44.759559631347656, -1127.6588134765625, 261.0685729980469))
    mp.camerasModule.setCameraLookAt('auth', new mp.Vector3(-489.2594299316406, -1175.3045654296875, 206.3852996826172))
    mp.camerasModule.setCameraActive('auth', false)
    // mp.camerasModule.setCameraRot('auth', {x: 0, y: 0, z: 0})
    mp.camerasModule.setCameraInterpolate('auth', new mp.Vector3(1161.066162109375, -1150.8533935546875, 397.9908752441406), new mp.Vector3(-152.89149475097656, -1010.0830688476562, 254.7172088623047), 900)
})