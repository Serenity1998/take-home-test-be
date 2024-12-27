import express, { type Router } from 'express';
import { taskController } from './taskController';

export const taskRouter: Router = express.Router();

taskRouter.get('/', taskController.getTasks);
taskRouter.post('/', taskController.createTask);
taskRouter.put('/:id', taskController.updateTask);
taskRouter.delete('/:id', taskController.deleteTask);
