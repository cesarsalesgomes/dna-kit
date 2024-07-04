<script>
  import { Notification } from '$features/notification/components';

  import './styles.css';

  const { children } = $props();

</script>

<main class="min-h-screen bg-gray-50 dark:bg-gray-900">
  <Notification/>
  {@render children()}
</main>
