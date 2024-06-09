import { dev } from '$app/environment';

export const ACCESS_TOKEN_COOKIE_NAME = 'dna-access-token';

export const SESSION_TOKEN_COOKIE_NAME = 'directus_session_token';

export const SESSION_TOKEN_COOKIE_OPTIONS: import('cookie').CookieSerializeOptions & { path: string } = {
  path: '/',
  httpOnly: false,
  sameSite: 'strict',
  secure: !dev,
  maxAge: 60 * 60 * 24 * 1, // One day
};
