<script lang="ts">
  import { getPageState } from '$contexts/page/page.context';
  import { Button } from '$lib/shadcn/components/ui';

  const { route, routeDescription }: {
    route: string,
    routeDescription: string,
  } = $props();

  const page = getPageState();

</script>

{#if route === page.currentRoute}
  <Button href={route} size="sm" >{routeDescription}</Button>
{:else}
  <Button href={route}
    variant="ghost"
    size="sm"
    class="text-gray-300 hover:bg-gray-700 hover:text-white" >{routeDescription}</Button>
{/if}
