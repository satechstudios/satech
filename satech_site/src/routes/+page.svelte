<script>
    import "./styles.css"
    const items = [
        {
            image: "https://via.placeholder.com/150",
            alt: "placeholder",
            title: "Our Projects",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            href: "/projects"
        },
        {
            image: "https://via.placeholder.com/150",
            alt: "placeholder",
            title: "Courses",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            href: "/courses"
        },
        {
            image: "https://via.placeholder.com/150",
            alt: "placeholder",
            title: "Title 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            href: "/projects"
        },
        {
            image: "https://via.placeholder.com/150",
            alt: "placeholder",
            title: "Title 4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            href: "/projects"
        }
    ];
</script>

<div id="top-section" class="text-white relative" style="background-image: url('main_img.png');">
    <div class="absolute inset-0 bg-black opacity-85 z-0"></div>
    <div class="relative z-10 h-full w-full flex flex-col justify-center">
      <p class="md:text-6xl text-3xl font-bold uppercase self-center md:w-4/5 text-center my-5 py-5">
        From Vision to Reality, Beyond Imagination.
      </p>
      <p class="md:text-xl text-md self-center sm:w-3/6 text-center">
        We the talented and passionate team will work hard to bring your wildest dreams into reality with the help of AR/VR
      </p>
      <button
        type="button"
        class="text-center w-52 rounded-2xl h-14 relative text-black text-xl font-semibold group self-center my-5 z-10"
      >
        <div
          class="bg-blue-900 rounded-xl h-12 w-1/4 flex items-center justify-end absolute left-1 top-[4px] group-hover:w-[240px] duration-500"
        >
          <svg
            viewBox="0 0 256 256"
            fill="#ffffff"
            height="32"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
            ></path>
          </svg>
        </div>
        <p class="translate-x-2 z-10 text-white h-12 rounded-xl bg-blue-900 p-2">
          Our Services
        </p>
      </button>
    </div>
  </div>
  
<div class="bg-[#111827] flex lg:flex-row flex-col-reverse p-5" id="about">
    <div class="flex w-full justify-center">
        <img src="women-working.png" alt="woman working" class="lg:w-full w-3/4 md:min-w-96 min-w-60 self-center">
    </div>
    <div class="max-w-screen-xl mx-auto sm:p-5 self-center">
        <p class="text-center md:text-6xl text-3xl uppercase font-bold p-5 m-5 text-blue-400">About Us</p>
        <p class="sm:text-center md:text-xl text-md sm:p-5 sm:m-5 my-3 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, libero. Amet, soluta ea doloremque est corporis reprehenderit dicta natus numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo unde similique itaque odit cupiditate aspernatur, non qui ad aut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, vitae!</p>
    </div>
</div>

<section class="flex flex-col" id="services">
    <p class="text-6xl font-bold self-center m-5 p-5">Services</p>
    <div class="flex flex-col md:flex-row justify-center">
        {#each items as item}
            <div class="bg-white sm:w-80 w-60 flex flex-col m-5 p-5 rounded-md self-center hover:-translate-y-5 group">
                <img src={item.image} alt={item.alt} class="w-3/4 self-center"/>
                <p class="text-2xl font-bold text-blue-500">{item.title}</p>
                <p class="text-black text-lg">{item.description}</p>
                <a href="{item.href}" class="self-center w-1/2"><button class="bg-blue-500 text-white rounded-md p-2 mt-5 group-hover:animate-shake-lr">Learn More</button></a>
            </div>
        {/each}
    </div>
</section>

<section class="bg-[#111827] p-5 flex lg:flex-row-reverse flex-col-reverse" id="contact">
    <div class="flex justify-center w-full">
        <img src="speaking-phn.png" alt="a guy speaking in phone" class="lg:w-full w-3/4 md:min-w-96 max-w-[1300px] min-w-60 hidden sm:block self-center">
    </div>
    <div class="w-full">
        <div class="flex flex-col">
            <p class="xl:text-6xl text-3xl font-bold uppercase self-center m-5">Contact Us</p>
            <div class="m-5 sm:p-5 self-center">
                <table class="w-full">
                    <tbody>
                        <tr>
                            <td class="text-right sm:p-5 m-2 sm:m-0">
                                <i class="ph-light ph-whatsapp-logo xl:text-6xl text-3xl"></i>
                            </td>
                            <td class="text-left sm:p-5 m-2 sm:m-0">
                                <p class="xl:text-5xl text-xl">+91 9876543210</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-right sm:p-5 m-2 sm:m-0">
                                <i class="ph-light ph-envelope-open xl:text-6xl text-3xl"></i>
                            </td>
                            <td class="text-left sm:p-5 m-2 sm:m-0">
                                <p class="xl:text-5xl text-xl">satechstudios@gmail.com</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>