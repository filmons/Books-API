import { Sequelize } from 'sequelize';
import config from './env';
//import models from '../../src/modules/User/user.js'

const sequelize = new Sequelize(
    config.database,
    config.user,
    config.password,
    { dialect: 'mysql', port: 3306, host: config.host }
);

const associateAll = async (models) => {
    Object.values(models).map((model) => model.associate(models));
    console.log('db  est connecter ');
};

const db = { sequelize, associateAll };

export default db;