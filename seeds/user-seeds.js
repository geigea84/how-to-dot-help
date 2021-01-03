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
        password: "alphaBravo",
        image_url: "https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2219,w_3200/https%3A%2F%2Fbeargoggleson.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2016%2F04%2F1195630087.jpeg",
        isAdmin: false
    },
    {
        first_name: "Charlie",
        last_name: "Delta",
        city: "New York",
        state: "NY",
        bio: "J! E! T! S!",
        phone_number: "5555555555",
        email: "charlie@delta.com",
        password: "charlieDelta",
        image_url: "https://www.gannett-cdn.com/presto/2020/12/22/USAT/fe4829c1-72a3-4d21-aa8f-d9f042d9c0b5-AP_Jets_Rams_Football.jpg?crop=4669,2626,x213,y453&width=3200&height=1800&format=pjpg&auto=webp",
        isAdmin: false
    },
    {
        first_name: "Echo",
        last_name: "Foxtrot",
        city: "Los Angeles",
        state: "CA",
        bio: "Go back to San Diego and St. Louis",
        phone_number: "6666666666",
        email: "echo@foxtrot.com",
        password: "echoFoxtrot",
        image_url: "https://static.clubs.nfl.com/image/private/t_editorial_landscape_8_desktop_mobile/f_png/chargers/gdj4hxdx3mw2tbjg8kuo.png",
        isAdmin: false
    },
    {
        first_name: "Admin",
        last_name: "Pserson",
        city: "Los Angeles",
        state: "CA",
        bio: "Go back to San Diego and St. Louis",
        phone_number: "6666666666",
        email: "Admin@admin.com",
        password: "adminadmin",
        image_url: "https://static.clubs.nfl.com/image/private/t_editorial_landscape_8_desktop_mobile/f_png/chargers/gdj4hxdx3mw2tbjg8kuo.png",
        isAdmin: false
    }

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;