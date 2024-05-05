import UserRepository from '$repository/user.repository';

export const prerender = 'auto';

export const load = async ({ locals }) => {
  const me$ = UserRepository.getMe(locals.directusPayload);

  return {
    me$,
    accessToken: locals.accessToken,
  };
};
