const volunteerSeeds = require("./volunteer-seeds");
const adminSeeds     = require("./admin-seeds");
const nfpSeeds       = require("./nfp-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log("");
    console.log("========== DATABASE SYNCED ==========");
    console.log("");

    await volunteerSeeds();
    console.log("");
    console.log("========== VOLUNTEER SEEDED ==========");
    console.log("");

    await adminSeeds();
    console.log("");
    console.log("========== ADMIN SEEDED ==========");
    console.log("");

    await nfpSeeds();
    console.log("");
    console.log("========== NFP SEEDED ==========");
    console.log("");

    process.exit(0);
};

seedAll();