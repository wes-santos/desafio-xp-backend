require('dotenv').config();

const options = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
  host: process.env.HOSTNAME,
  port: process.env.DB_PORT,
  dialect: process.env.DIALECT,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
};

const devOptions = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
  host: process.env.HOSTNAME,
  dialect: 'mysql',
}

module.exports = {
  development: {
    ...devOptions,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  }
};
