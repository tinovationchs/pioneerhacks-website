<script>
  import Person from "../svg/person.svelte";
  import Prize from "../svg/prize.svelte";
</script>

<div class="mx-10 py-6 stats shadow-xl bg-base-200 text-primary
  text-xs stats-vertical md:stats-horizontal">
  
  <div class="stat bg place-items-center">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-12 h-12 fill-current">
        <rect width="24" height="24" opacity="0"/>
        <path d="M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM6 6h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1v4H5V7a1 1 0 0 1 1-1zm12 14H6a1 1 0 0 1-1-1v-6h14v6a1 1 0 0 1-1 1z"/>
        <circle cx="8" cy="16" r="1"/>
        <path d="M16 15h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"/>
      </svg>
  </div>
    <div class="stat-title flex justify-center text-center">Years<br> Running</div>
    <div class="stat-value">6</div>
    <div class="stat-desc">(since 2018)</div>
  </div>
</div>
