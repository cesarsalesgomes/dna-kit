<script lang="ts">

  import { LoadingButton } from '$components/loading';
  import { getFetchesBeingPerformedState } from '$contexts/fetches-being-performed/fetches-being-performed.context';
  import { Button } from '$lib/shadcn/components/ui';

  const { label = '' } = $props();

  const fetchesBeingPerformed = getFetchesBeingPerformedState();

</script>

{#if fetchesBeingPerformed.count > 0}
  <LoadingButton />
{:else}
  <Button class="w-full" type="submit">{label}</Button>
{/if}
