<script>
  import { page } from '$app/stores';

  let navItems = [];

  // Update navigation items based on the current page
  $: {
    if ($page.url.pathname === '/') {
      navItems = [
        { name: 'Home', href: '/#top-section' },
        { name: 'About', href: '/#about' },
        { name: 'Services', dropdown: true, items: [
            { name: 'Projects', href: '/projects' },
            { name: 'Courses', href: '/courses' }
          ] 
        },
        { name: 'Contact', href: '/#contact' }
      ];
    } else if ($page.url.pathname === '/projects') {
      navItems = [
        { name: 'Home', href: '/' },
        { name: 'Courses', href: '/courses' },
      ];
    } else if ($page.url.pathname === '/courses') {
      navItems = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' }
      ];
    }
  }

  let dropdownVisible = false;

  const toggleDropdown = (itemName) => {
    // Toggle dropdown visibility for the "Services" item
    if (dropdownVisible === itemName) {
      dropdownVisible = null;
    } else {
      dropdownVisible = itemName;
    }
  };
</script>

<nav class="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <!-- Logo -->
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Satech Studios</span>
    </a>

    <!-- Mobile Menu Button -->
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>

    <!-- Navigation Links -->
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {#each navItems as item}
          <li class="relative">
            {#if item.dropdown}
              <!-- Dropdown Toggle -->
              <button
                on:click={() => toggleDropdown(item.name)}
                class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                {item.name}
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <!-- Dropdown Menu -->
              {#if dropdownVisible === item.name}
                <div
                  class="absolute left-0 z-10 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-400">
                    {#each item.items as subItem}
                      <li>
                        <a
                          href={subItem.href}
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {subItem.name}
                        </a>
                      </li>
                    {/each}
                  </ul>
                </div>
              {/if}
            {/if}
            {#if !item.dropdown}
              <!-- Normal Link -->
              <a
                href={item.href}
                class="block py-2 px-3 rounded md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {item.name}
              </a>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>
