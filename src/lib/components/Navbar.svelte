<script>
  import HoverArrow from '../ui/hoverArrow.svelte';
  import Discord from '../svg/discord.svelte';
</script>


<nav class="z-50 sticky top-0 w-full py-4 px-4 md:px-12 lg:px-24 bg-base-200 flex font-header font-medium drop-shadow-xl">
  <!-- Logo -->
  <a href="/" class="flex items-center gap-4 mx-4 md:mx-10 text-2xl md:text-3xl">
    <img src="/pioneerhead.png" alt="pioneer head" class="w-8" />
    <span>/</span>
    <span class="text-primary">phv</span>
  </a>


  <div class="flex flex-grow text-lg lg:text-xl hidden md:flex">
    <!-- Section redirects -->
    <div class="flex items-center gap-8">
      <a href="/#schedule" class="scroll-smooth">Schedule</a>
      <a href="/#faq">FAQ</a>
      <!-- <a href="/team">Team</a> -->
      <a href="https://hcb.hackclub.com/donations/start/pioneerhacks" target="_blank">Donate</a>
      <a href="https://discord.com/invite/CpuGWpbkzE"><Discord /></a>
    </div>

    <!-- Spacer -->
    <div class="flex-grow"></div>

    <!-- Register Button -->
    <!--
    <a
      href="https://forms.gle/bnjFkqSv4G2qRqBVA"
      target="_blank"
      style="transition: all 300ms"
      class="group flex items-center gap-1 rounded bg-secondary px-4 py-1 font-header text-lg text-info-content md:py-2 md:text-xl hover:tracking-widest">
      Register
      <HoverArrow size="1"/>
    </a>
    -->

    <!-- Waitlist Button -->
    <!--
    <a
      href="https://forms.gle/v4mbV5VyqQzqCWPy6"
      target="_blank"
      style="transition: all 300ms"
      class="group flex items-center gap-1 rounded bg-secondary px-4 py-1 font-header text-lg text-info-content md:py-2 md:text-xl hover:tracking-widest">
      Waitlist 
      <HoverArrow size="1"/>
    </a>
    -->
  </div>

  <!-- Mobile Spacer -->
  <div class="flex-grow md:hidden"></div>

  <!-- Mobile dropdown -->
  <div class="dropdown dropdown-end">
    <ul class="menu menu-horizontal px-1 md:hidden">
      <li>
        <details>
          <summary>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </summary>
          <ul class="p-2 z-50 shadow-xl bg-base dropdown-content">
            <li><a href="/#schedule" class="scroll-smooth">Schedule</a></li>
            <li><a href="/#faq">FAQ</a></li>
            <!-- <li><a href="/team">Team</a></li> -->
            <li><a href="https://hcb.hackclub.com/donations/start/pioneerhacks" target="_blank">Donate</a></li>
            <li><a href="https://discord.com/invite/CpuGWpbkzE"><Discord /></a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</nav>
