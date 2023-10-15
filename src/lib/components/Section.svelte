<script lang="ts">
  export let id: string;
  export let name: string;
</script>

<div {id}>
  <h2 class="text pb-4 font-header text-5xl font-semibold">{name}</h2>

  <slot />
</div>
