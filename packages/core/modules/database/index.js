"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('funnix', 'admin', 'admin', {
    host: '188.134.70.194',
    dialect: 'mysql',
});
let a = sequelize.define('accounts', {
    name: sequelize_1.DataTypes.TEXT,
});
mp.database = {
    openConnection: () => {
        sequelize.authenticate();
    },
    closeConnection: () => {
        sequelize.close();
    }
};
