import { getContext, setContext } from 'svelte';

import { NotificationState } from '$features/notification/states/notification-state.svelte';

const NOTIFICATION_KEY = Symbol('NOTIFICATION_KEY');

export function setNotificationState() {
  return setContext(NOTIFICATION_KEY, new NotificationState());
}

export function getNotificationState() {
  return getContext<ReturnType<typeof setNotificationState>>(NOTIFICATION_KEY);
}
