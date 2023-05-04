import express from 'express';
import { currentUser } from '../middlewares/current-user';
import { requireAuth } from '../middlewares/require-auth';

const router = express.Router();

router.get('/api/users/currentuser', requireAuth, (req, res) => {
  res.send({ authenticated: true });
});

export { router as currentUserRouter };
