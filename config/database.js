const Sequelize  = require('sequelize');

module.exports = new Sequelize('findmedb', 'findmedb_user', 'XJswhRd4qLxLncqkrEf3BfaIXxpblb7D', {
    host: 'dpg-cg2uu5g2qv24hdmujfk0-a',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  });

  // module.exports = new Sequelize('findme', 'postgres', 'Joseph12', {
  //   host: 'localhost',
  //   dialect: 'postgres',
  //   operatorsAliases: false,

  //   pool: {
  //     max: 5,
  //     min: 0,
  //     acquire: 30000,
  //     idle: 10000
  //   },
  // });