<script lang="ts">
  const { tailwindClasses = '' } = $props();
</script>

<div class={`spinner ${tailwindClasses}`}></div>

<style>
  .spinner {
    border-radius: 50%;
    background: conic-gradient(#0000 10%, #766df4);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 4px), #000 0);
    mask: radial-gradient(farthest-side, #0000 calc(100% - 4px), #000 0);
    animation: s3 1s infinite linear;
  }

  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
</style>
