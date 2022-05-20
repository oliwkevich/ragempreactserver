import { Sequelize, Model, DataTypes } from 'sequelize';
const sequelize = new Sequelize('funnix', 'admin', 'admin', {
    host: '188.134.70.194',
    dialect: 'mysql',
});

let a = sequelize.define('accounts', {
    name: DataTypes.TEXT,
});

mp.database = {
    openConnection: () => {
        sequelize.authenticate();
    },
    
    closeConnection: () => {
        sequelize.close();
    }
};