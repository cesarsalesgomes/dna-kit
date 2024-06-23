import { createHonoHttpException, createInternalServerError } from '@errors/error.factory';
import { CREATE_CAT_ERROR_MESSAGE } from '@errors/messages/cat.error-messages';
import CatRepository from '@repository/cat.repository';
import type { Cat } from '@types/directus-schema.type';

export default class CatService {
  static createCat(cat: Cat) {
    return CatRepository.createCat(cat);
  }

  static checkCat(cat: Cat) {
    if (cat.name?.includes('Dog')) {
      throw createHonoHttpException(500, createInternalServerError(CREATE_CAT_ERROR_MESSAGE));
    }
  }
}
