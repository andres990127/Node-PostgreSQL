const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('../db/models');

const sequelize = new Sequelize(config.dbPostgresUri, {
    dialect: 'postgres',
    logging: true,
});

setupModels(sequelize);

// sequelize.sync(); No se usa debido a que se implementó migraciones

module.exports = sequelize;
