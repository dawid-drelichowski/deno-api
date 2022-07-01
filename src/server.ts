import { Application, Router } from './libraries.ts';
import { connect } from './db.ts';
import { config } from './config.ts'

const router = new Router();
const port =  Number((await config()).PORT)

router.get('/', async (context) => {
  const db = await connect();
  const result = await db.query('SELECT * FROM `exchangerate`');
  context.response.type = 'text/json';
  context.response.body = result;
  await db.close();
});

router.get('/typeId/:id', async (context) => {
  const db = await connect();
  const result = await db.query(
    'SELECT * FROM `exchangerate` WHERE `typeId` = ?',
    [Number(context.params.id)],
  );
  context.response.type = 'text/json';
  context.response.body = result;
  await db.close();
});

const api = new Application();

api.use(router.routes());
api.use(router.allowedMethods());
api.listen({ port });
