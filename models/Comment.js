const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        commentTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        commentDescription: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;