import { Request, Response, Router } from 'express';
import { IController, TModel, TMongoId } from '../../core/interfaces/util.interface';
import { GetTasksDto } from './task.dto';
import { TasksService } from './task.service';

export class TaskController implements IController {
  path = '/tasks';
  router = Router();
  private taskService = new TasksService();

  setupRoutes() {
    this.router.get(`${this.path}/:id`, this.getTask);
    this.router.get(`${this.path}`, this.getTasks);
  }

  private async getTask(req: Request, res: Response) {
    const id = req.params.id as unknown as TMongoId;

    const { data, message, statusCode } = await this.taskService.getById(id);

    return res.status(statusCode).json({
      data,
      message,
    });
  }

  private async getTasks(req: Request, res: Response) {
    const { ownerId } = req.body as GetTasksDto;

    const { data, message, statusCode } = await this.taskService.getAll(ownerId);

    return res.status(statusCode).json({
      data,
      message,
    });
  }
}
