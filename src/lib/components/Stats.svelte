<script>
  import Person from "../svg/person.svelte";
  import Prize from "../svg/prize.svelte";
</script>

<div class="stats shadow-xl">
  
  <div class="stat place-items-center">
    <div class="stat-figure text-primary">
      <Person />
    </div>
    <div class="stat-title flex justify-center text-center">Lifetime<br> Participants</div>
    <div class="stat-value">500+</div>
    <div class="stat-desc">(As of PioneerHacks IV)</div>
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-figure text-primary">
      <Prize />
    </div>
    <div class="stat-title">Prize Value</div>
    <div class="stat-value">$8,000</div>
    <div class="stat-desc">(in PioneerHacks IV)</div>
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-16 h-16 bi bi-calendar" viewBox="-6 -6 30 30"> <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/> </svg>
  </div>
    <div class="stat-title flex justify-center text-center">Years<br> Running</div>
    <div class="stat-value">6</div>
    <div class="stat-desc">(since 2018)</div>
  </div>
</div>
