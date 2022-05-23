import { userModel } from './modules/game_models/characters';

mp.events.add('playerReady', (player: PlayerMp) => {
    player.user = new userModel(player, 1, `poshelnahuy`, 99999)
    player.user.init()
    player.user.teleport(new mp.Vector3(0, 0, 0))
    player.user.setState('isAdmin', true)
    console.log(player.user)
});