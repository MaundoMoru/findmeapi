const Sequelize  = require('sequelize');

module.exports = new Sequelize('findme_xvrq', 'findme_xvrq_user', 'qPxhxeAN8UgNwjEjmHXeGCqPSnPYX4v6', {
    host: 'dpg-cfq8n01gp3jo0b6a24u0-a',
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