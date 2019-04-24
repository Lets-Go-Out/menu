const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'student',
  host: 'localhost',
  max: 100,
  database: 'menus',
  password: 'plantlife',
  port: 5432,
})

module.exports = pool;
