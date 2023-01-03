const { config } = require('../config/config');

module.exports = {
    development:{
        url: config.dbPostgresUri,
        dialect: 'postgres'
    },
    production:{
        url: config.dbPostgresUri,
        dialect: 'postgres'
    }
}