import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const authRouter = express.Router();

authRouter.post('/signup', async (req, res) => {
  const { email, username, password, role } = req.body;
  console.log(req.body);

  const [foundUser, created] = await User.findOrCreate({
    where: { email },
    defaults:{ username, role, password: await bcrypt.hash(password, 5) } ,
  });

  if (!created) return res.status(401).json({ message: 'Email is in use' });

  req.session.user = foundUser;

  return res.sendStatus(200);
});

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const foundUser = await User.findOne({ where: { email } });

  if (!foundUser) return res.status(401).json({ message: 'No such email' });

  if (await bcrypt.compare(password, foundUser.hashpass)) {
    req.session.user = foundUser;
    return res.sendStatus(200);
  }

  return res.status(401).json({ message: 'Wrong password' });
});

authRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('students_sid');
  res.sendStatus(200);
});

export default authRouter;
