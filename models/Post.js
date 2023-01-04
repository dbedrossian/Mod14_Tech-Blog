const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        postTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postDescription: {
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

module.exports = Post;