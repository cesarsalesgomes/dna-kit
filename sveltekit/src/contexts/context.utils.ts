import type { NotificationState } from '$features/notification/states/notification-state.svelte';
import { DirectusClientSdk } from '$lib/directus';

import { getNotificationState, setNotificationState } from './notification/notification.context';
import { setPageState } from './page/page.context';

function setStateToContexts() {
  setPageState();
  setNotificationState();
}

function setNotificationStateToDirectusSdk(notificationState: NotificationState) {
  DirectusClientSdk.setNotificationState(notificationState);
}

function setContextToLibraries(notificationState: NotificationState) {
  setNotificationStateToDirectusSdk(notificationState);
}

export function setGlobalContexts() {
  setStateToContexts();
  setContextToLibraries(getNotificationState());
}
