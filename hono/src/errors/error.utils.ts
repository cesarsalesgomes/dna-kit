import { checkIfIsArrayWithItens } from '@utils/array.utils';

export function checkIsDirectusError(e: any): boolean {
  if (!e) return false;

  return checkIfIsArrayWithItens(e.errors);
}
