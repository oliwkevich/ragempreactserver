"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const types = __importStar(require("sequelize/types"));
const index_1 = __importDefault(require("../database/index"));
class User extends sequelize_1.Model {
}
exports.User = User;
;
User.init({
    uid: {
        type: types.NUMBER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    login: {
        type: types.STRING(32),
        allowNull: false
    },
    password: {
        type: types.STRING(255),
        allowNull: false
    },
    money: {
        type: types.NUMBER,
        allowNull: false,
        defaultValue: 3000
    }
}, {
    sequelize: index_1.default
});
