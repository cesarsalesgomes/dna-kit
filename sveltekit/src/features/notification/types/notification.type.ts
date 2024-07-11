import type { NotificationType } from '../enums';

export type Notification = {
  type: NotificationType,
  message: string,
} | null;
