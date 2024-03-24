<script lang="ts">

  import { onDestroy } from 'svelte';

  import { LoadingButton } from '$components/loading';
  import { Button } from '$lib/shadcn/components/ui';
  import { fetchesBeingPerformedStore } from '$stores/fetches-being-performed.store';

  export let label: string;

  let fetchesBeingPerformed: number;

  const unsubscribe = fetchesBeingPerformedStore.subscribe((n) => { fetchesBeingPerformed = n; });

  onDestroy(unsubscribe);

</script>

{#if fetchesBeingPerformed > 0}
  <LoadingButton />
{:else}
  <Button class="w-full" type="submit">{label}</Button>
{/if}
