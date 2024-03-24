<script lang="ts">
  import Button from '$lib/shadcn/components/ui/button/button.svelte';

  import LoadingSpinner from './spinner/LoadingSpinner.svelte';
</script>

<Button class="w-full" disabled>
  <LoadingSpinner tailwindClasses='h-6 w-6' />
</Button>
