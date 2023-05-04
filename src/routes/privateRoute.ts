import express from 'express';

import { requireAuth } from '../middlewares/require-auth';

const router = express.Router();

router.get('/api/users/privateroute', requireAuth, (req, res) => {
  res.send({ authenticated: true });
});

export { router as privateRouteRouter };
