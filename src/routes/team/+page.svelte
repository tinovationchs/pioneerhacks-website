<script>
  const execs = [
    {
      "name": "Ryan Kim",
      "disc": "Lead Organizer",
      "tag":  "r_k_1"
    },
    {
      "name": "Arnav Gupta",
      "disc": "Lead Organizer",
      "tag":  "larry4"
    },
    {
      "name": "Bhargav Eranki",
      "disc": "Lead Organizer",
      "tag":  "beranki"
    },
  ];
  const organizers = [
    {
      "name": "Daniel Cui",
      "tag":  "solunian"
    },
    {
      "name": "Taisei De La Cruz",
      "tag": "prussia_de",
    },
    {
      "name": "Pruva Marfatia",
    },
    {
      "name": "Laurier Ke",
    },
    {
      "name": "Shine Chang",
      "tag": "cabbages.",
    },
    {
      "name": "Arnav Sharma",
    },
    {
      "name": "Shauryan Kanaujia",
      "tag": "prussia_de",
    },
  ];
  const types = [
    ['Leadership', execs],
    ['Organizers', organizers],
  ]
</script>

<div class="mx-auto w-full max-w-[50rem]">
{#each types as type}
  <h2 class="text-primary my-16 ml-8 font-header text-2xl sm:text-3xl md:text-5xl font-semibold tracking-widest">{type[0]}</h2>
  <div class="flex flex-row flex-wrap gap-12">
    {#each type[1] as person} 
      <div class="w-36 text-center">
        <!--
        <div class="mx-auto my-4 w-32 h-32 rounded-3xl overflow-hidden drop-shadow-lg">
          <img src="/team/Ryan Kim.png" alt="{person.name}" class="w-full"/>
        </div>
        -->
        <div class="tooltip" data-tip="{person.tag ?? '?'}">
          <div class="text-lg font-semibold">{person.name}</div>
        </div>
        {#if person.disc}
          <div class="text-sm font-normal">{person.disc}</div>
        {/if}
      </div>
    {/each}
  </div>
{/each}
</div>

