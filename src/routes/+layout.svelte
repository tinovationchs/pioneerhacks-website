<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import "../app.css";
</script>

<Navbar />
<div class="flex min-h-screen flex-col items-center font-sans text-2xl">
  <div class="w-full max-w-[70rem] px-7">
    <slot />
  </div>
</div>

<Footer />
