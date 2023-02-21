const Sequelize  = require('sequelize');

module.exports = new Sequelize('findme_jn6h', 'findme_jn6h_user', '6RLyOY3RyhsynlBp5WDfYNE3nFsT9HlP', {
    host: 'dpg-cfq66jhgp3jo0b5qpb80-a',
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