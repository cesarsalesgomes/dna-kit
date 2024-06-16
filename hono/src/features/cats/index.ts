import CatRepository from '@repository/cat.repository';
import { Hono } from 'hono';

const app = new Hono();

app.get('/', async (c) => {
  const cats = await CatRepository.getCatsWithFamily();

  return c.json(cats);
});

export default app;
