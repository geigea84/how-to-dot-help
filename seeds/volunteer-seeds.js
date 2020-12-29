const {User} = require("../models");

const userData = [
    {
        first_name: "Alpha",
        last_name: "Bravo",
        city: "Chicago",
        state: "IL",
        bio: "Da Bears",
        phone_number: "4444444444",
        email: "alpha@bravo.com",
        password: "alphaBravo"
    },
    {
        first_name: "Charlie",
        last_name: "Delta",
        city: "New York",
        state: "NY",
        bio: "J! E! T! S!",
        phone_number: "5555555555",
        email: "charlie@delta.com",
        password: "charlieDelta"
    },
    {
        first_name: "Echo",
        last_name: "Foxtrot",
        city: "Los Angeles",
        state: "CA",
        bio: "Go back to San Diego and St. Louis",
        phone_number: "6666666666",
        email: "echo@foxtrot.com",
        password: "echoFoxtrot"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;