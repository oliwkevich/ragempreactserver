mp.events.add(`playerReady`, (player) => {
    player.call(`setAuthWeather`)
})

export function normalizeWeather(player: PlayerMp) {
    player.call(`normalizeWeather`, [{h: mp.world.time.hour, m: mp.world.time.minute, s: mp.world.time.second}, mp.world.weather])
}