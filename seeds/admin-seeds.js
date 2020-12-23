const {Admin} = require("../models");

const adminData = [
    {
        email: "golf@hotel.com",
        password: "golfHotel"
    },
    {
        email: "india@juliet.com",
        password: "indiaJuliet"
    },
    {
        email: "kilo@lima.com",
        password: "kiloLima"
    }
];

const seedAdmins = () => Admin.bulkCreate(adminData);

module.exports = seedAdmins;