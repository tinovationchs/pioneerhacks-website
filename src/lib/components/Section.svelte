<script lang="ts">
  export let id: string;
  export let name: string;
</script>


<div {id}>
  <h2 class="text font-header text-5xl font-semibold pb-4">{name}</h2>

  <slot/>
</div>