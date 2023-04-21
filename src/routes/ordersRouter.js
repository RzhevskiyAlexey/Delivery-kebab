import express from 'express';
import { Order } from '../../db/models';

const apiRouter = express.Router();

apiRouter.post('/', async (req, res) => {
  const newOrder = await Order.create(req.body);
  res.json(newOrder);
});

apiRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Order.destroy({ where: { id } });
  res.sendStatus(200);
});
export default apiRouter;
