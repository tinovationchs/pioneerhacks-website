<script lang="ts">
  export let q: string;
  export let a: string;

  let isOpen = false;
</script>

<button
  class="rounded-lg border px-2 py-1 text-left block w-full"
  on:click={() => {
    isOpen = !isOpen;
  }}>

  <div class="">
    {q}
  </div>

  {#if isOpen}
    <div class="pt-2">
      {a}
    </div>
  {/if}
</button>
