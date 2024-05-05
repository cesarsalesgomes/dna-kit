import InvalidateKeys from '$enums/invalidate-keys.enum';
import CatRepository from '$repository/cat.repository';

export const prerender = 'auto';

export const load = async ({ locals, depends }) => {
  depends(InvalidateKeys.Cats);

  const cats$ = CatRepository.getCatsWithFamily(locals.directusPayload);

  return {
    cats$,
  };
};
