import { ITEM_CREATED_NOTIFICATION } from '$constants/notification.constants';
import { NOTIFICATION_DISPLAY_TIME_IN_SECONDS } from '$constants/system.constants';

import { NotificationType } from '../enums';
import type { Notification } from '../types/notification.type';

export class NotificationState {
  notification = $state<Notification>();

  setNotification(message: string, type: NotificationType) {
    this.notification = { message, type };
  }

  hideNotification() {
    this.notification = null;
  }

  hideNotificationAfterDisplaySeconds(notificationDisplaySeconds: number) {
    setTimeout(() => this.hideNotification(), notificationDisplaySeconds * 1000);
  }

  setNotificationOnSuccess(message?: string, notificationDisplayTimeInSeconds?: number) {
    this.setNotification(message ?? ITEM_CREATED_NOTIFICATION, NotificationType.SUCCESS);
    this.hideNotificationAfterDisplaySeconds(notificationDisplayTimeInSeconds ?? NOTIFICATION_DISPLAY_TIME_IN_SECONDS);
  }
}
