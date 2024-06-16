import bootstrapHono from '@system/bootstrap/hono.bootstrap';
import boostrapKysely from '@system/bootstrap/kysely.bootstrap';

await boostrapKysely();

export default bootstrapHono();
