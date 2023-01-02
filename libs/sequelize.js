const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('../db/models');

const sequelize = new Sequelize(config.dbUri, {
    dialect: 'postgres',
    logging: true,
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
