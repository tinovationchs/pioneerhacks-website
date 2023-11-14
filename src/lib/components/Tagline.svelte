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

<div class="z-40 mx-8 text-3xl md:text-5xl h-[2em] w-screen">
  <p class="ml-8 font-semibold text-neutral">
    We... <Typewriter loop wordInterval="10000">
      {#each taglines as tagline}
      <p>{tagline}</p>
      {/each}
    </Typewriter>
  </p>
</div>
