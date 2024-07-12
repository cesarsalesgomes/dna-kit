import { UNEXPECTED_ERROR_NOTIFICATION } from '$constants/notification.constants';
import { LOGIN_ROUTE } from '$constants/route.constants';
import { NOTIFICATION_DISPLAY_TIME_IN_SECONDS } from '$constants/system.constants';
import type ForbiddenAccessModalState from '$contexts/forbidden-access-modal/forbidden-access-modal-state.svelte';
import { NotificationType } from '$features/notification/enums';
import type { NotificationState } from '$features/notification/states/notification-state.svelte';
import type DirectusError from '$interfaces/directus-error.interface';
import type GraphQLError from '$interfaces/graphql-error.interface';
import { checkIfIsArrayWithItens } from '$utils/array.utils';

import { checkIfItsAForbiddenError, checkIfItsAnInvalidTokenError, getGraphQlErrorCode } from './error-code.utils';

import { goto } from '$app/navigation';

export function directusLoginErrorHandler(directusError: DirectusError, notificationState: NotificationState) {
  try {
    const [error] = directusError.errors;

    notificationState.setNotification(error.message ?? UNEXPECTED_ERROR_NOTIFICATION, NotificationType.ERROR);
  } catch (err) {
    notificationState.setNotification(UNEXPECTED_ERROR_NOTIFICATION, NotificationType.ERROR);
  } finally {
    notificationState.hideNotificationAfterDisplaySeconds(NOTIFICATION_DISPLAY_TIME_IN_SECONDS);
  }
}

/**
 * Directus Sveltekit Client Error Handler
 */
export function directusRequestErrorHandler(
  directusError: DirectusError,
  notificationState: NotificationState,
  notificationDisplayTimeInSeconds?: number,
) {
  try {
    const [error] = directusError.errors;

    const code = getGraphQlErrorCode(error);

    if (checkIfItsAnInvalidTokenError(code)) {
      goto(LOGIN_ROUTE);
    } else if (checkIfItsAForbiddenError(code)) {
      notificationState.setNotification(error.message ?? UNEXPECTED_ERROR_NOTIFICATION, NotificationType.ALERT);
    } else {
      notificationState.setNotification(error.message ?? UNEXPECTED_ERROR_NOTIFICATION, NotificationType.ERROR);
    }
  } catch (err) {
    notificationState.setNotification(UNEXPECTED_ERROR_NOTIFICATION, NotificationType.ERROR);
  } finally {
    notificationState.hideNotificationAfterDisplaySeconds(notificationDisplayTimeInSeconds ?? NOTIFICATION_DISPLAY_TIME_IN_SECONDS);
  }
}

/**
 * Directus Sveltekit Server Error Handler
 */
export function checkIsDirectusError(e: any): boolean {
  if (!e) return false;

  return checkIfIsArrayWithItens(e.errors);
}

export function getDirectusError({ errors }: DirectusError): GraphQLError {
  return errors[0];
}

export function directusServerLoadErrorHandler(
  error: GraphQLError,
  forbiddenAccessModalState: ForbiddenAccessModalState,
  notificationState: NotificationState,
  notificationDisplayTimeInSeconds?: number,
) {
  try {
    const code = getGraphQlErrorCode(error);

    if (checkIfItsAnInvalidTokenError(code)) {
      goto(LOGIN_ROUTE);
    } else if (checkIfItsAForbiddenError(code)) {
      forbiddenAccessModalState.setShow(true);
    } else {
      notificationState.setNotification(error.message ?? UNEXPECTED_ERROR_NOTIFICATION, NotificationType.ERROR);
    }
  } catch (err) {
    notificationState.setNotification(UNEXPECTED_ERROR_NOTIFICATION, NotificationType.ERROR);
  } finally {
    notificationState.hideNotificationAfterDisplaySeconds(notificationDisplayTimeInSeconds ?? NOTIFICATION_DISPLAY_TIME_IN_SECONDS);
  }
}
