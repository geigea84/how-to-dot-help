const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

//create our Volunteer model
class Volunteer extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

//define table columns and configuration
Volunteer.init(
    {
        //define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        city: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        bio: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        phone_number: {
            type: DataTypes.STRING(10),
            allowNull: true,
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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 8
            }
        }

        //placeholder for logo column here

    },
    {
        hooks: {
            async beforeCreate(newVolunteerData) {
                newVolunteerData.password = await bcrypt.hash(newVolunteerData.password, 12);
                return newVolunteerData;
            },
            async beforeCreate(updatedVolunteerData) {
                updatedVolunteerData.password = await bcrypt.hash(updatedVolunteerData, 12);
                return updatedVolunteerData;
            }
        },
        sequelize,
        //adjust/add timestamps here or elsewhere?----------------------------------------------
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        freezeTableName: true,
        //nature of sql utilizes underscored rather than camel/pascal
        underscored: true,
        modelName: "volunteer"
    }
);

module.exports = Volunteer;