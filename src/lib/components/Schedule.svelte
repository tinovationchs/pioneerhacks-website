<script>
  const events = [
    {
      timing: "TBA",
      indicator: "",
      title: "To be Announced",
      description: "The schedule will be released soon!",
    }
  ];
</script>

<div class="grid grid-cols-8 gap-8">

  {#each events as event}
    <!-- Timing -->
    <div class="col-span-2 w-full my-auto text-right">
      {event.timing}
    </div>

    <!-- Timeline Graphics -->
    <div class="col-span-1 flex items-center w-full h-48">
      <div class="h-[90%] w-1 bg-accent"></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        class="w-16 h-16 fill-accent">
        <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/>
        <path d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46zm0-10v7.9l4.86-3.9z"/>
      </svg>
    </div>

    <!-- Event Card -->
    <div class="col-span-5 w-full indicator my-4">
      <span class="indicator-item indicator-center badge badge-primary">{event.indicator}</span>
      <div class="card w-full bg-base-300 shadow-xl">
        <div class="card-body">
          <!-- Title -->
          <h2 class="card-title text-primary">
            {event.title}
          </h2>

          <!-- Desc -->
          <p class="text-sm text-base-focus">{event.description}</p>
        </div>
      </div>
    </div>
  {/each}
</div> 
