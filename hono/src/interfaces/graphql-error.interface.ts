import type { ErrorCodesType } from '@types/error-codes.type';

interface GraphQLError {
  message: string;
  locations?: { line: number; column: number; }[];
  path?: string[];
  extensions?: { code: ErrorCodesType };
}

export default GraphQLError;
