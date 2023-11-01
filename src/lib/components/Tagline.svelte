<script lang="ts">
  import Typewriter from 'svelte-typewriter';

  const taglines = [
    "pioneer the future!",
    "are passionate about coding",
    "are problem-solvers",
    "make things happen",
    "love donuts!"
  ];
</script>

<div class="pl-4 text-5xl h-[2em] w-full" style="z-index: 5">
  <p class="font-semibold text-neutral">
    We... <Typewriter loop wordInterval="10000">
      {#each taglines as tagline}
      <p>{tagline}</p>
      {/each}
    </Typewriter>
  </p>
</div>
