import { ITask, TaskStatus } from '@/interfaces/task.interface';
import { model, Schema } from 'mongoose';

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
