import CatRepository from '@repository/cat.repository';

export default class CatService {
  static createCat(name: string) {
    return CatRepository.createCat(name as string);
  }
}
