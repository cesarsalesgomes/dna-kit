import {
  rest, type DirectusClient, createDirectus, staticToken, type RestClient, type RestCommand,
} from '@directus/sdk';

import { DNA_BACKEND_URL } from '@constants/system.constants';
import { createHonoHttpException } from '@errors/error.factory';
import type { DirectusError } from '@interfaces/directus-error.interface';
import type { DirectusClients } from '@types/directus-clients.type';
import type { DirectusSchema } from '@types/directus-schema.type';

export default class DirectusSdk {
  static instance: DirectusClient<DirectusSchema> & RestClient<DirectusSchema>;

  static getInstance() {
    if (!DirectusSdk.instance) {
      DirectusSdk.instance = createDirectus<DirectusSchema>(DNA_BACKEND_URL).with(rest());
    }

    return DirectusSdk.instance;
  }

  static getAuthenticatedClient(): DirectusClients {
    const { HONO_STATIC_TOKEN } = Bun.env;

    return this.getInstance().with(staticToken(HONO_STATIC_TOKEN as string));
  }

  static async request<T extends object>(command: RestCommand<T, DirectusSchema>) {
    try {
      return await this.getAuthenticatedClient().request<T>(command);
    } catch (error) {
      throw createHonoHttpException(500, error as DirectusError);
    }
  }
}
