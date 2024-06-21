import { Hono } from 'hono';

import CatRepository from '@repository/cat.repository';
import type { Cat } from '@types/directus-schema.type';

import CatService from './cat.service';

const app = new Hono();

app.get('/', async (c) => {
  const cats = await CatRepository.getCatsWithFamily();

  return c.json(cats);
});

app.post('/', async (c) => {
  const cat = await c.req.json<Cat>();

  const res = await CatService.createCat(cat);

  return c.json(res);
});

export default app;
