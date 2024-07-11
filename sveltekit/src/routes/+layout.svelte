<script>
  import { setGlobalContexts } from '$contexts/context.utils';
  import { Notification } from '$features/notification/components';

  import './styles.css';

  const { children } = $props();

  setGlobalContexts();

</script>

<Notification/>

<main class="min-h-screen bg-gray-50 dark:bg-gray-900">
  {@render children()}
</main>
