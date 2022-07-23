require('dotenv').config();

const options = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'root',
  database: process.env.MYSQL_DB_NAME ||'desafio_xp_backend',
  host: process.env.HOSTNAME || '127.0.0.1',
  port: process.env.PORT || '3001',
  dialect: 'postgres',
};

module.exports = {
  development: {
    ...options,
  }
};
