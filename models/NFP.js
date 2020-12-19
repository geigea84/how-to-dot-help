const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

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
            unique: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                isUrl: true
            }
        },
        cause: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        tags: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        founding_year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [4]
            }
        },
        reported_net_assets: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        state: {
            type: DataTypes.STRING(2),
            allowNull: false
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5]
            }
        },
        phone_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [10]
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
        
        //placeholder for logo column here
    },
    {
        sequelize,
        //adjust/add timestamps here or elsewhere?----------------------------------------------
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        freezeTableName: true,
        underscored: true,
        modelName: "nfp"
    }
);

module.exports = NFP;