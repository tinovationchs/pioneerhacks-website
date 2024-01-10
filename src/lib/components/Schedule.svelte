<script>
  const events = [
    {
      timing: "8:00 - 9:00 AM",
      title: "Check-in",
      description: "",
    },
    {
      timing: "9:00 - 10:00 AM",
      title: "Opening Ceremony",
      description: "",
    },
    {
      timing: "10:00 AM",
      title: "Hacking Begins!",
      description: "",
    },
    {
      timing: "12:00 PM",
      title: "Lunch",
      description: "",
    },
    {
      timing: "4:00 - 5:00 PM",
      title: "Generative AI Workshop",
      description: "",
    },
    {
      timing: "5:00 - 6:45 PM",
      title: "CTF (Capture the Flag)",
      description: "",
    },
    {
      timing: "7:00 PM",
      title: "Dinner",
      description: "",
    },
    {
      timing: "9:00 - 10:00 PM",
      title: "Paper Airplane Folding Contest",
      description: "",
    },
    {
      timing: "8:00 AM",
      title: "Breakfast",
      description: "",
    },
    {
      timing: "9:00 AM",
      title: "Submissions Close",
      description: "",
    },
    {
      timing: "12:00 PM",
      title: "Closing Ceremony",
      description: "",
    },
  ];
</script>

<div class="grid grid-cols-8 gap-4 text-sm md:text-xl">

  {#each events as event}
    <!-- Timing -->
    <div class="col-span-2 w-full my-auto text-right">
      {event.timing}
    </div>

    <!-- Timeline Graphics -->
    <div class="col-span-1 flex items-center w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        class="w-12 h-12 mx-auto fill-primary">
        <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/>
        <path d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46zm0-10v7.9l4.86-3.9z"/>
      </svg>
    </div>

    <!-- Event Card -->
    <div class="col-span-5 w-full indicator">
      <!-- Indicators: unused
      {#if event.indicator}
        <span class="indicator-item indicator-center badge badge-primary">{event.indicator}</span>
      {/if}
      -->
      <div class="w-full flex flex-col justify-center bg-base-300 rounded-2xl p-2 shadow-xl">
        <!-- Title -->
        <h2 class="font-medium text-center text-primary">
          {event.title}
        </h2>

        <!-- Desc -->
        {#if event.description}
          <p class="text-sm text-base-focus">{event.description}</p>
        {/if}
      </div>
    </div>
  {/each}
</div> 
