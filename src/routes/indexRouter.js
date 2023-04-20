import express from 'express';
// import isAuth from '../middlewares/isAuth';
// import notAuth from '../middlewares/notAuth';
// import { User, Post } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('Layout');
});

router.get('/signup', (req, res) => {
  res.render('Layout');
});

router.get('/login', (req, res) => {
  res.render('Layout');
});

router.get('/orders', (req, res) => {
  res.render('Layout');
});

router.get('/client', (req, res) => {
  res.render('Layout');
});

// router.get('/students', isAuth, async (req, res) => {
//   const students = await User.findAll();
//   const initState = { students };
//   res.render('Layout', initState);
// });

// router.get('/posts', isAuth, async (req, res) => {
//   const allPosts = await Post.findAll({
//     include: User,
//     order: [['updatedAt', 'DESC']],
//   });
//   const initState = { allPosts };
//   res.render('Layout', initState);
// });

export default router;
