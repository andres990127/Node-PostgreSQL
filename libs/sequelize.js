const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('../db/models');

const sequelize = new Sequelize(config.dbMySqlUri, {
    dialect: 'mysql',
    logging: true,
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
