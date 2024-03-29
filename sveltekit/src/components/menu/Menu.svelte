<script lang="ts">

  import { NavLink, NavLinkMobile } from '$components/buttons';
  import { BellSvg, XMarkSvg, MenuSvg } from '$components/svgs';
  import { BIRDS_ROUTE, CATS_ROUTE } from '$constants/route.constants';
  import { logout } from '$features/auth/utils';
  import { Button } from '$lib/shadcn/components/ui';
  import type { DirectusUsers } from '$types/directus-schema.type';

  import Avatar from './Avatar.svelte';

  export let me$: Partial<DirectusUsers> | Promise<Partial<DirectusUsers>>;

  export let accessTokenFromServer: string;

  let showMenu: boolean;
  let showUserMenu: boolean;

</script>

<nav class="bg-gray-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <Button class="p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          on:click={() => { showMenu = !showMenu; }}>
          {#if !showMenu}
            <MenuSvg className="block h-6 w-6"/>
          {:else}
            <XMarkSvg className="block h-6 w-6"/>
          {/if}
        </Button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
          <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <NavLink route={CATS_ROUTE} routeDescription='Cats'></NavLink>
            <NavLink route={BIRDS_ROUTE} routeDescription='Birds'></NavLink>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button"
          class="
            rounded-full bg-gray-800 p-1 text-gray-400
            hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800
          ">
          <span class="sr-only">View notifications</span>
          <BellSvg className="h-6 w-6"/>
        </button>

        <!-- Profile dropdown -->
        <div class="relative ml-3">
          <button type="button"
            class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
            on:click={() => { showUserMenu = !showUserMenu; }}>
            <span class="sr-only">Open user menu</span>
            <Avatar me$={me$} accessTokenFromServer={accessTokenFromServer}/>
          </button>

          {#if showUserMenu}
            <div class="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1">
              <!-- Active: "bg-gray-100", Not Active: "" -->
              <a href="/"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0">Your Profile</a>
              <span
                class="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-2"
                on:click={logout}
                on:keypress={logout}
              >Sign out</span>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  {#if showMenu}
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <NavLinkMobile route={CATS_ROUTE} routeDescription='Cats'></NavLinkMobile>
        <NavLinkMobile route={BIRDS_ROUTE} routeDescription='Birds'></NavLinkMobile>
      </div>
    </div>
  {/if}
</nav>
