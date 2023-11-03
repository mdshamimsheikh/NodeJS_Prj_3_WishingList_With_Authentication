import express  from "express";
import { User } from "../models/user.js";
import { all_user, deleted, register, special, updated, user_id } from "../controllers/user.js";
const router = express.Router();

router.get('/all',all_user );
router.post('/new', register);
//Dynamic Rout
router.get('/special',special);
router.route('/userid/:id',user_id).put(updated).delete(deleted);
// router.get('/userid/:id',user_id);
// router.put('/userid/:id',updated);
// router.delete('/userid/:id',deleted);
export default router;