import type { ErrorHandler } from 'hono';
import type { BlankEnv } from 'hono/types';

import type { DirectusError } from '@interfaces/directus-error.interface';

import { createServiceUnavailableError } from './error.factory';
import { checkIsDirectusError } from './error.utils';

export function honoErrorHandler(): ErrorHandler<BlankEnv> {
  return (err, c) => {
    console.error(err);

    if (checkIsDirectusError(err.cause)) {
      return c.json(err.cause as DirectusError, 500);
    }

    return c.json(createServiceUnavailableError(), 503);
  };
}
