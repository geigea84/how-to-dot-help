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
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bio: {
            type: DataTypes.STRING(500),
            allowNull: true,
        },
        //https://sequelize.org/master/manual/validations-and-constraints.html
        //allowNull interaction with other validators
        phone_number: {
            type: DataTypes.STRING,
            allowNull: true,
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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }

    },
    {
        hooks: {
            async beforeCreate(newVolunteerData) {
                newVolunteerData.password = await bcrypt.hash(newVolunteerData.password, 12);
                return newVolunteerData;
            },
            async beforeCreate(updatedVolunteerData) {
                updatedVolunteerData.password = await bcrypt.hash(updatedVolunteerData, 12);
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        //nature of sql utilizes underscored rather than camel/pascal
        underscored: true,
        modelName: "volunteer"   
    }
);

module.exports = Volunteer;