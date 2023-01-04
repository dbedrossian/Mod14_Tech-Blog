const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'userId'
});

Comment.belongsTo(User, {
    foreignKey: 'userId'
})

module.exports = { User, Post, Comment };