/**
 *  管理员 model
 */

const Sequelize = require('sequelize');

const isCharOrNum = /^[A-Za-z0-9]+$/;

module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('admin', {
        admin_id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'admin',
            validate: {
                notEmpty: true,
                len: [2, 10],
                isMeetRequirement: function(value) {
                    if (!isCharOrNum.test(value)) {
                        throw new Error('Only char or number values are allowed!')
                    }
                }
            }
        },
        admin_name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'admin',
            validate: {
                notEmpty: true,
                len: [2, 10],
                isMeetRequirement: function(value) {
                    if (!isCharOrNum.test(value)) {
                        throw new Error('Only char or number values are allowed!')
                    }
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'admin',
            validate: {
                notEmpty: true,
                len: [5, 10],
                isMeetRequirement: function(value) {
                    if (!isCharOrNum.test(value)) {
                        throw new Error('Only char or number values are allowed!')
                    }
                }
            }
        }
    });

    Admin.sync({force: true}).then(() => {
        return Admin.create({
            admin_id: "admin",
            admin_name: "admin",
            password: "admin"
        })
    })
    
    return Admin;
}








