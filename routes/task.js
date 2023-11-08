import express from "express";
import { myTask, newTask, taskDeleted, taskUpdated } from "../controllers/task.js";
import { authenticate } from "../midlewares/auth.js";
const router =express.Router();

router.post('/new',authenticate,newTask);
router.get('/my',authenticate,myTask);
router.route('/:id').put(authenticate,taskUpdated).delete(authenticate,taskDeleted);

export default router;0