<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import "../app.css";
</script>

<Navbar />
<div class="font-sans text-2xl bg-base-100">
  <slot />
</div>

<Footer />
