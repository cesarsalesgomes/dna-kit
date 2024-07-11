<script lang="ts">
  import { NotificationType } from '../enums';

  const { type } : { type: NotificationType } = $props();

  let labelText = $state('');
  let labelColor = $state('');

  switch (type) {
    case NotificationType.SUCCESS:
      labelText = 'Success';
      labelColor = 'text-green-400';
      break;
    case NotificationType.ERROR:
      labelText = 'Error';
      labelColor = 'text-red-400';
      break;
    case NotificationType.ALERT:
      labelText = 'Alert';
      labelColor = 'text-yellow-400';
      break;
    default:
      labelText = '';
      labelColor = '';
  }
</script>

<p class={`text-sm font-medium ${labelColor}`}>{labelText}</p>
