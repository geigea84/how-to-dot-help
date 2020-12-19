const volunteerSeeds = require("./volunteer-seeds");
const adminSeeds     = require("./admin-seeds");
const nfpSeeds       = require("./nfp-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log("==========DATABASE SYNCED");

    await volunteerSeeds();
    console.log("==========VOLUNTEERS SEEDED");

    await adminSeeds();
    console.log("==========ADMINS SEEDED");

    await nfpSeeds();
    console.log("==========NFPS SEEDED");

    process.exit(0);
};

seedAll();