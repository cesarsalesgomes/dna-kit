<script lang="ts">
  import { getNotificationState } from '$contexts/notification/notification.context';
  import type GraphQLError from '$interfaces/graphql-error.interface';

  import { directusServerLoadErrorHandler } from '../utils/error-handler.utils';

  const { error }: { error: GraphQLError } = $props();

  directusServerLoadErrorHandler(error, getNotificationState());

</script>
