<script>
  import { setGlobalContexts } from '$contexts/contexts.utils';
  import { Notification } from '$features/notification/components';

  import './styles.css';

  const { children } = $props();

  setGlobalContexts();

</script>

<main class="min-h-screen bg-gray-50 dark:bg-gray-900">
  <Notification/>
  {@render children()}
</main>
