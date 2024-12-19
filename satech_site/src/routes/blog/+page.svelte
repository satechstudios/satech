<script>
    import * as blogsjson from '$lib/json/blogs.json'
    const Blogs = blogsjson.default;
</script>

<div>
    <h1 class="text-6xl font-bold text-center p-5">Blog</h1>
    <div class="flex flex-wrap justify-center">
        {#each Blogs as blog (blog.id)}
            <a href={`/blog/${blog.id}`} class="flex flex-col bg-blue-800 rounded-lg m-5 max-w-[300px] cursor-pointer transition-transform duration-300 ease-in-out no-underline text-white">
                <div class="m-5">
                    <p class="text-3xl font-medium my-2">{blog.title}</p>
                    <p class="text-lg">{blog.description}</p>
                </div>    
            </a>
        {/each}
    </div>
</div>

