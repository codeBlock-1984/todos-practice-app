const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_DBNAME,
    host: process.env.DEV_DB_HOST,
    dialect: 'postgres'
  },
  test: {
    username: process.env.TEST_DB_USERNAME,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_DBNAME,
    host: process.env.TEST_DB_HOST,
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
