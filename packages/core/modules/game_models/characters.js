"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const methods_1 = require("./methods");
class userModel {
    constructor(_player, uid, login, money) {
        this._player = _player;
        this.uid = uid;
        this.login = login;
        this.money = money;
        this._player = _player;
        this.login = login;
        this.uid = uid;
        this.money = money;
        this.init();
    }
    init() { methods_1.userMethods.init(this._player); }
    ;
    setState(state, value) { methods_1.userMethods.setState(this._player, state, value); }
    ;
    getState(state) { methods_1.userMethods.getState(this._player, state); }
    ;
    teleport(Vector3Mp) { methods_1.userMethods.teleport(this._player, Vector3Mp); }
    ;
}
exports.userModel = userModel;
;
