import { Sequelize, Model, DataTypes } from 'sequelize';
import { createNamespace } from 'cls-hooked';

export const namespace = createNamespace('ns');
Sequelize.useCLS(namespace);

const sequelize = new Sequelize('funnix', 'admin', 'admin', {
    host: '188.134.70.194',
    dialect: 'mysql',
});

let a = sequelize.define('accounts', {
    name: DataTypes.TEXT,
});

mp.database = {
    openConnection: () => {
        try {
            sequelize.authenticate();
        } catch (err) {
            err?console.log(err):console.log(`Custom error: Что то пошло не так...`);
        };
    },
    
    closeConnection: () => {
        try {
            sequelize.close();
        } catch (err) {
            err?console.log(err):console.log(`Custom error: Что то пошло не так...`);
        };
    },

    makeTransaction: async (callback) => {
        try {
            sequelize.authenticate();

            let isReady = await sequelize.transaction(async () => {
                await callback();
                return true;
            });

            if(isReady) {
                sequelize.close();
            } else {
                sequelize.close();
                throw new Error(`Custom error: транзакция не была проведена по неизвестной причине.`)
            };
        } catch (err) {
            err?console.log(err):console.log(`Custom error: Что то пошло не так...`);
            sequelize.close();
        };
    }
};