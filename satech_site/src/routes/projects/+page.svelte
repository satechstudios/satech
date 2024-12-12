<script>
    const images = [
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
    ];
</script>

<div class="md:m-5 md:p-5 mt-5">
    <p class="md:text-6xl text-3xl text-center uppercase font-bold">Our Projects</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-5 p-5">
        {#each Array(Math.ceil(images.length / 3)).fill() as _, i}
            <div class="grid gap-4">
                {#each images.slice(i * 3, i * 3 + 3) as image}
                    <div class="group">
                        <img class="h-auto max-w-full rounded-lg" src={image} alt="">
                        <p class="group-hover:block hidden group-hover:animate-scale-in-top text-center p-3">Text description</p>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</div>
