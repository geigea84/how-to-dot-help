const {Volunteer} = require("../models");

const volunteerData = [
    {
        first_name: "Alpha",
        last_name: "Bravo",
        city: "Chicago",
        state: "IL",
        bio: "Da Bears",
        phone_number: 1122334455,
        email: "alpha@bravo.com",
        password: "alphaBravo"
    },
    {
        first_name: "Charlie",
        last_name: "Delta",
        city: "New York",
        state: "NY",
        bio: "J! E! T! S!",
        phone_number: 9988776655,
        email: "charlie@delta.com",
        password: "charlieDelta"
    },
    {
        first_name: "Echo",
        last_name: "Foxtrot",
        city: "Los Angeles",
        state: "CA",
        bio: "Go back to San Diego and St. Louis",
        phone_number: 1111122222,
        email: "echo@foxtrot.com",
        password: "echoFoxtrot"
    }
];

const seedVolunteers = () => Volunteer.bulkCreate(volunteerData);

module.exports = seedVolunteers;