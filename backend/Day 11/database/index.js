const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("postgres", "postgres", "V_ijayuv99", {
  host: "localhost",
  dialect: "postgres",
});
sequelize.sync();
(async () => {
  try {
    await sequelize.authenticate();
    console.log("connection established with DB");
  } catch (err) {
    console.error("unable to connect to DB");
  }
})();
module.exports = sequelize;
