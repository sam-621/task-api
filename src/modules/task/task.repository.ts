import { ITask } from '@/interfaces/task.interface';
import { Repository } from '@/repositories/repository.repository';
import { TaskModel } from '@/schemas/task.schema';

export class TaskRepository extends Repository<ITask> {
  constructor() {
    super(TaskModel);
  }
}
