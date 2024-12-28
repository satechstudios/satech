<script>
    import * as coursesjson from '$lib/json/courses.json'
    const courses = coursesjson.default;
</script>

<div class="selection:bg-white selection:text-blue-700">
    <p class="m-5 p-5 text-center font-bold md:text-6xl sm:text-3xl text-xl uppercase" id="top">Our Courses</p>

    <!-- Course list -->
    <div class="flex flex-wrap justify-center">
        {#each courses as course (course.id)}
            <a href={`/courses/${course.id}`} class="flex flex-col bg-blue-800 rounded-lg m-5 max-w-[300px] cursor-pointer transition-transform duration-300 ease-in-out no-underline text-white">
                <div>
                    <img src={course.image} alt={course.name} class="rounded-t-lg">
                    <div class="m-5">
                        <p class="text-3xl font-medium my-2">{course.name}</p>
                        <p class="text-lg">{course.description}</p>
                    </div>
                </div>
            </a>
        {/each}
    </div>
</div>


