import { Request, Response, Router } from 'express';
import { IController, TModel, TMongoId } from '../../core/interfaces/util.interface';
import { CreateTaskDto, GetTasksDto } from './task.dto';
import { TasksService } from './task.service';

export class TaskController implements IController {
  path = '/tasks';
  router = Router();

  constructor() {
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.get(`${this.path}/:id`, this.getTask);
    this.router.get(`${this.path}`, this.getTasks);
    this.router.post(`${this.path}/create`, this.createTask);
  }

  private async getTask(req: Request, res: Response) {
    const taskService = new TasksService();
    const id = req.params.id as unknown as TMongoId;

    const { data, message, statusCode } = await taskService.getById(id);

    return res.status(statusCode).json({
      data,
      message,
    });
  }

  private async getTasks(req: Request, res: Response) {
    const taskService = new TasksService();
    const { ownerId } = req.body as GetTasksDto;

    const { data, message, statusCode } = await taskService.getAll(ownerId);

    return res.status(statusCode).json({
      data,
      message,
    });
  }

  private async createTask(req: Request, res: Response) {
    const taskService = new TasksService();
    const createTaskDto = req.body as CreateTaskDto;

    const { data, message, statusCode } = await taskService.create(createTaskDto);

    return res.status(statusCode).json({
      data,
      message,
    });
  }
}
