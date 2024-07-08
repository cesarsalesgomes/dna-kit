<script lang="ts">
  const { route, routeDescription, currentRoute }: {
    route: string,
    routeDescription: string,
    currentRoute: string
  } = $props();
</script>

{#if route === currentRoute}
  <a href={route} class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">{routeDescription}</a>
{:else}
  <a href={route} class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{routeDescription}</a>
{/if}
