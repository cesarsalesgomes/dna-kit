import { HTTPException } from 'hono/http-exception';
import type { StatusCode } from 'hono/utils/http-status';

import { FORBIDDEN_ERROR, SERVICE_UNAVAILABLE_ERROR } from '@constants/error.constants';
import type { DirectusError } from '@interfaces/directus-error.interface';

export function createServiceUnavailableError(): DirectusError {
  return { errors: [SERVICE_UNAVAILABLE_ERROR] };
}

export function createForbiddenError(): DirectusError {
  return { errors: [FORBIDDEN_ERROR] };
}

export function createHonoHttpException(status: StatusCode, error: DirectusError) {
  return new HTTPException(status, { cause: error });
}
