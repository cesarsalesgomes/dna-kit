<script lang="ts">
  import { getForbiddenAccessModalState } from '$contexts/forbidden-access-modal/forbidden-access-modal.context';
  import { getNotificationState } from '$contexts/notification/notification.context';
  import type GraphQLError from '$interfaces/graphql-error.interface';

  import { directusServerLoadErrorHandler } from '../utils/error-handler.utils';

  const { error }: { error: GraphQLError } = $props();

  directusServerLoadErrorHandler(error, getForbiddenAccessModalState(), getNotificationState());

</script>
