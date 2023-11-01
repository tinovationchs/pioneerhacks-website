<script>
  import HoverArrow from '../ui/hoverArrow.svelte';
</script>

<nav class="z-50 sticky top-0 w-full p-4 bg-neutral-focus">
  <div class="mx-20 flex gap-4 mx-8 px-7 font-header font-medium">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-4 text-2xl md:text-3xl">
      <img src="/pioneerhead.png" alt="pioneer head" class="w-8" />
      <span>/</span>
      <span class="text-primary">phv</span>
    </a>

    <div class="w-4"></div>

    <!-- Section redirects -->
    <div class="flex items-center gap-8 text-2xl">
      <a href="#schedule" class="scroll-smooth">Schedule</a>
      <a href="#faq">FAQ</a>
      <a href="#sponsors">Sponsors</a>
      <a href="https://hcb.hackclub.com/donations/start/pioneerhacks" target="_blank">Donate</a>
    </div>

    <!-- Spacer -->
    <div class="flex-grow"></div>

    <!-- Register Button -->
    <a
      href="https://forms.gle/bnjFkqSv4G2qRqBVA"
      target="_blank"
      style="transition: all 300ms"
      class="group flex items-center gap-1 rounded bg-secondary px-4 py-1 font-header text-lg text-info-content md:py-2 md:text-xl hover:tracking-widest">
      Register
      <HoverArrow size="1"/>
    </a>
  </div>
</nav>
