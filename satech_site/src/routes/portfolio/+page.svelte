<script>
    import * as portfoliojson from '$lib/json/portfolio.json'
    const data1 = portfoliojson.data1;
    const data2 = portfoliojson.data2;
</script>

<div class="md:m-5 md:p-5 mt-5">
    <p class="md:text-6xl text-3xl text-center uppercase font-bold">Portfolio</p>
    <hr class="border-2 border-blue-500 my-5"/>
    <div class="flex flex-col justify-center">
        <h1 class="text-4xl font-bold text-center p-5">Ui/Ux and Graphic designs</h1>
        <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 m-5 p-5">
            {#each data1 as item}
                <div class="relative mb-4 group">
                    <img class="w-full rounded-lg" src={item.src} alt="">
                    {#if item.description}
                        <!-- Description overlay -->
                        <p class="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.description}
                        </p>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
    <hr class="border-2 border-blue-500 my-5"/>
    <div class="flex flex-col justify-center">
        <h1 class="text-4xl font-bold text-center p-5">3D models</h1>
        <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 m-5 p-5">
            {#each data2 as item}
                <div class="relative mb-4 group">
                    <img class="w-full rounded-lg" src={item.src} alt="">
                    {#if item.description}
                        <!-- Description overlay -->
                        <p class="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.description}
                        </p>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</div>
