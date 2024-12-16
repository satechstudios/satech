
<script>
  import { onMount } from 'svelte';

  // Access environment variables prefixed with VITE_
  const scriptURL = import.meta.env.VITE_SCRIPT_URL;
  const accessKey = import.meta.env.VITE_ACCESS_KEY;

  let form;
  let status = "";

  onMount(() => {
    form.addEventListener('submit', handleSubmit);
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => alert("Thank you! Form is submitted"))
      .then(() => { window.location.reload(); })
      .catch(error => console.error('Error!', error.message));
  }

  const handleSubmit2 = async data => {
    status = 'Submitting...';
    const formData = new FormData(data.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      status = result.message || "Success";
    }
  };
</script>

<div class="flex flex-col items-center md:p-5 pt-5">
  <h2 class="text-4xl font-bold text-center">Follow Us</h2>
  <div class="flex flex-col md:w-max-xl justify-center w-full">
    <div class="flex flex-wrap justify-center">
        <!-- Social Media Links -->
        <a href="mailto:satechstudios@gmail.com" aria-label="Email" 
           class="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 hover:text-white text-black hover:bg-black m-5">
            <i class="ph-fill ph-envelope-open text-2xl"></i>
        </a>
        <a href="https://www.x.com" aria-label="X" 
           class="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 hover:text-white text-black hover:bg-black m-5">
            <i class="ph-fill ph-x-logo text-2xl"></i>
        </a>
        <a href="https://www.facebook.com/share/aXFzouEqmaL6oif4/" aria-label="Facebook" 
           class="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 hover:text-white text-black hover:bg-black m-5">
            <i class="ph-fill ph-facebook-logo text-2xl"></i>
        </a>
        <a href="https://www.instagram.com/satechstudios" aria-label="Instagram" 
           class="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 hover:text-white text-black hover:bg-black m-5">
            <i class="ph-fill ph-instagram-logo text-2xl"></i>
        </a>
        <a href="https://discord.gg/4CAmk9Rh" aria-label="Discord" 
           class="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 hover:text-white text-black hover:bg-black m-5">
            <i class="ph-fill ph-discord-logo text-2xl"></i>
        </a>
        <a href="https://www.linkedin.com/satechstudios" aria-label="LinkedIn" 
           class="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 hover:text-white text-black hover:bg-black m-5">
            <i class="ph-fill ph-linkedin-logo text-2xl"></i>
        </a>
        <a href="https://youtube.com/@satechstudios" aria-label="YouTube" 
           class="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 hover:text-white text-black hover:bg-black m-5">
            <i class="ph-fill ph-youtube-logo text-2xl"></i>
        </a>
        <a href="https://www.behance.net/satechstudios" aria-label="Behance" 
           class="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 hover:text-white text-black hover:bg-black m-5">
            <i class="ph-fill ph-behance-logo text-2xl"></i>
        </a>
    </div>
  </div>
</div>

<div class="flex md:p-5 pt-5 justify-center">
  <form bind:this={form} class="lg:w-1/2 w-[400px] p-3" method="post" action="" name="contact-form" on:submit|preventDefault={handleSubmit2}>
    <input type="hidden" name="access_key" value={accessKey}>
    <div class="mb-5">
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
      <input name="name" type="text" id="name" placeholder="John Doe" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input name="email" type="email" id="email" placeholder="john.doe@email.com" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <div class="mb-5">
      <label for="phnno" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone number</label>
      <input name="phnno" type="tel" id="phnno" placeholder="123-456-7890" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <div class="mb-5">
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
      <textarea name="message" id="message" placeholder="Enter your message" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </form>
</div>
<div>{status}</div>