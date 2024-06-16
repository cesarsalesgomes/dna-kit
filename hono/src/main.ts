import cats from '@features/cats';
import { Hono } from 'hono';
import { bearerAuth } from 'hono/bearer-auth';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';

const app = new Hono();

/* Cors */
app.use('/*', cors());

/* Logger */
app.use(logger());

/* Bearer Auth Middleware */
const { HONO_STATIC_TOKEN } = Bun.env;

app.use('/*', bearerAuth({ token: HONO_STATIC_TOKEN! }));

/* Routes */
app.route('/cats', cats);

export default app;