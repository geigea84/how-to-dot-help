const Volunteer = require("./Volunteer");
const Admin     = require("./Admin");
const NFP       = require("./NFP");
const VolNFPs   = require("./VolNFPs");

Volunteer.belongsToMany(NFP, {
    through: VolNFPs,
    as: 'interested',
    foreignKey: "volunteer_id"
});

NFP.belongsToMany(Volunteer, {
    through: VolNFPs,
    as: 'interested',
    foreignKey: "nfp_id"
});

module.exports = {Volunteer, Admin, NFP, VolNFPs};