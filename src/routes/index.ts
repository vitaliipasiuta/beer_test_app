/**
 * Application main router
 */
import * as express from 'express';

import {BeerRoute} from './Beer';

const router = express.Router();

router.use('/beer', new BeerRoute().initRoutes());

export {
  router,
};
