const User = require("./User");
const Admin     = require("./Admin");
const NFP       = require("./NFP");
const VolNFPs   = require("./VolNFPs");

User.belongsToMany(NFP, {
    through: VolNFPs,
    as: 'interested',
    foreignKey: "user_id"
});

NFP.belongsToMany(User, {
    through: VolNFPs,
    as: 'interested',
    foreignKey: "nfp_id"
});

module.exports = {User, Admin, NFP, VolNFPs};