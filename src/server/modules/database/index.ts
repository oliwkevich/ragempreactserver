import { Sequelize, Model, DataTypes } from 'sequelize';
const sequelize = new Sequelize('funnix_test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

let a = sequelize.define('accounts', {
    name: DataTypes.TEXT,
});
// a.sync({force: true}); // синхра с бд
(async () => {
    try {
        await a.create({ name: 'asdsaasd' });
    } catch (e) {
        console.log(e);
    }
})();
