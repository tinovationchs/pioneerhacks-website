<script>
    import HoverArrow from '../ui/hoverArrow.svelte';
</script>

<div class="planet-container flex flex-col gap-12 h-full">
    <div class="hero w-full mb-10 imposed">
        <div class="hero-content flex-col">
        <div class="mt-12 flex items-center gap-2 font-mono text-neutral text-lg sm:flex-row sm:justify-between md:text-2xl">
            <span>JUNIPER ASPIRATION DOME, SUNNYVALE</span>
            <div class="w-12"></div>
            <span>FEBRUARY 17—18</span>
        </div>

        <div class="flex">
            <b class="text-9xl text-primary">pioneer hacks V</b>
        </div>

        <a class="group flex hover:tracking-widest text-secondary" style="transition: all 300ms" href="/register">
            <p class="my-auto">Register Now</p>
            <HoverArrow size="1.5"/>
        </a>  


        </div>
    </div>

    <div class="h-20"></div> <!-- add h buffer if using 3D -->

    <div class="flex w-full h-full opening hide-UI zoom-large view-3D data-close controls-close">
        <!-- SHIFT BETWEEN VIEW-2D and VIEW-3D IF YOU WANT, can make smaller with zoom-large, larger w/ close-zoom -->
                <div id="universe" class="scale-stretched">
                <div id="galaxy">

                    <div id="solar-system">

                    <div id="mercury" class="orbit">
                        <div class="pos">
                        <div class="planet"></div>
                        </div>
                    </div>

                    <div id="venus" class="orbit">
                        <div class="pos">
                        <div class="planet"></div>
                        </div>
                    </div>

                    <div id="earth" class="orbit">
                        <div class="pos">
                        <div class="orbit">
                            <div class="pos">
                            <div class="moon"></div>
                            </div>
                        </div>

                        <div class="planet"></div>
                        </div>
                    </div>

                    <div id="mars" class="orbit">
                        <div class="pos">
                        <div class="planet"></div>
                        </div>
                    </div>

                    <div id="jupiter" class="orbit">
                        <div class="pos">
                        <div class="planet"></div>
                        </div>
                    </div>

                    <div id="saturn" class="orbit">
                        <div class="pos">
                        <div class="planet">
                            <div class="ring"></div>
                        </div>
                        </div>
                    </div>

                    <div id="uranus" class="orbit">
                        <div class="pos">
                        <div class="planet"></div>
                        </div>
                    </div>
                    
                    <div id="neptune" class="orbit">
                        <div class="pos">
                            <div class="planet"></div>
                        </div>
                    </div>

                    <div id="neptune" class="orbit">
                        <div class="pos">
                            <div class="planet"></div>
                        </div>
                    </div>

                    <div id="sun"></div>

                    </div>

                </div>
            </div>
    </div>
</div>