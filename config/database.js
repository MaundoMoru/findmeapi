const Sequelize  = require('sequelize');

module.exports = new Sequelize('findmedb_7i44', 'findmedb_7i44_user', '3fgNPLtd99kC7XlSFo1M3vcD9Ra1Lwai', {
    host: 'dpg-cg4bf02k728m6o5p2rd0-a',
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