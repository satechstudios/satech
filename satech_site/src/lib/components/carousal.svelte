<script>
    import { onMount, onDestroy } from "svelte";
  
    // Example items for the carousel cards
    let carouselItems = [
      {
        image: "https://via.placeholder.com/300x200?text=Creative+Designs",
        alt: "Creative Designs",
        title: "Creative Designs",
        description: "Explore unique and innovative designs that bring your ideas to life.",
        href: "/designs",
      },
      {
        image: "https://via.placeholder.com/300x200?text=Innovative+Solutions",
        alt: "Innovative Solutions",
        title: "Innovative Solutions",
        description: "Discover cutting-edge solutions tailored to meet your needs.",
        href: "/solutions",
      },
      {
        image: "https://via.placeholder.com/300x200?text=Seamless+Integrations",
        alt: "Seamless Integrations",
        title: "Seamless Integrations",
        description: "Integrate technology effortlessly with streamlined workflows.",
        href: "/integrations",
      },
      {
        image: "https://via.placeholder.com/300x200?text=Expert+Support",
        alt: "Expert Support",
        title: "Expert Support",
        description: "Count on our dedicated team for expert guidance and support.",
        href: "/support",
      },
    ];
  
    let currentIndex = 0;
    let timer;
  
    // Reactive statement for calculating visible items
    let visibleItemsCount;
    const getVisibleItemsCount = () => {
      if (window.innerWidth >= 1024) return 4; // Large screens
      if (window.innerWidth >= 640) return 2; // Medium screens
      return 1; // Small screens
    };
  
    // Lifecycle hook to update visible items on mount and resize
    onMount(() => {
      visibleItemsCount = getVisibleItemsCount();
      window.addEventListener("resize", updateVisibleItemsCount);
  
      // Start auto-scroll timer
      startAutoScroll();
  
      return () => {
        window.removeEventListener("resize", updateVisibleItemsCount);
        stopAutoScroll();
      };
    });
  
    onDestroy(() => {
      stopAutoScroll();
    });
  
    const updateVisibleItemsCount = () => {
      visibleItemsCount = getVisibleItemsCount();
      updateCarousel();
    };
  
    // Update carousel translation
    const updateCarousel = () => {
      const itemWidth = document.querySelector(".carousel-item")?.offsetWidth || 0;
      const translateX = -(currentIndex * itemWidth);
      document.getElementById("carousel-items").style.transform = `translateX(${translateX}px)`;
    };
  
    // Move to the previous slide
    const prevSlide = () => {
      currentIndex = (currentIndex - visibleItemsCount + carouselItems.length) % carouselItems.length;
      updateCarousel();
    };
  
    // Move to the next slide
    const nextSlide = () => {
      currentIndex = (currentIndex + visibleItemsCount) % carouselItems.length;
      updateCarousel();
    };
  
    // Start auto-scroll with a timer
    const startAutoScroll = () => {
      timer = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    };
  
    // Stop auto-scroll
    const stopAutoScroll = () => {
      if (timer) clearInterval(timer);
    };
  </script>
  
  <div id="carousel" class="relative w-full">
    <!-- Carousel Wrapper -->
    <div class="overflow-hidden">
      <div
        id="carousel-items"
        class="flex transition-transform duration-700 ease-in-out"
      >
        {#each carouselItems as item (item.title)}
          <div class="flex-none w-full sm:w-1/2 lg:w-1/4 p-4 carousel-item">
            <div class="card bg-gray-100 rounded-lg shadow-md p-6 text-center">
              <img src={item.image} alt={item.alt} class="rounded-md mb-4" />
              <h3 class="text-xl font-semibold">{item.title}</h3>
              <p class="text-gray-600">{item.description}</p>
              <a href={item.href} class="text-blue-500 mt-4 block">Learn More</a>
            </div>
          </div>
        {/each}
      </div>
    </div>
  
    <!-- Navigation Buttons -->
    <button
      on:click={() => { stopAutoScroll(); prevSlide(); startAutoScroll(); }}
      class="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 w-10 h-10 justify-center flex bg-gray-800 text-white rounded-full"
      aria-label="Previous Slide"
    >
    <i class="ph-light ph-caret-left"></i>
    </button>
    <button
      on:click={() => { stopAutoScroll(); nextSlide(); startAutoScroll(); }}
      class="absolute top-1/2 right-0 transform w-10 h-10 flex justify-center -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full"
      aria-label="Next Slide"
    >
    <i class="ph-light ph-caret-right"></i>
    </button>
  </div>
  