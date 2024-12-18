<script>
    let courses = [
        { id: 1, title: 'Frontend Development', description: 'Master the art of crafting responsive and interactive web interfaces.', image: '/courses/Front end.jpg', outline: ['HTML', 'CSS', 'JavaScript', 'Modern Frameworks'] },
        { id: 2, title: 'UI/UX Design', description: 'Learn the principles of user-centered design to create intuitive, engaging, and visually compelling interfaces.', image: '/courses/ui-ux.jpg', outline: ['Wireframing', 'Prototyping', 'Usability Testing'] },
        { id: 3, title: 'Photoshop', description: 'Learn professional photo editing, digital painting, and graphic design techniques with Adobe Photoshop. Master layers, masks, retouching, and creative effects to bring your ideas to life.', image: '/courses/Photoshop.jpg', outline: ['Layers', 'Masks', 'Retouching', 'Creative Effects'] },
        { id: 4, title: 'After Effects', description: 'Dive into motion graphics and visual effects with Adobe After Effects. This course teaches you animation, compositing, and dynamic visual storytelling for film, video, and online platforms.', image: '/courses/After effects.jpg', outline: ['Animation', 'Compositing', 'Visual Storytelling'] },
        { id: 5, title: 'Illustrator', description: 'Discover the art of vector design with Adobe Illustrator. Create stunning logos, illustrations, and scalable graphics for print and digital media using advanced drawing and typography tools.', image: '/courses/Illustrator.jpg', outline: ['Vector Design', 'Logos', 'Illustrations', 'Typography'] },
        { id: 6, title: 'Premiere Pro', description: 'Master video editing with Adobe Premiere Pro. Learn to craft compelling stories, apply transitions, manage audio, and deliver professional-quality videos for any medium.', image: '/courses/premiere Pro.jpeg', outline: ['Video Editing', 'Transitions', 'Audio Management', 'Storytelling'] },
        { id: 7, title: '3D Modelling', description: 'Explore 3D modeling techniques to create detailed and realistic objects, characters, and environments. Use industry-standard tools to bring your imagination to the third dimension.', image: '/courses/3d-modeling.jpg', outline: ['3D Objects', 'Characters', 'Environments'] },
        { id: 8, title: 'AR/VR', description: 'Step into the future with AR/VR development. Learn to build immersive augmented and virtual reality experiences using cutting-edge platforms and tools.', image: '/courses/AR-VR-.jpg', outline: ['AR Development', 'VR Development', 'Immersive Experiences'] },
        { id: 9, title: 'Game Design and Development', description: 'Unlock the world of game creation by mastering design principles, scripting, and prototyping. This course covers everything from concept art to interactive gameplay mechanics.', image: '/courses/Game Design And Development.png', outline: ['Design Principles', 'Scripting', 'Prototyping', 'Gameplay Mechanics'] }
    ];
</script>

<div class="selection:bg-white selection:text-blue-700">
    <p class="m-5 p-5 text-center font-bold md:text-6xl sm:text-3xl text-xl uppercase" id="top">Our Courses</p>

    <!-- Course list -->
    <div class="flex flex-wrap justify-center">
        {#each courses as course (course.id)}
            <a href={`/courses/${course.id}`} class="flex flex-col bg-blue-800 rounded-lg m-5 max-w-[300px] cursor-pointer transition-transform duration-300 ease-in-out no-underline text-white">
                <div>
                    <img src={course.image} alt={course.title} class="rounded-t-lg">
                    <div class="m-5">
                        <p class="text-3xl font-medium my-2">{course.title}</p>
                        <p class="text-lg">{course.description}</p>
                    </div>
                </div>
            </a>
        {/each}
    </div>
</div>



<div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
    <h2 id="accordion-flush-heading-1">
      <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
        <span>What is Flowbite?</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h2>
    <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
      <div class="py-5 border-b border-gray-200 dark:border-gray-700">
        <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
        <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
      </div>
    </div>
    <h2 id="accordion-flush-heading-2">
      <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
        <span>Is there a Figma file available?</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h2>
    <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
      <div class="py-5 border-b border-gray-200 dark:border-gray-700">
        <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
        <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
      </div>
    </div>
    <h2 id="accordion-flush-heading-3">
      <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
        <span>What are the differences between Flowbite and Tailwind UI?</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h2>
    <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
      <div class="py-5 border-b border-gray-200 dark:border-gray-700">
        <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
          <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
          <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
        </ul>
      </div>
    </div>
  </div>
  

