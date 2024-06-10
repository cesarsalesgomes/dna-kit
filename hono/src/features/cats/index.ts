import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.json([]))

export default app;