import { model, Schema } from 'mongoose';
import { ITask, TaskStatus } from '../interfaces/task.interface';

const taskSchema = new Schema<ITask>({
  content: { type: String, required: true },
  createdAt: { type: Date, required: false, default: new Date() },
  owner: { type: String, required: true },
  status: {
    type: String,
    enum: [TaskStatus.PENDING, TaskStatus.COMPLETED],
    required: false,
    default: TaskStatus.PENDING,
  },
});

export const UserModel = model<ITask>('users', taskSchema);
