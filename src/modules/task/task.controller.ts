import { IController, TMongoId } from '@/interfaces/util.interface';
import { dataValidator } from '@/middlewares/data-validation.middleware';
import { Request, Response, Router } from 'express';
import { CreateTaskDto, GetTasksDto, UpdateTaskDto } from './task.dto';
import { TasksService } from './task.service';
import {
  createTaskValidator,
  deleteTaskValidator,
  getTasksValidator,
  getTaskValidator,
  updateTaskValidator,
} from './task.validators';

export class TaskController implements IController {
  path = '/tasks';
  router = Router();

  constructor() {
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.get(`${this.path}/:id`, getTaskValidator, dataValidator, this.getTask);
    this.router.get(`${this.path}/owner/:ownerId`, getTasksValidator, dataValidator, this.getTasks);
    this.router.post(`${this.path}/create`, createTaskValidator, dataValidator, this.createTask);
    this.router.put(`${this.path}/update/:id`, updateTaskValidator, dataValidator, this.updateTask);
    this.router.delete(
      `${this.path}/delete/:id`,
      deleteTaskValidator,
      dataValidator,
      this.deleteTask
    );
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
    const { ownerId } = req.params as GetTasksDto;

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

  private async updateTask(req: Request, res: Response) {
    const taskService = new TasksService();

    const updateTaskDto = req.body as UpdateTaskDto;
    const id = req.params.id as unknown as TMongoId;

    const { data, message, statusCode } = await taskService.update(id, updateTaskDto);

    return res.status(statusCode).json({
      data,
      message,
    });
  }

  private async deleteTask(req: Request, res: Response) {
    const taskService = new TasksService();
    const id = req.params.id as unknown as TMongoId;

    const { data, message, statusCode } = await taskService.delete(id);

    return res.status(statusCode).json({
      data,
      message,
    });
  }
}
