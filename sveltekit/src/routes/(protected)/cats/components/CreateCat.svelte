<script lang="ts">
  import { createItem } from '@directus/sdk';
  import type { SubmitFunction } from '@sveltejs/kit';

  import { getFetchesBeingPerformedState } from '$contexts/fetches-being-performed/fetches-being-performed.context';
  import { getNotificationState } from '$contexts/notification/notification.context';
  import InvalidateKeys from '$enums/invalidate-keys.enum';
  import { DirectusClientSdk } from '$lib/directus';
  import { Button, Input } from '$lib/shadcn/components/ui';
  import { invalidateWithLoading } from '$utils/svelte.utils';

  import { enhance } from '$app/forms';

  let name = $state('');

  const noticationState = getNotificationState();
  const fetchesBeingPerformedState = getFetchesBeingPerformedState();

  const onSubmitCatForm: SubmitFunction = async ({ cancel }) => {
    cancel();

    await DirectusClientSdk.request(createItem('cat', { name }), async () => {
      await invalidateWithLoading(InvalidateKeys.Cats, fetchesBeingPerformedState);

      noticationState.setNotificationOnSuccess();
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
          <Input
            id="name"
            type="text"
            autocomplete="given-name"
            required
            class="mt-2 text-gray-700"
            bind:value={name}/>
        </div>
        <Button type="submit">
          Create
        </Button>
      </div>
    </div>
  </div>
</form>
