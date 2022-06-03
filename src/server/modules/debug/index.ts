import {normalizeWeather} from '../authorization/events'

mp.events.addCommand(`crd`, (player) => {
    console.log(`new mp.Vector3(${player.position.x}, ${player.position.y}, ${player.position.z})`);
})

mp.events.addCommand(`nw`, (player) => {
    normalizeWeather(player)
})