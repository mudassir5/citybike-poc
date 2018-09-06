import {
    Router
} from 'express';
import {
    StationsController
} from '../controllers';

const router = new Router();

router.route('/').get(StationsController.stations);

export default router;