import { getContext, setContext } from 'svelte';

import { PageState } from './page-state.svelte';

const PAGE_KEY = Symbol('PAGE_KEY');

export function setPageState() {
  return setContext(PAGE_KEY, new PageState());
}

export function getPageState() {
  return getContext<ReturnType<typeof setPageState>>(PAGE_KEY);
}
