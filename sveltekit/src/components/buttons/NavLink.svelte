<script lang="ts">
  import { onMount } from 'svelte';

  import { Button } from '$lib/shadcn/components/ui';

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
  <Button href={route} size="sm" >{routeDescription}</Button>
{:else}
  <Button href={route}
    variant="ghost"
    size="sm"
    class="text-gray-300 hover:bg-gray-700 hover:text-white" >{routeDescription}</Button>
{/if}
