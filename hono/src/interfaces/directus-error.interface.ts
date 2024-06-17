import type { GraphQLError } from './graphql-error.interface';

interface DirectusError {
  errors: GraphQLError[];
}

export type { DirectusError };
