import type { NotificationState } from '$features/notification/states/notification-state.svelte';
import { DirectusClientSdk } from '$lib/directus';

import type FetchesBeingPerformedState from './fetches-being-performed/fetches-being-performed-state.svelte';
import { getFetchesBeingPerformedState, setFetchesBeingPerformedState } from './fetches-being-performed/fetches-being-performed.context';
import { setForbiddenAccessModalState } from './forbidden-access-modal/forbidden-access-modal.context';
import { getNotificationState, setNotificationState } from './notification/notification.context';
import { setPageState } from './page/page.context';

function setStateToContexts() {
  setPageState();
  setNotificationState();
  setFetchesBeingPerformedState();
  setForbiddenAccessModalState();
}

function setStatesToDirectusSdk(notificationState: NotificationState, fetchesBeingPerformedState: FetchesBeingPerformedState) {
  DirectusClientSdk.setNotificationState(notificationState);
  DirectusClientSdk.setFetchesBeingPerformedState(fetchesBeingPerformedState);
}

function setContextToLibraries(notificationState: NotificationState, fetchesBeingPerformedState: FetchesBeingPerformedState) {
  setStatesToDirectusSdk(notificationState, fetchesBeingPerformedState);
}

export function setGlobalContexts() {
  setStateToContexts();
  setContextToLibraries(getNotificationState(), getFetchesBeingPerformedState());
}
