const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'jennummerdor',
  host: 'localhost',
  max: 100,
  database: 'menus',
  password: '627277',
  port: 5432,
})

module.exports = pool;
