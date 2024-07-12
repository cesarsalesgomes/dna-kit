/* eslint-disable max-classes-per-file */
import {
  authentication, rest, type DirectusClient, createDirectus, staticToken, type RestClient, type RestCommand, type AuthenticationData,
} from '@directus/sdk';

import { DNA_BACKEND_URL } from '$constants/system.constants';
import type FetchesBeingPerformedState from '$contexts/fetches-being-performed/fetches-being-performed-state.svelte';
import { getAccessToken } from '$features/auth/utils';
import { directusLoginErrorHandler, directusRequestErrorHandler } from '$features/error-handler/utils/error-handler.utils';
import type { NotificationState } from '$features/notification/states/notification-state.svelte';
import type DirectusError from '$interfaces/directus-error.interface';
import type DirectusClients from '$types/directus-clients.type';
import type { DirectusSchema } from '$types/directus-schema.type';

class DirectusSdk {
  static instance: DirectusClient<DirectusSchema> & RestClient<DirectusSchema>;

  static notificationState: NotificationState;

  static fetchesBeingPerformedState: FetchesBeingPerformedState;

  static getInstance() {
    if (!DirectusSdk.instance) {
      DirectusSdk.instance = createDirectus<DirectusSchema>(DNA_BACKEND_URL).with(rest());
    }

    return DirectusSdk.instance;
  }

  static setNotificationState(notificationState: NotificationState) {
    this.notificationState = notificationState;
  }

  static setFetchesBeingPerformedState(fetchesBeingPerformedState: FetchesBeingPerformedState) {
    this.fetchesBeingPerformedState = fetchesBeingPerformedState;
  }
}

/**
 * Directus Sveltekit Client methods
 */
export class DirectusClientSdk extends DirectusSdk {
  static async login(email: string, password: string, onSucess?: (data: AuthenticationData) => void) {
    try {
      this.fetchesBeingPerformedState.incrementFetchesBeingPerformed();

      const directusClient = this.getInstance().with(authentication('cookie'));

      const res = await directusClient.login(email, password, {});

      if (onSucess) onSucess(res);

      return res;
    } catch (error) {
      directusLoginErrorHandler(error as DirectusError, this.notificationState);

      return null;
    } finally {
      this.fetchesBeingPerformedState.decrementFetchesBeingPerformed();
    }
  }

  static getAuthenticatedClient(): DirectusClients {
    return this.getInstance().with(staticToken(getAccessToken()));
  }

  static async request<T extends object>(command: RestCommand<T, DirectusSchema>, onSucess?: () => void) {
    try {
      this.fetchesBeingPerformedState.incrementFetchesBeingPerformed();

      const res = await this.getAuthenticatedClient().request<T>(command);

      if (onSucess) onSucess();

      return res;
    } catch (error) {
      directusRequestErrorHandler(error as DirectusError, this.notificationState);

      return undefined;
    } finally {
      this.fetchesBeingPerformedState.decrementFetchesBeingPerformed();
    }
  }
}
