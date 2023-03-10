const Sequelize  = require('sequelize');

module.exports = new Sequelize('findmedb_duxh', 'findmedb_duxh_user', 'hxkCe03GqIuddirkI4xU9j2JFfJWOyLW', {
    host: 'dpg-cg5j7a7dvk4pls5bngbg-a',
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