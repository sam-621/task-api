import { ITask } from '../../core/interfaces/task.interface';
import { Repository } from '../../core/repositories/repository.repository';
import { TaskModel } from '../../core/schemas/task.schema';

export class TaskRepository extends Repository<ITask> {
  constructor() {
    super(TaskModel);
  }
}
