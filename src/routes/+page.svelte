<script lang="ts">
  import Section from "$lib/components/Section.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Tagline from "$lib/components/Tagline.svelte";
  import Stats from "$lib/components/Stats.svelte";
  import Schedule from "$lib/components/Schedule.svelte";
  import FaqSection from "$lib/components/FaqSection.svelte";
</script>

<Hero />

<main class="flex flex-col gap-12 md:gap-16">
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
      <img src="https://www.losaltoshacks.com/sponsors/juniper.svg" alt="" class="h-24" />
      <img src="https://www.losaltoshacks.com/sponsors/bill.svg" alt="" class="h-36" />
      <img src="https://www.losaltoshacks.com/sponsors/google.svg" alt="" class="h-28" />
      <img src="https://www.losaltoshacks.com/sponsors/nokia.svg" alt="" class="h-20" />
      <img src="https://www.losaltoshacks.com/sponsors/corsair.svg" alt="" class="h-32" />
      <img src="https://www.losaltoshacks.com/sponsors/malwarebytes.svg" alt="" class="h-20" />
      <img src="https://www.losaltoshacks.com/sponsors/niantic.svg" alt="" class="h-32" />
      <img src="" alt="" />
    </div>
  </Section>
</main>
