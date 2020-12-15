const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

//create our User model
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

//define table columns and configuration
User.init(
    {
        //define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
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
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 12);
                return newUserData;
            },
            async beforeCreate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData, 12);
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        //nature of sql utilizes underscored rather than camel/pascal
        underscored: true,
        modelName: "user"   
    }
);

module.exports = User;