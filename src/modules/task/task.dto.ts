import { ITask } from '../../core/interfaces/task.interface';

export type CreateTaskDto = Pick<ITask, 'content' | 'ownerId' | 'status'>;
export type UpdateTaskDto = Pick<ITask, 'content' | 'status'>;

export type GetTasksDto = Pick<ITask, 'ownerId'>;
