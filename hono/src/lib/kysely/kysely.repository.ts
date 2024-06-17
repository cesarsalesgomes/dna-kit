import { createForbiddenError, createHonoHttpException } from '@errors/error.factory';
import { Kysely, PostgresDialect, sql } from 'kysely';
import { Pool } from 'pg';

import type { KyselySchema } from '@types/directus-schema.type';

export default class KyselyRepository {
  static instance: Kysely<KyselySchema>;

  static getInstance() {
    if (!KyselyRepository.instance) {
      const {
        KYSELY_DATABASE, KYSELY_HOST, KYSELY_USER, KYSELY_PASSWORD, KYSELY_PORT, PROD,
      } = Bun.env;

      const dialect = new PostgresDialect({
        pool: new Pool({
          database: KYSELY_DATABASE,
          host: KYSELY_HOST,
          user: KYSELY_USER,
          password: KYSELY_PASSWORD,
          port: Number(KYSELY_PORT),
          max: 10,
          ssl: !!PROD,
        }),
      });

      this.instance = new Kysely<KyselySchema>({
        dialect,
      });
    }

    return KyselyRepository.instance;
  }

  static testConnection() {
    const query = sql<string>`SELECT version();`;

    return query.execute(this.getInstance());
  }

  static async checkIfRoleHasPermissionToReadCollections(roleId: string, collections: Array<keyof KyselySchema>, isAdmin: boolean): Promise<void> {
    if (isAdmin) return;

    const permissions = await this.getCollectionsWithReadPermissionOfRole(roleId, collections);

    // eslint-disable-next-line no-restricted-syntax
    for (const collection of collections) {
      const hasPermission = !!permissions.find((permission) => permission.collection === collection);

      if (!hasPermission) throw createHonoHttpException(403, createForbiddenError());
    }
  }

  private static getCollectionsWithReadPermissionOfRole(roleId: string, collections: Array<keyof KyselySchema>) {
    return this.getInstance().selectFrom('directus_permissions').select('collection')
      .where('role', '=', roleId)
      .where('collection', 'in', collections)
      .where('action', '=', 'read')
      .execute();
  }
}
