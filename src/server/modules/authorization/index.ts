import * as bcrypt from "bcrypt";
import { userModel } from '../game_models/characters';
import * as dbModel from '../dbModels/index';

function initPlayer(player: PlayerMp, uid: number, login: string, money: number) {
    player.user = new userModel(player, uid, login, money);
    player.call(`auth:complete`);
};

function initNewPlayer(player: PlayerMp, login: string, password: string) {
    dbModel.User.create({
        login: login,
        password: bcrypt.hashSync(password, 10),
    }).then(res => {
        initPlayer(player, res.uid, res.login, res.money);
    });
};

async function authCheck(player: PlayerMp, data: any) {
    data = JSON.parse(data);
    let account = await mp.database.accounts.findOne({where: {login: data.login}});
    if(!account) return player.call('auth:error', [{message: 'Неверный логин или пароль'}]);
    bcrypt.compare(data.password, account.password, (err, result) => {
        if(result) initPlayer(player, account.uid, account.login, account.money);
        else return player.call('auth:error', [{message: 'Неверный логин или пароль'}]);
    })
};

async function register(player: PlayerMp, data: any) {
    data = JSON.parse(data);
    if(await mp.database.accounts.findOne({where: {login: data.login}})) {
        player.call(`auth:error`, [{message: `Аккаунт уже зарегистрированы`}]);
        return
    } else {
        initNewPlayer(player, data.login, data.password);
    };
};

mp.events.add(`auth:check`, authCheck);
mp.events.add(`auth:register`, register);