<script lang="ts">
  import { Button as ButtonPrimitive } from 'bits-ui';

  import { cn } from '$lib/shadcn/utils.js';

  import { buttonVariants, type Props, type Events } from './index.ts';

  type $$Props = Props;
  type $$Events = Events;

  let className: $$Props['class'];
  export let variant: $$Props['variant'] = 'default';
  export let size: $$Props['size'] = 'default';
  export let builders: $$Props['builders'] = [];
  export { className as class };
</script>

<ButtonPrimitive.Root
  {builders}
  class={cn(buttonVariants({ variant, size, className }))}
  type="button"
  {...$$restProps}
  on:click
  on:keydown
>
  <slot />
</ButtonPrimitive.Root>
