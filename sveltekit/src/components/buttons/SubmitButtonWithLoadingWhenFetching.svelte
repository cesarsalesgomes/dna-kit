<script lang="ts">

  import { onDestroy } from 'svelte';

  import { LoadingButton } from '$components/loading';
  import { Button } from '$lib/shadcn/components/ui';
  import { fetchesBeingPerformedStore } from '$stores/fetches-being-performed.store';

  const { label = '' } = $props();

  let fetchesBeingPerformed = $state(0);

  const unsubscribe = fetchesBeingPerformedStore.subscribe((n) => { fetchesBeingPerformed = n; });

  onDestroy(unsubscribe);

</script>

{#if fetchesBeingPerformed > 0}
  <LoadingButton />
{:else}
  <Button class="w-full" type="submit">{label}</Button>
{/if}
