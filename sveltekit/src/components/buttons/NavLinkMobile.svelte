<script lang="ts">
  import { getPageState } from '$contexts/page/page.context';

  const { route, routeDescription }: {
    route: string,
    routeDescription: string,
  } = $props();

  const page = getPageState();

</script>

{#if route === page.currentRoute}
  <a href={route} class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">{routeDescription}</a>
{:else}
  <a href={route} class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{routeDescription}</a>
{/if}
