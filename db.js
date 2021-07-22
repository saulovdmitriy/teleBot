const { Sequelize } = require("sequelize");

module.exports = new Sequelize("teleBot", "sdsman", "qawsedrf1q2w", {
  host: "212.41.22.124",
  port: "6432",
  dialect: "postgres",
});
