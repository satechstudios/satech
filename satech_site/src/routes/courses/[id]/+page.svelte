<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    let selectedCourse = data.props;
</script>

<div class="bg-blue-800 rounded-lg m-5 p-5 text-white flex flex-col md:flex-row gap-5 transition-all duration-[1000ms] ease-in-out transform animate-slide-in-top">
    <img src={selectedCourse.image} alt={selectedCourse.title} class="rounded-lg w-full md:w-1/3">
    <div class="flex flex-col justify-center">
        <h2 class="text-4xl font-bold mb-3">{selectedCourse.title}</h2>
        <p class="text-lg mb-5">{selectedCourse.description}</p>
        <p class="text-lg font-medium">Course Outline</p>
        <ul class="text-lg list-disc m-5">
            {#each selectedCourse.outline as topic}
                <li>{topic}</li>
            {/each}
        </ul>
    </div>
</div>
