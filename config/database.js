const Sequelize  = require('sequelize');

module.exports = new Sequelize('findmedb_n7c8', 'findmedb_n7c8_user', 'bQgPBRxjibhw5F51Ky3zNpErN8PmkMKx', {
    host: 'dpg-cg4o0282qv287cq1e020-a',
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