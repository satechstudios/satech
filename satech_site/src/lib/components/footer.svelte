<script>
    import * as contactjson from '$lib/json/contact.json'
    const socialLinks = contactjson.default;
</script>

<footer class="bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <hr class="border-gray-700 sm:mx-auto" />
      <div class="sm:flex sm:items-center sm:justify-between sm:p-5 p-2">
          <span class="text-sm text-gray-400 sm:text-center">&copy <a href="/" class="hover:underline">SAtech Studios</a>. All Rights Reserved.
          </span>
        <div class="flex mt-4 sm:justify-center sm:mt-0 flex-wrap sm:flex-row">
            {#each socialLinks as link}
                <a href={link.href} aria-label={link.ariaLabel} class="text-gray-500 hover:text-white ms-5">
                    <i class={link.iconClass + " w-4 h-4"}></i>
                </a>
            {/each}
        </div>  
    </div>
</footer>
