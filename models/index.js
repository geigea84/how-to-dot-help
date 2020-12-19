const Volunteer = require("./Volunteer");
const Admin     = require("./Admin");
const NFP       = require("./NFP");

/*
Possible relationships, will need discussion with team
nfp has many volunteer
volunteer has many nfp

*/

module.exports = {Volunteer, Admin, NFP};