import { boostrapDirectus, boostrapKysely, bootstrapHono } from '@system/bootstrap';

boostrapDirectus();

await boostrapKysely();

export default bootstrapHono();
