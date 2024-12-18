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
            title: "3D Generalist",
            image: "/team/deevith.jpg",
            linkedin: "https://www.linkedin.com/in/deevith-m-1b0729264/",
        },
        {
            name: "Naresh S K",
            title: "Unity Developer",
            image: "/team/naresh.jpeg",
            linkedin: "https://www.linkedin.com/in/naresh-s-k-aaa35724a",
        },
        {
            name: "Mukesh kanna N",
            title: "Unity developer",
            image: "/team/mukesh.png",
            linkedin: "https://www.linkedin.com/in/mukeshkanna75",

        }
        // Add more team members here
    ];
</script>

<div class="w-full flex justify-center md:p-5 md:flex-row flex-col flex-wrap" >
    {#each teamMembers as member}
        <div class="w-full md:w-6/12 lg:w-3/12 mb-6 lg:px-4 flex flex-col max-w-[300px] self-center md:self-auto">
            <div class="self-center">
                <!-- Avatar -->
                <a href="/" class="flex flex-col">
                    <img class="rounded-2xl md:h-64 md:w-64 sm:w-56 sm:h-56 h-44 w-44 self-center"
                        src={member.image}
                        alt={member.name}/>
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
                        <a href={member.portfolio} aria-label="Portfolio" class="flex items-center justify-center rounded-full dark:hover:bg-orange-500/10 h-10 w-10 transition-all">
                            <i class="ph-light ph-suitcase text-orange-300 text-xl"></i>
                        </a>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    {/each}
</div>
