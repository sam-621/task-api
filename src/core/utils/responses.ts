abstract class NetworkResponse {
  statusCode: number;
  message = '';

  constructor(statusCode: number, message: string) {
    this.statusCode = statusCode;
    this.message = message;
  }
}
export class ServiceResponse<T = unknown> extends NetworkResponse {
  data: T | null;

  constructor(statusCode: number, data: T | null, message: string) {
    super(statusCode, message);
    this.data = data;
  }
}

export class MiddlewareResponse extends NetworkResponse {
  constructor(statusCode: number, message: string) {
    super(statusCode, message);
  }
}
