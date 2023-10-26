<script>
  import HoverArrow from '../ui/hoverArrow.svelte';
</script>

<nav class="sticky top-0 w-full p-4 z-10" style="background: #ddd">
  <div class="mx-20 flex gap-4 mx-8 px-7 font-header font-medium">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-4 text-2xl md:text-3xl">
      <img src="/pioneerhead.png" alt="pioneer head" class="w-8" />
      <span>/</span>
      <span class="text-secondary">Pioneer Hacks <b>V</b></span>
    </a>

    <!-- Section redirects -->
    <div class="flex items-center gap-8 text-2xl">
      <a href="#schedule" class="scroll-smooth">schedule</a>
      <a href="#faq">faq</a>
      <a href="#sponsors">sponsors</a>
    </div>

    <!-- Spacer -->
    <div class="flex-grow"></div>

    <!-- Register Button -->
    <a
      href="/register"
      target="_blank"
      style="transition: all 300ms"
      class="group flex items-center gap-1 rounded bg-white px-4 py-1 font-header text-lg font-semibold text-black md:py-2 md:text-xl hover:tracking-widest">
      register

      <HoverArrow size="4"/>
      <!--
      <div class="my-auto w-4 h-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="absolute h-4 w-4 transition duration-300 group-hover:translate-x-1 group-hover:opacity-0">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="absolute h-4 w-4 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:delay-100">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
      -->
    </a>
  </div>
</nav>
