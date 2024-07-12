import type FetchesBeingPerformedState from '$contexts/fetches-being-performed/fetches-being-performed-state.svelte';
import type InvalidateKeys from '$enums/invalidate-keys.enum';

import { invalidate } from '$app/navigation';

export const invalidateWithLoading = async (key: InvalidateKeys, fetchesBeingPerformedState: FetchesBeingPerformedState) => {
  fetchesBeingPerformedState.incrementFetchesBeingPerformed();

  try {
    await invalidate(key);
  } catch (error) {
    /* empty */
  }

  fetchesBeingPerformedState.decrementFetchesBeingPerformed();
};
