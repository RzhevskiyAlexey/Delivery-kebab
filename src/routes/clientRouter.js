import express from 'express';
import { Order } from '../../db/models';

const clientRouter = express.Router();

clientRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const newClient = await Order.update(req.body, { where: { id } });
  console.log(id);
  res.json(newClient);
});
export default clientRouter;
