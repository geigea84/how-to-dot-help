const Sequelize = require('sequelize');
require('dotenv').config();

//create connection to the database
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
}
else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PW,
        {
            // host: "z3iruaadbwo0iyfp.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
            // dialect: "mysql",
            // port: 3306
            host: "localhost",
            dialect: "mysql",
            port: 3306
        }
    );

}

module.exports = sequelize;