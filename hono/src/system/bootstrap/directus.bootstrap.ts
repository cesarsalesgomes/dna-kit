import { DirectusSdk } from '@lib/directus';

function boostrapDirectus() {
  DirectusSdk.getInstance();

  try {
    DirectusSdk.getAuthenticatedClient();
  } catch (err) {
    console.log('\nError when initializing Directus:\n');
    console.error(err);
    process.exit();
  }

  console.log('Directus successfully initialized\n');
}

export default boostrapDirectus;
