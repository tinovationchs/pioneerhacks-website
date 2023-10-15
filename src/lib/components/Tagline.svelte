<script lang="ts">
  import { onMount } from "svelte";

  let ready = false;
  onMount(() => (ready = true));

  function typewriter(node: Node) {
    const speed = 4;
    const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(`This transition only works on elements with a single text node child`);
    }

    const text = node.textContent!;
    const duration = text.length / (speed * 0.01);

    return {
      duration,
      tick: (t: number) => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  }
</script>

<div class="min-h-[3rem]">
  {#if ready}
    <p transition:typewriter class="text-5xl font-semibold text-gray-400">
      {"<insert tagline here>"}
    </p>
  {/if}
</div>
