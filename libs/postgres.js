const { Client } = require('pg');

async function getConnection(){
    const client = new Client('postgres://tmorsibm:eEk_rXXBl_ov3e9c7baVGuKk2zuJBPzW@snuffleupagus.db.elephantsql.com/tmorsibm');
    await client.connect();
    return client;
}

module.exports = getConnection;

