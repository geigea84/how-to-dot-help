const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class Admin extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

//anticipating more requests for input from HTDH
Admin.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 8
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newAdminData) {
                newAdminData.password = await bcrypt.hash(newAdminData.password, 10);
                return newAdminData;
            },
            async beforeUpdate(updatedAdminData) {
                updatedAdminData.password = await bcrypt.hash(updatedAdminData.password, 10);
                return updatedAdminData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "admin"
    }
);

module.exports = Admin;