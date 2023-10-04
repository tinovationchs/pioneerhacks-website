<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import "../app.css";
</script>

<div class="flex min-h-screen flex-col font-sans text-2xl items-center">
  <div class="max-w-[70rem] w-full px-4">
    <Navbar />

    <slot />
  </div>
  

</div>

<Footer />