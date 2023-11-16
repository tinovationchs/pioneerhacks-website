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
    <div class="flex flex-col flex-wrap items-center justify-evenly">
      <a href="https://juniper.net" target="_blank"><img src="/sponsors/juniper.png" alt="juniper" class="m-8 h-24" /></a>
      <a href="https://www.echo3d.com/" target="_blank"><img src="/sponsors/echo3d.png" alt="echo3d" class="m-[50px] [ w-[200px]" /></a>
    </div>
  </Section>
</div>
