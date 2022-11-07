import { check, checkSchema, ValidationChain } from 'express-validator';
import { TaskStatus } from '../../core/interfaces/task.interface';

export const createTaskValidator: ValidationChain[] = [
  check('content', 'Content must not be empty').isString().notEmpty(),
  check('ownerId', 'Owner id must not be empty').isString().notEmpty(),
  check('stats', 'Status must not be different from completed or pending').custom((input) => {
    if (input === TaskStatus.COMPLETED || input === TaskStatus.PENDING || input === '') {
      return true;
    }

    throw new Error('Status must not be different from completed or pending');
  }),
];

export const updateTaskValidator: ValidationChain[] = [
  check('content', 'Content must not be empty').isString().notEmpty(),
  check('stats', 'Status must not be different from completed or pending').custom((input) => {
    if (input === TaskStatus.COMPLETED || input === TaskStatus.PENDING || input === '') {
      return true;
    }

    throw new Error('Status must not be different from completed or pending');
  }),
  check('id', 'ID must be a Mongo ID').isMongoId(),
];

export const getTaskValidator: ValidationChain[] = [
  check('id', 'ID must be a Mongo ID').isMongoId(),
];

export const getTasksValidator: ValidationChain[] = [
  check('ownerId', 'Owner id must not be empty').isString().notEmpty(),
];

export const deleteTaskValidator: ValidationChain[] = [
  check('ownerId', 'Owner id must not be empty').isString().notEmpty(),
];
