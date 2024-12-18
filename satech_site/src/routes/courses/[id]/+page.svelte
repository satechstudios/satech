<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    let selectedCourse = data.props;
</script>

<div class="rounded-lg md:m-5 md:p-5 m-2 text-white flex flex-col justify-center md:w-full">
    <div class="flex justify-center w-full">
        <div class="flex flex-col m-5 md:w-3/4">
            <div class="flex lg:flex-row flex-col">
                <div class="self-center">
                    <h2 class="sm:text-4xl text-2xl font-bold mb-3">{selectedCourse.name}</h2>
                    <p class="sm:text-lg text-sm mb-5">{selectedCourse.description}</p>
                </div>
                <img src="{selectedCourse.image}" class="sm:w-96 sm:h-96 self-center" alt="{selectedCourse.name}"/>

            </div>
            <div class="my-5">
                <p class="text-lg font-medium mb-5">Course Outline</p>
                <div id="accordion-outline" data-accordion="collapse">
                    {#each selectedCourse.syllabus as section, sectionIndex}
                        <h2 id={`accordion-outline-heading-${sectionIndex}`}>
                            <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target={`#accordion-outline-body-${sectionIndex}`} aria-expanded="false" aria-controls={`accordion-outline-body-${sectionIndex}`}>
                                <span>{section.section}</span>
                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id={`accordion-outline-body-${sectionIndex}`} class="hidden" aria-labelledby={`accordion-outline-heading-${sectionIndex}`}>
                            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <ul class="list-disc ml-5">
                                    {#each section.lessons as lesson}
                                        <li>{lesson}</li>
                                    {/each}
                                </ul>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
            <div class="my-5">
                <p class="text-lg font-medium">Course Highlights</p>
                <ul class="text-lg list-disc m-5">
                    <li><strong>Student Level:</strong> {selectedCourse.highlights.studentLevel}</li>
                    <li><strong>Duration:</strong> {selectedCourse.highlights.duration}</li>
                    <li><strong>Mode:</strong> {selectedCourse.highlights.mode}</li>
                    <li><strong>Certification:</strong> {selectedCourse.highlights.certification}</li>
                </ul>
            </div>
            <div class="my-5">
                <p class="text-lg font-medium">FAQs</p>
                <div class="mt-5">
                    <div id="accordion-collapse" data-accordion="collapse" >
                        {#each selectedCourse.faq as faq, index}
                            <h2 id={`accordion-collapse-heading-${index}`}>
                                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target={`#accordion-collapse-body-${index}`} aria-expanded="false" aria-controls={`accordion-collapse-body-${index}`}>
                                    <span>{faq.question}</span>
                                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                            <div id={`accordion-collapse-body-${index}`} class="hidden" aria-labelledby={`accordion-collapse-heading-${index}`}>
                                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                    <p class="mb-2 text-gray-500 dark:text-gray-400">{faq.answer}</p>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


