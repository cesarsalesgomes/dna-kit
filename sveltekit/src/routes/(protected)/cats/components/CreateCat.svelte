<script lang="ts">
  import { createItem } from '@directus/sdk';
  import type { SubmitFunction } from '@sveltejs/kit';

  import InvalidateKeys from '$enums/invalidate-keys.enum';
  import { setNotificationOnSuccess } from '$features/notification/utils/notification.utils';
  import { DirectusClientSdk } from '$lib/directus';
  import Button from '$lib/shadcn/components/ui/button/button.svelte';
  import { invalidateWithLoading } from '$utils/svelte.utils';

  import { enhance } from '$app/forms';

  let name: string;

  const onSubmitCatForm: SubmitFunction = async ({ cancel }) => {
    cancel();

    await DirectusClientSdk.request(createItem('cat', { name }), async () => {
      await invalidateWithLoading(InvalidateKeys.Cats);

      setNotificationOnSuccess();
    });
  };
</script>

<form method="POST" use:enhance={onSubmitCatForm}>
  <div class="overflow-hidden bg-gray-200 shadow sm:rounded-md">
    <div class="px-4 py-5 sm:p-6">
      <div class="flex flex-row justify-between items-end gap-8">
        <div class="flex flex-col">
          <label for="name" class="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            autoComplete="given-name"
            class="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            bind:value={name}
          />
        </div>
        <Button type="submit">
          Create
        </Button>
      </div>
    </div>
  </div>
</form>
