<script lang="ts">
  import Section from "$lib/components/Section.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Tagline from "$lib/components/Tagline.svelte";
  import Stats from "$lib/components/Stats.svelte";
  import Schedule from "$lib/components/Schedule.svelte";
  import FaqSection from "$lib/components/FaqSection.svelte";
  import Sponsors from "$lib/components/Sponsors.svelte";
</script>

<Hero />

<div class="h-16"></div>

<div class="flex flex-col items-center mx-auto gap-12 md:gap-14 w-full max-w-[50rem]">

  <Tagline />
  <Stats />

  <Section id="schedule" name="Schedule">
    <Schedule />
  </Section>

  <Section id="faq" name="FAQ">
    <FaqSection />
  </Section>

  <Section id="sponsors" name="Sponsors">
    <Sponsors />
  </Section>
</div>
