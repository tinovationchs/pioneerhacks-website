<script lang="ts">
  import FaqSection from "$lib/components/FaqSection.svelte";
  import Header from "$lib/components/Header.svelte";
  import Section from "$lib/components/Section.svelte";
  import Tagline from "$lib/components/Tagline.svelte";
</script>

<Header />

<main class="flex flex-col gap-12 md:gap-16">
  <Tagline />

  <Section id="schedule" name="schedule">
    <p>wake up</p>
  </Section>

  <Section id="faq" name="faq">
    <FaqSection />
  </Section>

  <Section id="sponsors" name="sponsors">
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
