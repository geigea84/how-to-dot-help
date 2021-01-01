const {NFP} = require("../models");

const nfpData = [
    {
        nfp_name: "Mike",
        url: "https://mike.com",
        cause: "microphones",
        tags: "loud noises",
        description: "mic check one two yup",
        size: "100",
        founding_year: "2000",
        reported_net_assets: 3.50,
        city: "Miami",
        state: "FL",
        zip: "11111",
        phone_number: "1111111111",
        email: "mike@mike.com",
        image_url: "https://mynewmicrophone.com/wp-content/uploads/2019/07/mnm_What_Is_Microphone_Feedback_And_How_To_Eliminate_It_For_Good_large.jpg"
    },
    {
        nfp_name: "November",
        url: "https://november.com",
        cause: "That cold November rain",
        tags: "GNR",
        description: "A song about a girl named April",
        size: "200",
        founding_year: "2001",
        reported_net_assets: 12.34,
        city: "Austin",
        state: "TX",
        zip: "22222",
        phone_number: "2222222222",
        email: "november@november.com",
        image_url: "https://uproxx.com/wp-content/uploads/2015/01/chris-pratt.jpg?w=650"
    },
    {
        nfp_name: "Oscar",
        url: "https://oscar.com",
        cause: "The Grouch",
        tags: "I live in a trash can",
        description: "I'm from the streets.  The Sesame Streets",
        size: "10",
        founding_year: "1910",
        reported_net_assets: 123456.78,
        city: "Seattle",
        state: "WA",
        zip: "33333",
        phone_number: "3333333333",
        email: "oscar@oscar.com",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOPflnKg6W81rj63WwlpJ-yN5aKm71BXXRXw&usqp=CAU"
    }
];

const seedNfps = () => NFP.bulkCreate(nfpData);

module.exports = seedNfps;