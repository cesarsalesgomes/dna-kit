import { redirect } from '@sveltejs/kit';

import { SESSION_TOKEN_COOKIE_NAME, SESSION_TOKEN_COOKIE_OPTIONS, ACCESS_TOKEN_COOKIE_NAME } from '$constants/auth.constants';
import { HOME_ROUTE, LOGIN_ROUTE } from '$constants/route.constants';

export const load = ({ cookies }) => {
  const sessionToken = cookies.get(SESSION_TOKEN_COOKIE_NAME);

  if (!sessionToken) redirect(303, LOGIN_ROUTE);

  cookies.set(ACCESS_TOKEN_COOKIE_NAME, sessionToken ?? '', SESSION_TOKEN_COOKIE_OPTIONS);

  redirect(303, HOME_ROUTE);
};
