import { userMethods } from './methods';

export class userModel {
    constructor(public _player: any, public uid: number, public login: string, public money: number) {
        this._player = _player;
        this.login = login;
        this.uid = uid;
        this.money = money;
        this.init()
    }
    
    init(): void { userMethods.init(this._player) };
    setState(state: string, value: boolean): void { userMethods.setState(this._player, state, value)};
    getState(state: string): void { userMethods.getState(this._player, state)};
    teleport(Vector3Mp: Vector3Mp): void { userMethods.teleport(this._player, Vector3Mp)};
};