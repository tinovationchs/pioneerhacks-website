<script>
  import Person from "../svg/person.svelte";
  import Prize from "../svg/prize.svelte";
</script>

<div class="stats shadow">
  
  <div class="stat place-items-center">
    <div class="stat-figure text-secondary">
      <Person />
    </div>
    <div class="stat-title">Participants</div>
    <div class="stat-value">130+</div>
    <div class="stat-desc">(as of Pioneerhacks 4)</div>
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-figure text-secondary">
      <Prize />
    </div>
    <div class="stat-title">Prize Value</div>
    <div class="stat-value">$8,000</div>
    <div class="stat-desc">↗︎ 2,000 (33%)</div>
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div class="stat-title">Years Running</div>
    <div class="stat-value">7</div>
    <div class="stat-desc">(since 2017)</div>
  </div>
</div>
