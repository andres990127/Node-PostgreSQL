const { Pool } = require('pg');

//const pool = new Pool('postgres://tmorsibm:eEk_rXXBl_ov3e9c7baVGuKk2zuJBPzW@snuffleupagus.db.elephantsql.com/tmorsibm');

const pool = new Pool({
    host: 'snuffleupagus.db.elephantsql.com',
    port: 5432,
    user: 'tmorsibm',
    password: 'eEk_rXXBl_ov3e9c7baVGuKk2zuJBPzW',
    database: 'tmorsibm'
});

module.exports = pool;