import { ClientErrorCodes, ServerErrorCodes } from '@enums/error-codes.enum';
import type { GraphQLError } from '@interfaces/graphql-error.interface';

export const INTERNAL_SERVER_ERROR: GraphQLError = {
  message: 'Internal server error',
  extensions: {
    code: ServerErrorCodes.INTERNAL_SERVER_ERROR,
  },
};

export const UNEXPECTED_SERVER_ERROR: GraphQLError = {
  message: 'Unexpected error',
  extensions: {
    code: ServerErrorCodes.INTERNAL_SERVER_ERROR,
  },
};

export const SERVICE_UNAVAILABLE_ERROR: GraphQLError = {
  message: 'Service unavailable',
  extensions: {
    code: ServerErrorCodes.SERVICE_UNAVAILABLE,
  },
};

export const FORBIDDEN_ERROR: GraphQLError = {
  message: "You don't have permission to access this",
  extensions: {
    code: ClientErrorCodes.FORBIDDEN,
  },
};

export const NOT_FOUND_SERVER_ERROR_MESSAGE = 'Not Found';
