import { HTTPException } from 'hono/http-exception';
import type { StatusCode } from 'hono/utils/http-status';

import { FORBIDDEN_ERROR, INTERNAL_SERVER_ERROR, SERVICE_UNAVAILABLE_ERROR } from '@constants/error.constants';
import { ServerErrorCodes } from '@enums/error-codes.enum';
import type { DirectusError } from '@interfaces/directus-error.interface';

export function createInternalServerError(message?: string): DirectusError {
  if (message) {
    return {
      errors: [
        {
          message,
          extensions: {
            code: ServerErrorCodes.INTERNAL_SERVER_ERROR,
          },
        },
      ],
    };
  }

  return { errors: [INTERNAL_SERVER_ERROR] };
}

export function createServiceUnavailableError(): DirectusError {
  return { errors: [SERVICE_UNAVAILABLE_ERROR] };
}

export function createForbiddenError(): DirectusError {
  return { errors: [FORBIDDEN_ERROR] };
}

export function createHonoHttpException(status: StatusCode, error: DirectusError) {
  return new HTTPException(status, { cause: error });
}
