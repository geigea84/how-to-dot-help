const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class NFP extends Model {}

NFP.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nfp_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10, 20]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        site_link: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isUrl: true
            }
        }
        //placeholder for logo column here
    },
    {
        sequelize,
        //adjust/add timestamps here or elsewhere?----------------------------------------------
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "NFP"
    }
);

module.exports = NFP;