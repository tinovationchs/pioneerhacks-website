<script lang="ts">
  import FaqSection from "$lib/components/FaqSection.svelte";
  import Header from "$lib/components/Header.svelte";
</script>

<Header />

<div class="mb-16 text-4xl font-semibold text-gray-400">
  FILLER: Our global developer conference is back. Join us as we build the future together.
</div>

<main class="flex flex-col gap-12">
  <div id="schedule">
    <h2 class="text font-header text-4xl font-medium">schedule</h2>

    <p>wake up</p>
  </div>

  <div id="faq">
    <h2 class="text font-header text-4xl font-medium">faq</h2>
    <FaqSection />
  </div>

  <div id="sponsors">
    <h2 class="text font-header text-4xl font-medium">sponsors</h2>

    <p>juniper echo3D</p>
  </div>
</main>
