<script>
    let socialLinks = [
    { href: "mailto:satechstudios@gmail.com", ariaLabel: "Email", iconClass: "ph-fill ph-envelope-open" },
    { href: "https://x.com/Satechstudios?t=w_vodu5TGP5CWeuR-8JCMw&s=09", ariaLabel: "X", iconClass: "ph-fill ph-x-logo" },
    { href: "https://www.facebook.com/share/aXFzouEqmaL6oif4/", ariaLabel: "Facebook", iconClass: "ph-fill ph-facebook-logo" },
    { href: "https://www.instagram.com/satechstudios", ariaLabel: "Instagram", iconClass: "ph-fill ph-instagram-logo" },
    { href: "https://www.linkedin.com/company/satech-studios/", ariaLabel: "LinkedIn", iconClass: "ph-fill ph-linkedin-logo" },
    { href: "https://youtube.com/@satechstudios", ariaLabel: "YouTube", iconClass: "ph-fill ph-youtube-logo" },
    { href: "https://www.behance.net/satechstudios", ariaLabel: "Behance", iconClass: "ph-fill ph-behance-logo" },
    { href: "https://t.me/SAtechstudios", ariaLabel: "Telegram", iconClass: "ph-fill ph-telegram-logo" } 
  ];
</script>

<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <hr class="border-gray-200 sm:mx-auto dark:border-gray-700" />
      <div class="sm:flex sm:items-center sm:justify-between sm:p-5 p-2">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy <a href="/" class="hover:underline">SAtech Studios</a>. All Rights Reserved.
          </span>
        <div class="flex mt-4 sm:justify-center sm:mt-0 flex-wrap sm:flex-row">
            {#each socialLinks as link}
                <a href={link.href} aria-label={link.ariaLabel} class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <i class={link.iconClass + " w-4 h-4"}></i>
                </a>
            {/each}
        </div>  
    </div>
</footer>
