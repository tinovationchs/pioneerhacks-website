<script lang="ts">
  import { fade, slide } from "svelte/transition";

  export let q: string;
  export let a: string;

  let isOpen = false;
</script>

<button
  class="block w-full border-b-[1px] border-dashed border-gray-500 px-2 py-1 text-left"
  on:click={() => {
    isOpen = !isOpen;
  }}>
  <div class="flex flex-row justify-between">
    <span>{q}</span>

    {#if !isOpen}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6"
        in:fade>
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6"
        in:fade>
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    {/if}
  </div>

  {#if isOpen}
    <div class="py-2 text-gray-400" transition:slide={{ duration: 250 }}>
      {a}
    </div>
  {/if}
</button>
