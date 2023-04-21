import express from 'express';
import { Order } from '../../db/models';
import isCourier from '../middlewares/isCourier';
import isClient from '../middlewares/isClient';
// import isAuth from '../middlewares/isAuth';
// import notAuth from '../middlewares/notAuth';
// import { User } from '../../db/models';

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

router.get('/orders', isCourier, async (req, res) => {
  const orders = await Order.findAll({
    where: { status: false },
    order: [['createdAt', 'DESC']],
  });
  const initState = { orders };
  res.render('Layout', initState);
});

router.get('/clients', isClient, async (req, res) => {
  const orders = await Order.findAll({
    where: { status: false },
    order: [['createdAt', 'DESC']],
  });
  console.log('===========>', orders);
  const initState = { orders };
  res.render('Layout', initState);
});

// router.get('/posts', isAuth, async (req, res) => {
//   const allPosts = await Post.findAll({
//     include: User,
//     order: [['updatedAt', 'DESC']],
//   });
//   const initState = { allPosts };
//   res.render('Layout', initState);
// });

export default router;
