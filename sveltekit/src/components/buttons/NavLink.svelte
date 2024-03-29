<script lang="ts">
  import { Button } from '$lib/shadcn/components/ui';

  import { page } from '$app/stores';

  export let route: string;
  export let routeDescription: string;

  $: onRoute = $page.url.pathname === route;

</script>

{#if onRoute}
  <Button href={route} size="sm" >{routeDescription}</Button>
{:else}
  <Button href={route}
    variant="ghost"
    size="sm"
    class="text-gray-300 hover:bg-gray-700 hover:text-white" >{routeDescription}</Button>
{/if}
