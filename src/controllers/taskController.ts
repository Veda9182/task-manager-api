import { Request, Response } from 'express';
import { Task } from '../models/taskModel';

export const createTask = async (req: Request, res: Response) => {
  const task = await Task.create({ ...req.body, userId: (req as any).user.id });
  res.status(201).json(task);
};

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await Task.find({ userId: (req as any).user.id });
  res.status(200).json(tasks);
};

export const deleteTask = async (req: Request, res: Response) => {
  await Task.findOneAndDelete({ _id: req.params.id, userId: (req as any).user.id });
  res.status(204).send();
};
