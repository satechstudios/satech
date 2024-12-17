<script>
    const teamMembers = [
        {
            name: "Elanngo Madheswaran",
            title: "Front End developer",
            image: "/team/elanngo.jpeg",
            linkedin: "https://www.linkedin.com/in/elanngomadheswaran/",
            portfolio: "https://elanngo.vercel.app/"
        },
        {
            name: "Deevith",
            title: "3D Generalised",
            image: "/team/deevith.jpg",
            linkedin: "https://www.linkedin.com/in/deevith-m-1b0729264/",
        }
        // Add more team members here
    ];
</script>

<div class="w-full flex justify-center p-5 md:flex-row flex-col" >
    {#each teamMembers as member}
        <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4 flex max-w-[300px] self-center md:self-auto">
            <div class="self-center">
                <!-- Avatar -->
                <a href="/" class="block mx-auto">
                    <img class="rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 delay-100"
                        src={member.image}
                        alt={member.name}>
                </a>
        
                <!-- Details -->
                <div class="text-center mt-6">
                    <!-- Name -->
                    <h1 class="text-gray-100 text-xl font-bold mb-1">
                        {member.name}
                    </h1>
        
                    <!-- Title -->
                    <div class="text-gray-300 font-light mb-2">
                        {member.title}
                    </div>
        
                    <!-- Social Icons -->
                    <div class="flex items-center justify-center space-x-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <!-- LinkedIn -->
                        <a href={member.linkedin} aria-label="LinkedIn" class="flex items-center justify-center rounded-full hover:bg-indigo-500/10 h-10 w-10 transition-all">
                            <i class="ph-light ph-linkedin-logo text-indigo-400 text-xl"></i>
                        </a>
        
                        <!-- Portfolio -->
                         {#if member.portfolio}
                        <a href={member.portfolio} aria-label="Portfolio" class="flex items-center justify-center rounded-full hover:bg-orange-100 dark:hover:bg-orange-500/10 h-10 w-10 transition-all">
                            <i class="ph-light ph-suitcase text-orange-300 text-xl"></i>
                        </a>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    {/each}
</div>
