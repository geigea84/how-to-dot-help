const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class VolNFPs extends Model {}

VolNFPs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        volunteer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "volunteer",
                key: "id"
            }
        },
        nfp_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "nfp",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "volnfps"
    }
);

module.exports = VolNFPs;