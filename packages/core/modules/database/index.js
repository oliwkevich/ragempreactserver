"use strict";
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
exports.namespace = void 0;
const sequelize_1 = require("sequelize");
const cls_hooked_1 = require("cls-hooked");
exports.namespace = (0, cls_hooked_1.createNamespace)('ns');
sequelize_1.Sequelize.useCLS(exports.namespace);
const sequelize = new sequelize_1.Sequelize('funnix', 'admin', 'admin', {
    host: '188.134.70.194',
    dialect: 'mysql',
});
let a = sequelize.define('accounts', {
    name: sequelize_1.DataTypes.TEXT,
});
mp.database = {
    openConnection: () => {
        try {
            sequelize.authenticate();
        }
        catch (err) {
            err ? console.log(err) : console.log(`Custom error: Что то пошло не так...`);
        }
        ;
    },
    closeConnection: () => {
        try {
            sequelize.close();
        }
        catch (err) {
            err ? console.log(err) : console.log(`Custom error: Что то пошло не так...`);
        }
        ;
    },
    makeTransaction: (callback) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            sequelize.authenticate();
            let isReady = yield sequelize.transaction(() => __awaiter(void 0, void 0, void 0, function* () {
                yield callback();
                return true;
            }));
            if (isReady) {
                sequelize.close();
            }
            else {
                sequelize.close();
                throw new Error(`Custom error: транзакция не была проведена по неизвестной причине.`);
            }
            ;
        }
        catch (err) {
            err ? console.log(err) : console.log(`Custom error: Что то пошло не так...`);
            sequelize.close();
        }
        ;
    })
};
