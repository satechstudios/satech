<script>
  import "./styles.css";
  import Carousal from "$lib/components/carousal.svelte";
  import Teammem from "$lib/components/teammem.svelte";

  let items = [
    {
      image: "/portfolio.jpg",
      alt: "Portfolio project showcase",
      title: "Portfolio",
      description: "Explore our innovative projects and creative designs reflecting passion for technology and impactful solutions.",
      href: "/portfolio",
    },
    {
      image: "/course.jpg",
      alt: "Learning resources image",
      title: "Courses",
      description: "Embark on a journey to master multiple disciplines seamlessly, with expert-guided courses for well-rounded expertise.",
      href: "/courses",
    },
    {
      image: "/team.jpg",
      alt: "Our dedicated team",
      title: "Team",
      description: "Meet the talented team delivering exceptional results and creating memorable experiences for every project.",
      href: "/team",
    },
  ];
</script>

<svelte:head>
<title>Home | SaTech Studios</title>
<meta name="description" content="From vision to reality, SaTech Studios specializes in AR/VR technologies, delivering exceptional courses, projects, and services." />
<meta name="keywords" content="AR/VR, courses, portfolio, team, services, contact SaTech Studios" />
<meta name="author" content="SaTech Studios" />
</svelte:head>

<div id="top-section" class="text-white relative bg-cover bg-center" style="background-image: url('main_img.png');">
  <div class="absolute inset-0 bg-black opacity-85 z-0"></div>
  <div class="relative z-10 h-full w-full flex flex-col justify-center items-center text-center">
    <h1 class="md:text-6xl text-3xl font-bold uppercase my-5 py-5">
      From Vision to Reality, Beyond Imagination.
    </h1>
    <p class="md:text-xl text-md sm:w-4/6 my-3">
      We are a talented and passionate team turning your wildest dreams into reality using AR/VR technologies.
    </p>
    <a href="/contact" aria-label="Contact Us">
      <button class="w-40 bg-blue-800 text-xl hover:bg-blue-600 hover:-translate-y-1 hover:scale-110 p-3 rounded-xl m-5">
        Get Started
      </button>
    </a>
  </div>
</div>

<div class="bg-[#111827] flex lg:flex-row flex-col-reverse p-5" id="about">
  <div class="flex w-full justify-center">
    <img src="women-working.png" alt="Woman working on a project" class="lg:w-full md:min-w-96 sm:min-w-60 w-40 self-center">
  </div>
  <div class="max-w-screen-xl mx-auto sm:p-5 self-center">
    <h2 class="text-center md:text-4xl text-2xl uppercase font-bold p-5 m-5 text-blue-400">About Us</h2>
    <p class="sm:text-center md:text-xl text-md sm:p-5 sm:m-5 my-3 text-justify">
      We specialize in offering courses covering AR/VR, Photoshop, After Effects, UI/UX, 3D modeling, gaming, and more. 
      Additionally, our experienced and creative freelance team delivers stunning outputs meeting modern expectations.
    </p>
  </div>
</div>

<section class="flex flex-col" id="services">
  <h2 class="sm:text-4xl text-2xl font-bold self-center m-5 p-5">Services</h2>
  <div class="flex flex-col md:flex-row justify-center">
    {#each items as item}
      <div class="bg-white sm:w-80 w-54 flex flex-col sm:m-5 m-3 rounded-md self-center hover:-translate-y-5 group">
        <img src={item.image} alt={item.alt} class="rounded-t-md" />
        <div class="p-5">
          <h3 class="text-2xl font-bold text-blue-500">{item.title}</h3>
          <p class="text-black text-lg">{item.description}</p>
          <a href={item.href} aria-label="Learn more about {item.title}">
            <button class="bg-blue-500 text-white rounded-md p-2 mt-5 group-hover:animate-shake-lr">
              Learn More
            </button>
          </a>
        </div>
      </div>
    {/each}
  </div>
</section>

<section id="previous" class="sm:p-5 bg-[#111827]">
  <h2 class="md:text-4xl text-2xl text-center font-bold m-5">Our Speciality</h2>
  <Carousal />
</section>

<section class="p-5 flex lg:flex-row-reverse flex-col-reverse" id="contact">
  <div class="flex justify-center w-full">
    <img src="speaking-phn.png" alt="Man speaking on a phone" class="lg:w-full w-3/4 md:min-w-96 max-w-[1300px] min-w-60 hidden sm:block self-center">
  </div>
  <div class="w-full">
    <div class="flex flex-col">
      <h2 class="xl:text-4xl text-2xl font-bold uppercase self-center m-5">Contact Us</h2>
      <div class="m-5 sm:p-5 self-center">
        <table class="w-full">
          <tbody>
            <tr>
              <td class="text-right sm:p-5 m-2 sm:m-0">
                <i class="ph-light ph-whatsapp-logo xl:text-6xl text-3xl"></i>
              </td>
              <td class="text-left sm:p-5 m-2 sm:m-0">
                <p class="xl:text-3xl sm:text-xl text-sm">+91 75581 97152</p>
              </td>
            </tr>
            <tr>
              <td class="text-right sm:p-5 m-2 sm:m-0">
                <i class="ph-light ph-envelope-open xl:text-6xl text-3xl"></i>
              </td>
              <td class="text-left sm:p-5 m-2 sm:m-0">
                <p class="xl:text-3xl sm:text-xl text-sm">satechstudios@gmail.com</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-center w-full">
          <a href="/contact" aria-label="Navigate to contact page">
            <button class="relative inline-block px-5 py-3 rounded-xl text-base font-bold text-white border-4 border-[rgb(252,70,100)] overflow-hidden group">
              Contact Us
              <span class="absolute inset-0 bg-[rgb(252,70,100)] -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
