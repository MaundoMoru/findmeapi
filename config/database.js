const Sequelize  = require('sequelize');

module.exports = new Sequelize('findmedb_qds1', 'findmedb_qds1_user', 's0arPN58nOGmsX6mMwTaGdXFy5BRScM1', {
    host: 'dpg-cg6lntl269v5l66jv7i0-a',
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