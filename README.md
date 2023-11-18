</br>

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://dna-pictures.s3.amazonaws.com/dna-high-resolution-logo-color-on-transparent-background.png">
    <img src="https://dna-pictures.s3.amazonaws.com/dna-high-resolution-logo-color-on-transparent-light-background.png" width="210" alt="Logo"/>
  </picture>
  </a>
</div>

<br />

<div align="center">
    <a href="https://codecov.io/gh/cesarsalesgomes/dna"><img src="https://codecov.io/gh/cesarsalesgomes/dna/branch/main/graph/badge.svg?token=YH13U4UY6V"></a>
    &nbsp;
    <a href="https://github.com/marketplace/actions/super-linter"><img src="https://github.com/cesarsalesgomes/dna/workflows/Lint%20Code%20Base/badge.svg"></a>
</div>

<br />

Start an initial typesafe enviroment with **[Sveltekit](https://kit.svelte.dev/)**, **[Directus](https://docs.directus.io)** and **[Kysely](https://kysely.dev/)**, with the main necessary settings that a SSR webapp commonly requires.

<br />

## **Development** ⚡️

### Local development environment

1. Fork this repository (**[Github sync fork guide](https://docs.github.com/get-started/quickstart/fork-a-repo#configuring-git-to-sync-your-fork-with-the-original-repository)** to sync the fork with updates).

2. Rename the file `example.env` to `.env` (Contains the required initial environment variables).

3. Run **npm start** under the root folder. It will install the `Docker` images needed for development and start the `Directus` enviroments with `docker-compose`.

   1. **Optional:** To run the example route of the integration between `Directus` under the `cats` feature controller, start the application with **npm run start:migration-import** (It will import the necessary schema migration of the `cats` feature).

<br />
