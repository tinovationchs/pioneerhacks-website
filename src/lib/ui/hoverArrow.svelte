<script>
  export let size;
</script>

<div class="my-auto" style="height: {size}rem; width: {size}rem">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="3"
    stroke="currentColor"
    class="absolute transition duration-300 group-hover:translate-x-1 group-hover:opacity-0"
    style="height: {size}rem; width: {size}rem">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="3"
    stroke="currentColor"
    class="absolute opacity-0 transition duration-300 group-hover:opacity-100 group-hover:delay-100"
    style="height: {size}rem; width: {size}rem">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
</div>
