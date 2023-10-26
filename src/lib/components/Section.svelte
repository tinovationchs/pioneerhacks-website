<script lang="ts">
  export let id: string;
  export let name: string;
</script>

<div {id}>
  <h2 class="text-info-content mb-4 ml-24 font-header text-5xl font-semibold tracking-wider">{name}</h2>

  <slot />
</div>
