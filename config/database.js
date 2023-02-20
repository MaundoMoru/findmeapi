const Sequelize  = require('sequelize');

module.exports = new Sequelize('findme', 'findme_user', '8XdiYNt4bg6p8jzSsKTMgWRVRwX9ssed', {
    host: 'dpg-cfpi5qqrrk0fd9to968g-a',
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