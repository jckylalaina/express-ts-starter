import MessageResponse from './MessageResponse';

export interface ErrorResponse extends MessageResponse {
  stack?: string;
  code?: string;
}

export type ErrorProps = {
  errorCode: 'UNAUTHORIZED_ACCESS' | 'FORBIDDEN_RESOURCE' | 'RESOURCE_NOT_FOUND' | 'SERVER_ERROR';
  statusCode: 400 | 401 | 402 | 403 | 404 | 500 | 501 | 502 | 503;
  message: string;
};
