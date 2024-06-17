import KyselyRepository from '@lib/kysely/kysely.repository';

async function boostrapKysely() {
  KyselyRepository.getInstance();

  try {
    await KyselyRepository.testConnection();
  } catch (err) {
    console.log('\nError when initializing Kysely:\n');
    console.error(err);
    process.exit();
  }

  console.log('Kysely successfully initialized\n');
}

export default boostrapKysely;
