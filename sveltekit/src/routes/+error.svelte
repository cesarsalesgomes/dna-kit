<script lang="ts">
  import { PageNotFoundError, UnexpectedError } from '$components/errors';
  import { NOT_FOUND_SERVER_ERROR_MESSAGE } from '$constants/error.constants';
  import { getPageState } from '$contexts/page/page.context';

  const page = getPageState();

</script>

{#if page.error?.message === NOT_FOUND_SERVER_ERROR_MESSAGE}
  <PageNotFoundError/>
{:else}
  <UnexpectedError error={page.error}/>
{/if}
