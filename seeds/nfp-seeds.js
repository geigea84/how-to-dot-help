const {NFP} = require("../models");

const nfpData = [
    {
        nfp_name: "Mike",
        url: "https://mike.com",
        cause: "mike",
        tags: "mike",
        description: "mike",
        size: 100,
        founding_year: 2000,
        reported_net_assets: 3.50,
        city: "Miami",
        state: "FL",
        zip: 11111,
        phone_number: 1111111111,
        email: "mike@mike.com"
    },
    {
        nfp_name: "November",
        url: "https://november.com",
        cause: "november",
        tags: "november",
        description: "november",
        size: 200,
        founding_year: 2001,
        reported_net_assets: 12.34,
        city: "Austin",
        state: "TX",
        zip: 22222,
        phone_number: 2222222222,
        email: "november@november.com"
    },
    {
        nfp_name: "Oscar",
        url: "https://oscar.com",
        cause: "oscar",
        tags: "oscar",
        description: "oscar",
        size: 10,
        founding_year: 1910,
        reported_net_assets: 123456.78,
        city: "Seattle",
        state: "WA",
        zip: 33333,
        phone_number: 3333333333,
        email: "oscar@oscar.com"
    }
];

const seedNfps = () => NFP.bulkCreate(nfpData);

module.exports = seedNfps;