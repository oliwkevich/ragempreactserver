import { Sequelize, Model, DataTypes } from 'sequelize';
const sequelize = new Sequelize('funnix', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});
