"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcrypt"));
const characters_1 = require("../game_models/characters");
const dbModel = __importStar(require("../dbModels/index"));
const events_1 = require("./events");
function initPlayer(player, uid, login, money) {
    player.user = new characters_1.userModel(player, uid, login, money);
    player.call(`auth:complete`);
    (0, events_1.normalizeWeather)(player);
}
;
function initNewPlayer(player, login, password) {
    dbModel.User.create({
        login: login,
        password: bcrypt.hashSync(password, 10),
    }).then(res => {
        initPlayer(player, res.uid, res.login, res.money);
    });
}
;
function authCheck(player, data) {
    return __awaiter(this, void 0, void 0, function* () {
        data = JSON.parse(data);
        let account = yield mp.database.accounts.findOne({ where: { login: data.login } });
        if (!account)
            return player.call('auth:error', [{ message: 'Неверный логин или пароль' }]);
        bcrypt.compare(data.password, account.password, (err, result) => {
            if (result)
                initPlayer(player, account.uid, account.login, account.money);
            else
                return player.call('auth:error', [{ message: 'Неверный логин или пароль' }]);
        });
    });
}
;
function register(player, data) {
    return __awaiter(this, void 0, void 0, function* () {
        data = JSON.parse(data);
        if (yield mp.database.accounts.findOne({ where: { login: data.login } })) {
            player.call(`auth:error`, [{ message: `Аккаунт уже зарегистрированы` }]);
            return;
        }
        else {
            initNewPlayer(player, data.login, data.password);
        }
        ;
    });
}
;
mp.events.add(`auth:check`, authCheck);
mp.events.add(`auth:register`, register);
