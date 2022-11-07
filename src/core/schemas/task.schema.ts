import { HydratedDocument, model, Schema } from 'mongoose';
import { ITask, TaskStatus } from '../interfaces/task.interface';

const taskSchema = new Schema<ITask>({
  content: { type: String, required: true },
  createdAt: { type: Date, required: false, default: new Date() },
  ownerId: { type: String, required: true },
  status: {
    type: String,
    enum: [TaskStatus.PENDING, TaskStatus.COMPLETED],
    required: false,
    default: TaskStatus.PENDING,
  },
});

export const TaskModel = model<ITask>('users', taskSchema);