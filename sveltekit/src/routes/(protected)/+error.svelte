<script lang="ts">
  import { UnexpectedError } from '$components/errors';
  import { getPageState } from '$contexts/page/page.context';

  const page = getPageState();

</script>

<UnexpectedError error={page.error}/>
