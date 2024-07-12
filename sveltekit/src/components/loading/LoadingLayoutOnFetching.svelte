<script lang="ts">
  import { getFetchesBeingPerformedState } from '$contexts/fetches-being-performed/fetches-being-performed.context';

  import LoadingLayout from './LoadingLayout.svelte';

  import { navigating } from '$app/stores';

  const fetchesBeingPerformedState = getFetchesBeingPerformedState();

</script>

{#if (fetchesBeingPerformedState.count || $navigating)}
  <LoadingLayout />
{/if}
