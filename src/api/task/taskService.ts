import { Request } from 'express';
import { ServiceResponse } from '../../common/types/serviceResponse';
import { PrismaClient } from '@prisma/client';
import { prismaErrorHandler } from '../../common/middlewares/errorHandlers';

const prisma = new PrismaClient();

class TaskService {
  async getAll(_req: Request): Promise<ServiceResponse> {
    try {
      const tasks = await prisma.task.findMany();
      return ServiceResponse.success<any>('Successfully fetched tasks:', { tasks });
    } catch (ex) {
      console.log(ex);
      let errorMessage = prismaErrorHandler(ex);
      return ServiceResponse.failure(errorMessage);
    }
  }

  async create(_req: Request): Promise<ServiceResponse> {
    const { title, color } = _req.body;
    try {
      if (!title || !color) throw Error('Title and color can`t be empty');
      const task = await prisma.task.create({
        data: { title, color, completed: false },
      });
      return ServiceResponse.success<any>('Successfully created task:', { task });
    } catch (ex) {
      console.log(ex);
      let errorMessage = prismaErrorHandler(ex);
      return ServiceResponse.failure(errorMessage);
    }
  }

  async update(_req: Request): Promise<ServiceResponse> {
    const { id } = _req.params;
    const { title, color, completed } = _req.body;
    try {
      if (!id) throw Error('Id can`t be empty');
      if (!title || !color) throw Error('Title and color can`t be empty');
      const task = await prisma.task.update({
        where: { id: Number(id) },
        data: { title, color, completed },
      });
      return ServiceResponse.success<any>('Successfully created task:', { task });
    } catch (ex) {
      console.log(ex);
      let errorMessage = prismaErrorHandler(ex);
      return ServiceResponse.failure(errorMessage);
    }
  }

  async delete(_req: Request): Promise<ServiceResponse> {
    const { id } = _req.params;
    try {
      if (!id) throw Error('Id can`t be empty');
      await prisma.task.delete({ where: { id: Number(id) } });
      return ServiceResponse.success<any>('Successfully deleted task with id:', { id });
    } catch (ex) {
      console.log(ex);
      let errorMessage = prismaErrorHandler(ex);
      return ServiceResponse.failure(errorMessage);
    }
  }
}

export const taskService = new TaskService();
