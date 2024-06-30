import { createItem } from '@directus/sdk';
import type { ExpressionBuilder } from 'kysely';
import { jsonObjectFrom } from 'kysely/helpers/postgres';

import { DirectusSdk } from '@lib/directus';
import { KyselyRepository } from '@lib/kysely';

import type { Cat, KyselySchema } from '$types/directus-schema.type';

export default class CatRepository {
  static async getCatsWithFamily() {
    return KyselyRepository.getInstance().selectFrom('cat').select('name').select(
      (eb) => [
        this.withFamily(eb),
      ],
    )
      .execute();
  }

  private static withFamily(eb: ExpressionBuilder<KyselySchema, 'cat'>) {
    return jsonObjectFrom(
      eb.selectFrom('family')
        .select('name')
        .whereRef('family.id', '=', 'cat.family'),
    ).as('family');
  }

  static createCat(cat: Cat) {
    return DirectusSdk.request(createItem('cat', cat));
  }
}
