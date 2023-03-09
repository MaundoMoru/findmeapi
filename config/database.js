const Sequelize  = require('sequelize');

module.exports = new Sequelize('findmedb_v6qb', 'findmedb_v6qb_user', 'rWinqcGvxRJaiDFRnSYPAePDoFVZksLm', {
    host: 'dpg-cg4c72hmbg5d8858b0m0-a',
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