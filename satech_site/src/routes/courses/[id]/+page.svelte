<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    let selectedCourse = data.props;
</script>

<div class="rounded-lg md:m-5 md:p-5 m-2 text-white flex flex-col justify-center md:w-full">
    <img src={selectedCourse.image} alt={selectedCourse.title} class="rounded-lg self-center w-full md:w-1/3">
    <div class="flex justify-center w-full">
        <div class="flex flex-col m-5 md:w-3/4">
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
</div>
