const Sequelize  = require('sequelize');

module.exports = new Sequelize('findmedb_86x8', 'findmedb_86x8_user', '0n2MEsVMUnp5SFcqJt1BrFkvrfTiv0r3', {
    host: 'dpg-cg4b5fak728m6o5mmnig-a',
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