<script>
  let domains = [
    {
      name: "Non-Technical",
      members: [
        { name: "Sharmatha V", role: "Human Resource", linkedin: "https://www.linkedin.com/in/sharmatha-venkateswaran" },
    
      ],
    },
    {
      name: "Marketing",
      members: [
        { name: "Arulesh P", role: "Bussiness Development Associate", linkedin: "https://www.linkedin.com/in/aruleshpp2001/" },
        { name: "Samyuktha", role: "Digital Marketer", linkedin: "https://www.linkedin.com/in/samyuktha-j-788899264/" },
      ],
    },
    {
      name: "Unity Development",
      members: [
        { name: "Naresh S K", role: "Unity Developer", linkedin: "https://www.linkedin.com/in/naresh-s-k-aaa35724a" },
        { name: "Mukesh kanna N", role: "Unity Developer", linkedin: "https://www.linkedin.com/in/mukeshkanna75" },
      ],
    },
    {
      name: "3D Animation",
      members: [
        { name: "Deevith", role: "3D Generalist", linkedin: "https://www.linkedin.com/in/deevith-m-1b0729264/" },
      ],
    },
    {
      name: "Creative Design",
      members: [
        { name: "Giridharan S V", role: "Graphic & UI/UX Designer", linkedin: "https://www.linkedin.com/in/giridharan-s-v-b09a4228b/" },
        { name: "Sanjay K", role: "Graphic Designer", linkedin: "https://www.linkedin.com/" },
      ],
    },
    
    
    {
      name: "Full Stack Development",
      members: [
        { name: "Elanngo Madheswaran", role: "Front End Developer", linkedin: "https://www.linkedin.com/in/elanngomadheswaran/" },
        { name: "Kamini T", role: "Full Stack Developer", linkedin: "https://www.linkedin.com/in/kamini-t-636370243/" },
        { name: "Kanisha M", role: "Full Stack Developer", linkedin: "https://www.linkedin.com/in/kanisha-m-3394a324a/" },
        { name: "Chidambaram S", role: "Frontend Developer", linkedin: "https://www.linkedin.com/in/chidambarams/" },
      ],
    },
    {
      name: "Mobile App Development",
      members: [
        { name: "Jeevananthan B", role: "Flutter App Developer", linkedin: "https://www.linkedin.com/in/jeevananthan-2b94a324a/" },
        { name: "Deepa S V", role: "Flutter App Developer", linkedin: "https://www.linkedin.com/in/deepa-s-v-0913a1240/" },
        { name: "Kuppulakshmi K", role: "Flutter app Developer", linkedin: "https://www.linkedin.com/in/kuppulakshmi-k-2844a224a/" },
      ],
    },
  ];

  let activeDomain = null;

  const toggleDomain = (index) => {
    activeDomain = activeDomain === index ? null : index;
  };
</script>

<div class="selection:bg-white selection:text-blue-700">
  <p class="m-5 p-5 text-center font-bold md:text-6xl sm:text-3xl text-2xl uppercase" id="top">Our Team</p>

  <div class="flex flex-col items-center space-y-6">
    {#each domains as domain, index}
      <div class="w-full flex flex-col items-center">
        <!-- Domain Button -->
        <button
          class="w-full sm:w-3/4 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-teal-600 transition-transform transform hover:scale-105"
          on:click={() => toggleDomain(index)}
        >
          {domain.name}
        </button>

        <!-- Team Members -->
        {#if activeDomain === index}
          <div class="mt-4 flex flex-wrap md:flex-row sm:flex-col justify-center space-y-4 sm:space-y-4 md:space-y-0 md:space-x-4">
            {#each domain.members as member}
              <div
                class="w-64 p-4 bg-white border-l-4 border-teal-500 shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
              >
                <h3 class="text-lg font-semibold text-gray-700">{member.name}</h3>
                <p class="text-gray-500">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-teal-500 hover:text-teal-700 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  @import "https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css";
</style>
