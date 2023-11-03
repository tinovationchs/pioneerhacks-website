<script>
  import HoverArrow from '../ui/hoverArrow.svelte';
</script>

<div class="w-full h-[50vh] sm:h-[100vh] mb-12">
  <!-- Top Overlay -->
  <div class="w-[100%] flex flex-col pt-12 lg:pt-28 w-10/12 items-center gap-1 sm: gap-3
      z-40 bg-gradient-to-b from-neutral-focus from-10% absolute">
    <div class="flex items-center font-mono text-neutral 
      mx-10 lg:mx-20
      text-xs md:text-2xl">
      <span><a href="https://maps.app.goo.gl/L1gddhwzDswuK1z69" target="_blank">JUNIPER ASPIRATION DOME @ SUNNYVALE</a></span>
      <div class="w-12"></div>
      <span>FEBRUARY 17—18 2024</span>
    </div>

    <div class="text-4xl font-medium sm:text-7xl lg:text-9xl text-primary">pioneerhacks <strong>V</strong></div>

    <a class="group flex hover:tracking-widest text-secondary" 
       style="transition: all 300ms" 
       href="https://forms.gle/bnjFkqSv4G2qRqBVA" 
       target="_blank">
      Register Now
      <HoverArrow size="1.5"/>
    </a>  

    <a class="group flex hover:tracking-widest text-info text-sm" 
       style="transition: all 300ms" 
       href="https://pioneerhacks-v.devpost.com/"
       target="_blank">
      Devpost
      <HoverArrow size="1"/>
    </a>  
  </div>

  <div class="absolute bg-base-100 pt-36 w-full h-[50vh] sm:h-[100vh] zoom-large view-3D">
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

            <div class="planet" style="background-color: rgb(19, 206, 150);"></div>
            </div>
          </div>

          <div id="mars" class="orbit">
            <div class="pos">
              <div class="planet" style="background-color: rgb(141, 27, 27);"></div>
            </div>
          </div>

          <div id="jupiter" class="orbit">
            <div class="pos">
            <div class="planet" style="background-color: #eee"></div>
            </div>
          </div>

          <div id="saturn" class="orbit">
            <div class="pos">
            <div class="planet" style="background-color: rgb(155, 141, 123);">
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
