<script>
    import "./styles.css"
    import Carousal from "$lib/components/carousal.svelte";

let items = [
  {
    image: "/portfolio.jpg",
    alt: "Portfolio image",
    title: "Portfolio",
    description: "Welcome to my portfolio, a showcase of innovative projects and creative designs. Dive into a collection that reflects my passion for technology, design, and impactful solutions.",
    href: "/portfolio",
  },
  {
    image: "/course.jpg",
    alt: "Course image",
    title: "Courses",
    description: "Combine the power of multiple disciplines into one seamless learning journey. From concept to completion, these courses integrate everything for well-rounded expertise.",
    href: "/courses",
  },
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
      <a href="/contact" class="self-center">
          <button class="w-40 bg-blue-800 text-xl hover:bg-blue-600 hover:-translate-y-1 hover:scale-110 p-3 rounded-xl m-5">Get Started</button>
      </a>
    </div>
  </div>
  
<div class="bg-[#111827] flex lg:flex-row flex-col-reverse p-5" id="about">
    <div class="flex w-full justify-center">
        <img src="women-working.png" alt="woman working" class="lg:w-full md:min-w-96 sm:min-w-60 w-40 self-center">
    </div>
    <div class="max-w-screen-xl mx-auto sm:p-5 self-center">
        <p class="text-center md:text-6xl text-3xl uppercase font-bold p-5 m-5 text-blue-400">About Us</p>
        <p class="sm:text-center md:text-xl text-md sm:p-5 sm:m-5 my-3 text-justify">We specialize in offering courses in the dynamic field of design, covering domains like AR/VR, Photoshop, After Effects, Premiere Pro, UI/UX, 3D modeling, gaming, and more. Additionally, we provide professional freelance services with a team of experienced and creative individuals dedicated to delivering stunning outputs that meet the expectations of the modern generation.</p>
    </div>
</div>

<section class="flex flex-col" id="services">
    <p class="sm:text-6xl text-3xl font-bold self-center m-5 p-5">Services</p>
    <div class="flex flex-col md:flex-row justify-center">
        {#each items as item}
            <div class="bg-white sm:w-80 w-54 flex flex-col sm:m-5 m-3 rounded-md self-center hover:-translate-y-5 group">
                <img src={item.image} alt={item.alt} class="rounded-t-md"/>
                <div class="p-5">
                    <p class="text-2xl font-bold text-blue-500">{item.title}</p>
                    <p class="text-black text-lg">{item.description}</p>
                    <a href="{item.href}" class="self-center w-1/2"><button class="bg-blue-500 text-white rounded-md p-2 mt-5 group-hover:animate-shake-lr">Learn More</button></a>
                </div>
            </div>
        {/each}
    </div>
</section>

<section id="team-mem">

</section>

<section id="previous" class="m-5">
    <h2 class="md:text-6xl text-3xl text-center font-bold m-5">Our events</h2>
    <Carousal />
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
                                <p class="xl:text-5xl sm:text-xl text-sm">+91 7708536320</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-right sm:p-5 m-2 sm:m-0">
                                <i class="ph-light ph-envelope-open xl:text-6xl text-3xl"></i>
                            </td>
                            <td class="text-left sm:p-5 m-2 sm:m-0">
                                <p class="xl:text-5xl sm:text-xl text-sm">satechstudios@gmail.com</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex justify-center w-full">
                    <a href="/contact" class="relative inline-block px-5 py-3 rounded-xl text-base font-bold text-white border-4 border-[rgb(252,70,100)] cursor-pointer overflow-hidden group z-10">Contact Us
                        <span class="absolute inset-0 bg-[rgb(252,70,100)] -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 -z-10 "></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .card {
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .card:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  </style>
  