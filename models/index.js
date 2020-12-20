const Volunteer = require("./Volunteer");
const Admin     = require("./Admin");
const NFP       = require("./NFP");
const VolNFPs   = require("./VolNFPs");

/*
Possible relationships, will need discussion with team
nfp has many volunteer
volunteer has many nfp
*/

Volunteer.belongsToMany(NFP, {
    through: VolNFPs,
    foreignKey: "volunteer_id"
});

NFP.belongsToMany(Volunteer, {
    through: VolNFPs,
    foreignKey: "nfp_id"
});

module.exports = {Volunteer, Admin, NFP, VolNFPs};