<script lang="ts">
  export let id: string;
  export let name: string;
</script>

<div {id} class="mx-8">
  <h2 class="text-primary mb-4 ml-8 font-header text-3xl md: text-5xl font-semibold tracking-wider">{name}</h2>

  <slot />
</div>
