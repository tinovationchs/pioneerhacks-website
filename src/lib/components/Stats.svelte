<script>
  import Person from "../svg/person.svelte";
  import Prize from "../svg/prize.svelte";
  import Gift from "../svg/gift.svelte";
</script>

<div class="mx-8 py-6 stats shadow-xl bg-base-300 text-primary
  text-xs stats-vertical md:stats-horizontal">
  
  <div class="stat bg place-items-center gap-0">
    <div class="stat-figure text-primary">
      <Person />
    </div>
    <div class="stat-title flex justify-center text-center">Participants</div>
    <div class="stat-value">170+</div>
    <div class="stat-desc">PioneerHacks V</div>
  </div>
  
  <div class="stat place-items-center gap-0">
    <div class="stat-figure text-primary">
      <Prize />
    </div>
    <div class="stat-title">Prize<br> Value</div>
    <div class="stat-value">$11,000</div>
    <div class="stat-desc">(cumulative)</div>
  </div>
  
  <div class="stat place-items-center gap-0">
    <div class="stat-figure text-primary">
      <Gift />
    </div>
    <div class="stat-title flex justify-center text-center">Perk<br> Value</div>
    <div class="stat-value">$400</div>
    <div class="stat-desc">(per participant)</div>
  </div>
</div>
