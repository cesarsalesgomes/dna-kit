import { getContext, setContext } from 'svelte';

import FetchesBeingPerformedState from './fetches-being-performed-state.svelte';

const FETCHES_BEING_PERFORMED_KEY = Symbol('FETCHES_BEING_PERFORMED_KEY');

export function setFetchesBeingPerformedState() {
  return setContext(FETCHES_BEING_PERFORMED_KEY, new FetchesBeingPerformedState());
}

export function getFetchesBeingPerformedState() {
  return getContext<ReturnType<typeof setFetchesBeingPerformedState>>(FETCHES_BEING_PERFORMED_KEY);
}
