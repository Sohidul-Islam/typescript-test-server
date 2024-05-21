const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "mysql://uaouubcirsbebptf:UdgYAk6X8hJxlPeVq86R@btmokbo8bpouksbiy9tl-mysql.services.clever-cloud.com:3306/btmokbo8bpouksbiy9tl"
);
// const sequelize = new Sequelize(
//   process.env.DATABASE,
//   process.env.MYSQLUSERNAME,
//   process.env.MYSQLPASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: "mysql",
//   }
// );

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.error("Failed to synchronize database:", error);
  });

module.exports = sequelize;
