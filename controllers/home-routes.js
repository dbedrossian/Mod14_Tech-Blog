const router = require('express').Router();
const { Post, Comment } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: Post,
          attributes: ['postTitle', 'postDescription'],
        },
      ],
    });

    const posts = postData.map((Post) =>
      Post.get({ plain: true })
    );
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: [
            'id',
            'contents',
            'creator',
            'date',
          ],
        },
      ],
    });

    const post = postData.get({ plain: true });
    res.render('post', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE a post
router.post('/', async (req, res) => {
    try {
      const postData = await Post.create({
        userId: req.body.userId,
      });
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// CREATE a comment
router.post('/', async (req, res) => {
    try {
      const commentData = await Comment.create({
        userId: req.body.userId,
      });
      res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Login
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
