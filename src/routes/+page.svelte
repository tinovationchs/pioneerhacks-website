<script lang="ts">
  import FaqSection from "$lib/components/FaqSection.svelte";
</script>

<header class="mb-10">
  <h1
    class="font-condensed whitespace-nowrap font-header text-5xl font-bold sm:text-7xl md:text-8xl">
    PioneerHacks <span class="font-extrabold text-blue-300">V</span>
  </h1>

  <h2
    class="font-condensed mb-4 ml-8 bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-4xl text-transparent md:text-5xl">
    Pioneer the future!
  </h2>

  <div class="rounded-lg border border-gray-500 p-40">filler for graphic?</div>

  <div class="my-10 flex flex-row justify-between font-mono">
    <span>FEBRUARY 17—18</span>
    <span>ASPIRATION DOME, SUNNYVALE</span>
  </div>
</header>

<main class="flex flex-col gap-12">
  <div id="schedule">
    <h2 class="text font-header text-4xl font-medium">schedule</h2>

    <p>wake up</p>
  </div>

  <div id="sponsors">
    <h2 class="text font-header text-4xl font-medium">sponsors</h2>

    <p>juniper echo3D</p>
  </div>

  <div id="faq">
    <h2 class="text font-header text-4xl font-medium">faq</h2>
    <FaqSection />
  </div>
</main>
