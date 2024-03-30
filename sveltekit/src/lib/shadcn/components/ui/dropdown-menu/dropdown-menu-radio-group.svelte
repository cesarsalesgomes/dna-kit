<script lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

  type $$Props = DropdownMenuPrimitive.RadioGroupProps;

  export let value: $$Props['value'];
</script>

<DropdownMenuPrimitive.RadioGroup {...$$restProps} bind:value>
  <slot />
</DropdownMenuPrimitive.RadioGroup>
