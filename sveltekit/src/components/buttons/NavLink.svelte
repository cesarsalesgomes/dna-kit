<script lang="ts">
  import { Button } from '$lib/shadcn/components/ui';

  const { route, routeDescription, currentRoute }: {
    route: string,
    routeDescription: string,
    currentRoute: string
  } = $props();

</script>

{#if route === currentRoute}
  <Button href={route} size="sm" >{routeDescription}</Button>
{:else}
  <Button href={route}
    variant="ghost"
    size="sm"
    class="text-gray-300 hover:bg-gray-700 hover:text-white" >{routeDescription}</Button>
{/if}
