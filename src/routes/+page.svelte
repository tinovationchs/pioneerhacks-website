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

<div class="flex flex-col gap-12 md:gap-14 w-full max-w-[50rem]">

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
      <!-- Row 1 (Juniper) -->
      <a href="https://juniper.net" target="_blank" class="my-8 h-max-24 w-[70%] max-w-[400px]" >
        <img src="/sponsors/juniper.png" alt="juniper"/>
      </a>

      <!-- Row 2 -->
      <a href="https://launchx.com/?utm_source=partner&utm_medium=logo_button&utm_campaign=pioneerhacks" target="_blank" class="my-8 h-max-24 w-[50%] max-w-[250px]">
        <img src="/sponsors/launchx.png" alt="launchx"/>
      </a>

      <!-- Row 3 -->
      <div class="flex flex-row items-center gap-8">
        <a href="https://artofproblemsolving.com/" target="_blank" class="my-8 h-max-24 w-[50%] max-w-[300px]">
          <img src="/sponsors/aops.png" alt="aops"/>
        </a>

        <a href="https://www.wolframalpha.com/" target="_blank" class="my-8 m-auto h-max-24 w-[50%] max-w-[300px]">
          <img src="/sponsors/wolfram.png" alt="wolfram alpha"/>
        </a>

        <a href="https://www.interviewcake.com/" target="_blank" class="my-8 m-auto h-max-24 w-[50%] max-w-[300px]">
          <img src="/sponsors/interview-cake.png" alt="interview cake"/>
        </a>
      </div>

      <!-- Row 4 -->
      <a href="https://www.desmos.com/" target="_blank" class="my-6 w-[30%] max-w-[180px]">
        <img src="/sponsors/desmos.png" alt="desmos" style="filter: brightness(0) invert(1);"/>
      </a>

      <!-- Row 5 (Echo3D) -->
      <a href="https://www.echo3d.com/" target="_blank" class="my-6 w-[30%] w-[200px]"><img src="/sponsors/echo3d.png" alt="echo3d"/></a>
    </div>
  </Section>
</div>
