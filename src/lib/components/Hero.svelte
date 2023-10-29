<script>
  import HoverArrow from '../ui/hoverArrow.svelte';
</script>

<div class="hero w-full mb-10 title-text">
  <div class="hero-content flex-col">
    <div class="mt-12 flex items-center gap-2 font-mono text-neutral text-lg sm:flex-row sm:justify-between md:text-2xl">
      <span>JUNIPER ASPIRATION DOME, SUNNYVALE</span>
      <div class="w-12"></div>
      <span>FEBRUARY 17—18</span>
    </div>
    <div class="flex">
      <h1 class="text-6xl my-auto text-primary">Pioneer Hacks </h1>
      <b class="text-9xl text-primary">V</b>
    </div>

    <a class="group flex hover:tracking-widest text-secondary" style="transition: all 300ms" href="/register">
      <p class="my-auto">Register Now</p>
      <HoverArrow size="1.5"/>
    </a>  
  </div>

  <div class="w-full">
    <svg version="1.1" style="height:100%; width: 100%;"
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
      width="1000" height="500" viewBox="0 0 1000 500" xml:space="preserve">

      <!-- Smoke -->
      <g stroke-width="5" class="stroke-current fill-current">
        <circle cx="250" cy="400" r="200" />
        <circle cx="350" cy="300" r="150" />
        <circle cx="500" cy="380" r="130" />
        <circle cx="160" cy="680" r="350" />
        <circle cx="600" cy="700" r="300" />
        <circle cx="400" cy="600" r="300" />
      </g>

      <!-- Rocket -->
      <g transform="translate(570, -120) rotate(50)" class="stroke-none fill-neutral">
        <path d="M331.8,449.56v-83.627c0-29.867-17.92-58.027-35.84-81.92l-6.827-9.387v-62.708c9.84-1.93,17.067-10.437,17.067-20.919
            V92.867v-8.533V75.8h-0.249C302.324,13.172,259.195-0.183,257.56-1H255h-2.56c-1.635,0.817-44.764,14.172-48.391,76.8H203.8
            v8.533v8.533V191c0,10.481,7.227,18.988,17.067,20.919v62.708l-6.827,9.387c-17.92,23.893-35.84,52.053-35.84,81.92v82.773
            l-16.213,32.427c-1.707,2.56-1.707,5.973,0,8.533s5.12,4.267,7.68,4.267h37.12l-2.133,4.267c-1.707,2.56-1.707,5.973,0,8.533
            c1.707,2.56,5.12,4.267,7.68,4.267h85.333c2.56,0,6.827-1.707,7.68-4.267s1.707-5.973,0-8.533l-2.133-4.267h37.12
            c2.56,0,6.827-0.853,7.68-3.413s1.707-5.973,0-8.533L331.8,449.56z M314.733,365.933v76.8h-25.6v-102.4V303.64
            C302.787,323.267,314.733,344.6,314.733,365.933z M272.067,274.31c-3.03-5.494-6.43-10.816-10.24-15.896L255,249.027
            l-6.827,9.387c-3.81,5.08-7.21,10.403-10.24,15.896v-61.976h34.133V274.31z M255,278.893
            c11.093,18.773,17.067,40.107,17.067,61.44v110.933v7.68h-34.133v-8.533v-110.08C237.933,319,243.907,297.667,255,278.893z
             M255,16.92c7.68,3.413,31.573,17.067,34.133,58.88h-68.267C224.28,33.987,247.32,20.333,255,16.92z M289.133,92.867V191
            c0,2.56-1.707,4.267-4.267,4.267h-59.733c-2.56,0-4.267-1.707-4.267-4.267V92.867H289.133z M220.867,303.64v36.693V441.88h-25.6
            v-75.947C195.267,344.6,207.213,322.413,220.867,303.64z M183.32,476.867l8.533-17.067h29.013v5.973l-5.547,11.093H183.32z
             M225.987,493.933l8.533-17.067h40.96l5.973,11.947c0,0,0,0.001,0.001,0.001l2.56,5.119H225.987z M294.68,476.867l-5.547-11.093
            V459.8h29.013l8.533,17.067H294.68z"/>
      </g>
      <!-- Dots -->
      <g fill="#eee">
        <circle cx="850" cy="400" r="5"/>
        <circle cx="140" cy="140" r="5"/>
        <circle cx="900" cy="80" r="5"/>
      </g>

      <!-- Stars -->
      <g transform="translate(850 300) scale(3)" class="stroke-current fill-none">
        <path 
          d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C5.6655 12 8.06036 10.8412 9.70832 9"
          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <g transform="translate(200 50) scale(3)" class="stroke-current fill-none">
        <path 
          d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C5.6655 12 8.06036 10.8412 9.70832 9"
          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>

    </svg>
  </div>

  <!-- Overlay Fade -->
  <div class="w-full h-full bg-gradient-to-t from-base-100"></div>
</div>
