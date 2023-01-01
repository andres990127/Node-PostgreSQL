const { Pool } = require('pg');
const { config } = require('../config/config');

const pool = new Pool({ connectionString: 'postgres://tmorsibm:eEk_rXXBl_ov3e9c7baVGuKk2zuJBPzW@snuffleupagus.db.elephantsql.com/tmorsibm' });

module.exports = pool;