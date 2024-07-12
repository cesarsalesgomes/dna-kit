import { getContext, setContext } from 'svelte';

import ForbiddenAccessModalStateState from './forbidden-access-modal-state.svelte';

const FORBIDDEN_ACCESS_MODAL_KEY = Symbol('FORBIDDEN_ACCESS_MODAL_KEY');

export function setForbiddenAccessModalState() {
  return setContext(FORBIDDEN_ACCESS_MODAL_KEY, new ForbiddenAccessModalStateState());
}

export function getForbiddenAccessModalState() {
  return getContext<ReturnType<typeof setForbiddenAccessModalState>>(FORBIDDEN_ACCESS_MODAL_KEY);
}
