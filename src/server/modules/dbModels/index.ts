import { Sequelize, Model } from 'sequelize';
import * as types from 'sequelize/types';
import seq from '../database/index'

export class User extends Model {
    public uid!: number;
    public login!: string;
    public money!: number;
};

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
  sequelize: seq
});