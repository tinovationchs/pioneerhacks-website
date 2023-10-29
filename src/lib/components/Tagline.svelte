<script lang="ts">
  import Typewriter from 'svelte-typewriter';

  const taglines = [
    "are the pioneers of the future.",
    "are the future's engineers.",
    "are the gathering of young talents.",
    "build things in our free time.",
    "love donuts!"
  ];
</script>

<div class="pl-4 text-5xl h-[3em] w-full" style="z-index: 12">
  <p class="font-semibold text-neutral">
    We... <Typewriter loop wordInterval="10000">
      {#each taglines as tagline}
      <p>{tagline}</p>
      {/each}
    </Typewriter>
  </p>
</div>
