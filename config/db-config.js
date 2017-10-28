/**
 *  数据库配置
 */

const Sequelize = require("sequelize");

module.exports = {
    development: {
        username: "root",
        password: "123456",
        database: "test",
        host: "127.0.0.1",
        dialect: "mysql",
        operatorsAliases: Sequelize.Op,
    },
    test: {
        username: "root",
        password: "123456",
        database: "test",
        host: "127.0.0.1",
        dialect: "mysql",
        operatorsAliases: Sequelize.Op,
    },
    production: {
        username: "root",
        password: "123456",
        database: "test",
        host: "127.0.0.1",
        dialect: "mysql",
        operatorsAliases: Sequelize.Op,
      }
 }