<script>
  import HoverArrow from '../ui/hoverArrow.svelte';
</script>

<div class="w-full h-[50vh] sm:h-[100vh] mb-12">
  <!-- Top Overlay -->
  <div class="w-[100%] flex flex-col pt-12 lg:pt-28 w-10/12 items-center gap-1 sm: gap-3
              z-40 bg-gradient-to-b from-base-200 from-10% absolute">

    <div class="pb-10 text-center">
      On behalf of all the organizers, <b> thank you </b> so much for a wonderful hackathon! <br>
      We'll be back next year, see you then!
    </div>

    <div class="flex items-center font-mono text-neutral tracking-wide 
      mx-10 lg:mx-20
      text-xs md:text-2xl">
      <span><a href="https://maps.app.goo.gl/L1gddhwzDswuK1z69" target="_blank">JUNIPER ASPIRATION DOME @ SUNNYVALE</a></span>
      <div class="w-12"></div>
      <span>FEBRUARY 17—18 2024</span>
    </div>

    <div class="text-4xl font-thin sm:text-6xl lg:text-[7rem] text-primary tracking-widest" style="text-shadow: black 0 0 10px;">pioneer hacks <strong>V</strong></div>

    <!-- Register Button
    <a class="group flex tracking-[0.2em] hover:tracking-[0.5em] text-secondary" 
       style="transition: all 500ms; text-shadow: black 0 0 10px;" 
       href="https://forms.gle/bnjFkqSv4G2qRqBVA" 
       target="_blank">
      Register Now
      <HoverArrow size="1.5"/>
    </a>  
    -->

    <!-- Waitlist Button -->
    <!--
    <a class="group flex tracking-[0.2em] hover:tracking-[0.5em] text-secondary" 
       style="transition: all 500ms; text-shadow: black 0 0 10px;" 
       href="https://forms.gle/v4mbV5VyqQzqCWPy6" 
       target="_blank">
      Join the Waitlist 
      <HoverArrow size="1.5"/>
    </a>
    -->

    <!-- Thank you -->
    <div class="group flex tracking-[0.2em] hover:tracking-[0.5em] text-secondary" 
       style="transition: all 500ms; text-shadow: black 0 0 10px;" 
       href="https://forms.gle/v4mbV5VyqQzqCWPy6" 
       target="_blank">
       Thank you!
    </div>

    <!-- Devpost Button -->
    <a class="group flex tracking-[0.2em] hover:tracking-[0.5em] text-info text-sm" 
       style="transition: all 500ms; text-shadow: black 0 0 10px;" 
       href="https://pioneerhacks-v.devpost.com/"
       target="_blank">
      Devpost
      <HoverArrow size="1"/>
    </a>  
  </div>

  <div class="absolute pt-36 2xl:pt-48 w-full h-[50vh] sm:h-[100vh] zoom-large view-3D">
    <div id="universe" class="scale-stretched">
      <div id="galaxy">
          <div id="solar-system">

          <div id="mercury" class="orbit">
            <div class="pos">
            <div class="planet" style="background-color: rgb(173, 186, 192)"></div>
            </div>
          </div>

          <div id="venus" class="orbit">
            <div class="pos">
            <div class="planet" style="background-color: #d4874b"></div>
            </div>
          </div>

          <div id="earth" class="orbit">
            <div class="pos">
            <div class="orbit">
              <div class="pos">
              <div class="moon" style="background-color: rgb(185, 170, 170);"></div>
            </div>
            </div>

            <div class="planet" style="background-color: #68A38A;"></div>
            </div>
          </div>

          <div id="mars" class="orbit">
            <div class="pos">
              <div class="planet" style="background-color: #B02066;"></div>
            </div>
          </div>

          <div id="jupiter" class="orbit">
            <div class="pos">
            <div class="planet" style="background-color: #D29747"></div>
            </div>
          </div>

          <div id="saturn" class="orbit">
            <div class="pos">
            <div class="planet" style="background-color: #978E7C;">
              <div class="ring"></div>
            </div>
            </div>
          </div>

          <div id="sun" style="background-color: #fbbf24;"></div>

        </div>
      </div>
    </div>

    <!-- Fade Overlay -->
    <div class="absolute w-full h-full z-30 bg-gradient-to-t from-base-100 to-30%"></div>
  </div>

</div>
