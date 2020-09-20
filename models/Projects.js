const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Project extends Model {}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        project_text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        priority: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        /*,
        users_with_access: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'username'
            }
        }
        */
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'project'
    }
)

module.exports = Project;