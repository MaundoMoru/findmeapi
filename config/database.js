const Sequelize  = require('sequelize');

module.exports = new Sequelize('findme_s4ou', 'findme_s4ou_user', 'EUsgPMONpazaqiAzoGOOwpyUvcCqBMUE', {
    host: 'dpg-cfq7ascgqg41dhstpdf0-a',
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