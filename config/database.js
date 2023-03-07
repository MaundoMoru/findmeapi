const Sequelize  = require('sequelize');

module.exports = new Sequelize('findmedb_u7px', 'findmedb_u7px_user', 'mF3fv17mKB5rhzmj5evW8q8A03JN53FC', {
    host: 'dpg-cg3d5jvdvk4r4hhusdp0-a',
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