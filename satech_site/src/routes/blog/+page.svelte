<script>
    import * as blogsjson from '$lib/json/blogs.json';
    const Blogs = blogsjson.default;
  </script>
  
  <main class="p-5">
    <h1 class="text-4xl md:text-6xl font-bold text-center mb-10 text-black">Blog</h1>

    
    <section class="flex flex-wrap justify-center gap-5">
      {#each Blogs as blog (blog.id)}
        <a
          href={`/blog/${blog.id}`}
          class="flex flex-col bg-blue-800 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out text-white no-underline max-w-[300px]"
          aria-label={`Read more about ${blog.title}`}
        >
          <div class="p-5">
            <h2 class="text-2xl font-bold mb-2">{blog.title}</h2>
            <p class="text-base text-gray-200">{blog.description}</p>
          </div>
        </a>
      {/each}
    </section>
  </main>
  
  <style>
    main {
      background-color: #f5f5f5; /* Light background for better readability */
    }
    a:hover {
      background-color: #2563eb; /* Darker shade of blue on hover */
    }
  </style>
  