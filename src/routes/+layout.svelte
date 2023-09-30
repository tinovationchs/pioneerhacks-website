<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import "../app.css";
</script>

<div class="flex min-h-screen flex-col font-sans text-2xl">
  <Navbar />

  <div class="px-4 sm:px-16 md:px-36 lg:px-42">
    <slot />
  </div>

  <Footer />
</div>
