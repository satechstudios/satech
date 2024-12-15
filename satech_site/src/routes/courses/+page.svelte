<script>
    let selectedCourse = null;

    let courses = [
        { id: 1, title: 'Front End', description: 'This is a course on front end development. Helps you to learn how webpages work and how to create your own webpages', image: 'https://placehold.co/400', outline: ['Introduction to HTML', 'CSS Basics', 'JavaScript Essentials', 'Responsive Design', 'Web Accessibility'] },
        { id: 2, title: 'Course 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsa.', image: 'https://placehold.co/400', outline: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 5'] },
        { id: 3, title: 'Course 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsa.', image: 'https://placehold.co/400', outline: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 5'] },
        { id: 4, title: 'Course 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsa.', image: 'https://placehold.co/400', outline: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 5'] },
        { id: 5, title: 'Course 5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsa.', image: 'https://placehold.co/400', outline: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 5'] },
        { id: 6, title: 'Course 6', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ipsa.', image: 'https://placehold.co/400', outline: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 5'] }
    ];

    function toggleModal(course) {
        selectedCourse = selectedCourse?.id === course.id ? null : course;
    }
</script>

<div>
    <p class="m-5 p-5 text-center font-bold md:text-6xl sm:text-3xl text-xl uppercase" id="top">Our Courses</p>

    <!-- Expanded selected course -->
    {#if selectedCourse}
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
                <button
                    on:click={() => toggleModal(selectedCourse)}
                    class="self-start px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
                >
                    Close
                </button>
            </div>
        </div>
    {/if}

    <!-- Course list -->
    <div class="flex flex-wrap justify-center">
        {#each courses as course (course.id)}
            {#if selectedCourse?.id !== course.id}
                <a href="#top" class="flex flex-col bg-blue-800 rounded-lg m-5 max-w-[300px] cursor-pointer transition-transform duration-300 ease-in-out no-underline text-white">
                    <div
                        role="button"
                        tabindex="0"
                        on:click={() => toggleModal(course) }
                        on:keydown={(e) => e.key === 'Enter' && toggleModal(course)}
                    >
                        <img src={course.image} alt={course.title} class="rounded-t-lg">
                        <div class="m-5">
                            <p class="text-3xl font-medium my-2">{course.title}</p>
                            <p class="text-lg">{course.description}</p>
                        </div>
                    </div>
                </a>
            {/if}
        {/each}
    </div>
</div>

<style>
    @keyframes slide-in-top {
        0% {
            transform: translateY(-50px) scale(0.8);
            opacity: 0;
        }
        100% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
    }

    .animate-slide-in-top {
        animation: slide-in-top 1s ease-in-out forwards;
    }
</style>
