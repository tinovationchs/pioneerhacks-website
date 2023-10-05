<script lang="ts">
  import FaqSection from "$lib/components/FaqSection.svelte";
  import Header from "$lib/components/Header.svelte";
  import Section from "$lib/components/Section.svelte";
</script>

<Header />

<main class="flex flex-col gap-12 md:gap-16">
  
  <div class="text-4xl font-semibold text-gray-400">
    FILLER: Our global developer conference is back. Join us as we build the future together.
  </div>

  <Section id="schedule" name="schedule">
    <p>wake up</p>
  </Section>

  <Section id="faq" name="faq">
    <FaqSection />
  </Section>

  <Section id="sponsors" name="sponsors">
    <p>juniper echo3D</p>
  </Section>

</main>
