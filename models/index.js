const Volunteer = require("./Volunteer");
const Admin     = require("./Admin");
const NFP       = require("./NFP");

/*
Possible relationships, will need discussion with team
nfp has many volunteer
volunteer has many nfp
*/

Volunteer.belongsToMany(NFP, {
    through: volunteerNfps,
    foreignKey: "volunteer_id"
});

NFP.hasMany(Volunteer, {
    foreignKey: "nfp_id"
});

module.exports = {Volunteer, Admin, NFP};