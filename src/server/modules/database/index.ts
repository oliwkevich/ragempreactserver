import { Sequelize, DataTypes } from 'sequelize';
import { createNamespace } from 'cls-hooked';

Sequelize.useCLS(createNamespace('ns'));

const sequelize = new Sequelize('funnix', 'admin', 'admin', {
    host: '188.134.70.194',
    dialect: 'mysql',
    logging: false,
});

// let a = sequelize.define('accounts', {
//     name: DataTypes.TEXT,
// });

export default sequelize

mp.database = {

    accounts: sequelize.define('accounts', {
        name: DataTypes.TEXT,
    }),
    
    openConnection: () => {
        try {
            sequelize.authenticate();
        } catch (err) {
            err ? mp.debug.error(err) : mp.debug.error(`Custom error: Что то пошло не так...`);
        }
    },

    closeConnection: () => {
        try {
            sequelize.close();
        } catch (err) {
            err ? mp.debug.error(err) : mp.debug.error(`Custom error: Что то пошло не так...`);
        }
    },

    makeTransaction: async (callback) => {
        try {
            sequelize.authenticate();

            const isReady = await sequelize.transaction(async () => {
                callback();
                return true;
            });

            if (isReady) {
                sequelize.close();
            } else {
                sequelize.close();
                throw new Error(
                    `Custom error: транзакция не была проведена по неизвестной причине.`,
                );
            }
        } catch (err) {
            err ? mp.debug.error(err) : mp.debug.error(`Custom error: Что то пошло не так...`);
            sequelize.close();
        }
    },
};
