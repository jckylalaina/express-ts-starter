import { ErrorProps } from 'src/interfaces/Error';

class ApiError extends Error {
  errorCode: string;
  statusCode: number;

  constructor({ errorCode, statusCode, message }: ErrorProps) {
    super(message);
    this.errorCode = errorCode;
    this.statusCode = statusCode;
  }
}

export default ApiError;
