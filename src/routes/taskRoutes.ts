import express from 'express';
import { createTask, getTasks, deleteTask } from '../controllers/taskController';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();
router.use(protect);

router.post('/', createTask);
router.get('/', getTasks);
router.delete('/:id', deleteTask);

export default router;
