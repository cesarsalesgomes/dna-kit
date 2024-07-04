<script lang="ts">
  import type GraphQLError from '$interfaces/graphql-error.interface';

  import { directusServerLoadErrorHandler } from '../utils/error-handler.utils';

  const { error }: { error: GraphQLError } = $props();

  directusServerLoadErrorHandler(error);

</script>
