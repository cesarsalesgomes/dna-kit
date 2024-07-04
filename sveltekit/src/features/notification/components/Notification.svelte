<script lang="ts">
  import { onMount } from 'svelte';

  import { MiniXMarkSvg } from '$components/svgs';
  import { Button } from '$lib/shadcn/components/ui';

  import { notificationStore } from '../stores';
  import type { NotificationStoreType } from '../types/notification-store.type';
  import { hideNotification } from '../utils/notification.utils';

  import NotificationIcon from './NotificationIcon.svelte';
  import NotificationMessage from './NotificationMessage.svelte';

  let notification = $state<NotificationStoreType>(null);

  onMount(() => {
    notificationStore.subscribe((store) => { notification = store; });
  });
</script>

{#if notification}
  <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 z-10 sm:items-start sm:p-6">
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <div class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <NotificationIcon type={notification.type}/>
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <NotificationMessage type={notification.type}/>
              <p class="mt-1 text-sm text-gray-500">{notification.message}</p>
            </div>
            <div class="ml-4 flex flex-shrink-0">
              <Button on:click={hideNotification} variant="ghost" class="p-1 h-6 hover:bg-white text-gray-400 hover:text-gray-500">
                <MiniXMarkSvg className="h-5 w-5"/>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
