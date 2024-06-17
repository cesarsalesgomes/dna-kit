const { PROD, DNA_API_URL } = Bun.env;

export const DNA_BACKEND_URL = PROD ? DNA_API_URL as string : 'http://localhost:8055';
