const Sequelize  = require('sequelize');

module.exports = new Sequelize('findmedb_9wjo', 'findmedb_9wjo_user', 'wbgTD0xsjzqZyAbjkiAKLo6PJ2VqeklY', {
    host: 'dpg-cg4mc47dvk4n2c7sva6g-a',
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