import express from 'express';
import TodoController from '../controllers/todos.controller';

const router = express.Router();
const { create } = TodoController;

router.post('/', create);

export default router;
