const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class NFP extends Model { }

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
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        founding_year: {
            type: DataTypes.STRING(4),
            allowNull: false,
            validate: {
                min: 4,
                isNumeric: true
            }
        },
        reported_net_assets: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isNumeric: true
            }
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
            type: DataTypes.STRING(5),
            allowNull: false,
            validate: {
                min: 5,
                isNumeric: true
            }
        },
        phone_number: {
            type: DataTypes.STRING(10),
            allowNull: false,
            validate: {
                min: 10,
                isNumeric: true
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
        image_url: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        freezeTableName: true,
        underscored: true,
        modelName: "nfp"
    }
);

module.exports = NFP;