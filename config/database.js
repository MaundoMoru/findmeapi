const Sequelize  = require('sequelize');

module.exports = new Sequelize('findmedb_087z', 'findmedb_087z_user', '2UCGeGT1EJy1EwscgeRGJfFaqOBcFvZ9', {
    host: 'dpg-cg3dlthmbg5fch44ds90-a',
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