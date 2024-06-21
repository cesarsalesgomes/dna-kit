import CatRepository from '@repository/cat.repository';
import type { Cat } from '@types/directus-schema.type';

export default class CatService {
  static createCat(cat: Cat) {
    return CatRepository.createCat(cat);
  }
}
