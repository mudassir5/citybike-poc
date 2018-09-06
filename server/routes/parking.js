import {
    Router
} from 'express';
import {
    ParkingController
} from '../controllers';

const router = new Router();

router.route('/').get(ParkingController.parking);

export default router;