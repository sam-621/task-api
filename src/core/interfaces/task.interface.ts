export interface ITask {
  content: string;
  createdAt: Date;
  owner: string;
  status: TaskStatus;
}

export enum TaskStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
}
