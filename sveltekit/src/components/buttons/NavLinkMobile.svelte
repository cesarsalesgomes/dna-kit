<script lang="ts">
  import { onMount } from 'svelte';

  import { page } from '$app/stores';

  const { route = '', routeDescription = '' } = $props();

  let onRoute = $state(false);

  function checkOnRoute() {
    return page.subscribe(({ url }) => {
      onRoute = url.pathname === route;
    });
  }

  onMount(() => {
    const unsub = checkOnRoute();

    return () => unsub();
  });

</script>

{#if onRoute}
  <a href={route} class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">{routeDescription}</a>
{:else}
  <a href={route} class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{routeDescription}</a>
{/if}
