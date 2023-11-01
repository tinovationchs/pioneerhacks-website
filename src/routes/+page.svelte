<script lang="ts">
  import Section from "$lib/components/Section.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Tagline from "$lib/components/Tagline.svelte";
  import Stats from "$lib/components/Stats.svelte";
  import Schedule from "$lib/components/Schedule.svelte";
  import FaqSection from "$lib/components/FaqSection.svelte";
</script>

<Hero />

<div class="h-16"></div>

<div class="lower-section flex flex-col gap-12 md:gap-14 max-w-[50rem] mx-auto">
    <Tagline />

    <Stats />

    <Section id="schedule" name="Schedule">
      <Schedule />
    </Section>

    <Section id="faq" name="FAQ">
      <FaqSection />
    </Section>

    <Section id="sponsors" name="Sponsors">
      <div class="flex flex-row flex-wrap items-center justify-evenly gap-8">
        <a href="https://juniper.net" target="_blank"><img src="/juniper_white.png" alt="" class="h-24" /></a>
      </div>
    </Section>
  </div>
