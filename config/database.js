const Sequelize  = require('sequelize');

module.exports = new Sequelize('findmedb_q52s', 'findmedb_q52s_user', 'VlCeWkpnO5JqnqyCkcGbhpvfM0ujpG8F', {
    host: 'dpg-cg495e9mbg5d884au7vg-a',
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