import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { TMongoId } from '../../core/interfaces/util.interface';
import { ServiceResponse } from '../../core/utils/responses';
import { CreateTaskDto, UpdateTaskDto } from './task.dto';
import { TaskRepository } from './task.repository';

export class TasksService {
  private taskRepository: TaskRepository;

  constructor() {
    this.taskRepository = new TaskRepository();
  }

  async getById(id: TMongoId) {
    const task = await this.taskRepository.findOneById(id);

    if (!task) return new ServiceResponse(StatusCodes.NOT_FOUND, null, ReasonPhrases.NOT_FOUND);

    return new ServiceResponse(StatusCodes.OK, task, ReasonPhrases.OK);
  }

  async getAll(ownerId: string) {
    const tasks = await this.taskRepository.find({ owner: ownerId });

    return new ServiceResponse(StatusCodes.OK, tasks, ReasonPhrases.OK);
  }

  async create(input: CreateTaskDto) {
    const newTask = await this.taskRepository.insert(input);

    return newTask;
  }

  async update(taskId: TMongoId, input: UpdateTaskDto) {
    const taskUpdated = await this.taskRepository.update(taskId, input);

    return taskUpdated;
  }

  async delete(taskId: TMongoId) {
    await this.taskRepository.delete(taskId);
  }
}
