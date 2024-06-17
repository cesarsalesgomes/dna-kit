import CatRepository from '@repository/cat.repository';
import { Hono } from 'hono';

import CatService from './cat.service';

const app = new Hono();

app.get('/', async (c) => {
  const cats = await CatRepository.getCatsWithFamily();

  return c.json(cats);
});

app.post('/', async (c) => {
  const { name } = await c.req.json<{ name: string }>();

  const res = await CatService.createCat(name);

  return c.json(res);
});

export default app;
