import type { Request, RequestHandler, Response } from 'express';
import { handleServiceResponse } from '../../common/utils/httpHandlers';
import { taskService } from './taskService';

class TaskController {
  public getTasks: RequestHandler = async (_req: Request, res: Response) => {
    const serviceResponse = await taskService.getAll(_req);
    return handleServiceResponse(serviceResponse, res);
  };

  public createTask: RequestHandler = async (_req: Request, res: Response) => {
    const serviceResponse = await taskService.create(_req);
    return handleServiceResponse(serviceResponse, res);
  };

  public updateTask: RequestHandler = async (_req: Request, res: Response) => {
    const serviceResponse = await taskService.update(_req);
    return handleServiceResponse(serviceResponse, res);
  };
}

export const taskController = new TaskController();
