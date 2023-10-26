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

<div class="min-h-[3rem]">
  <p class="text-5xl font-semibold text-stone-400">
    We...<Typewriter loop wordInterval="10000">
      {#each taglines as tagline}
        <p>{tagline}</p>
      {/each}
    </Typewriter>
  </p>
</div>
