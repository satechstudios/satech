
<script>
  import { onMount } from 'svelte';
  const scriptURL = 'https://script.google.com/macros/s/AKfycbw6901srxECceQjqcFRhMleJ8vQEf8vQodMKBfiB-M51gdQ6cllm-dLaQBXTLXIY17-_A/exec';
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

  import * as contactjson from '$lib/json/contact.json'
  const socialLinks = contactjson.default;
</script>

<div class="flex flex-col items-center md:p-5 pt-5">
  <h2 class="text-4xl font-bold text-center">Follow Us</h2>
  <div class="flex flex-col md:w-max-xl justify-center w-full">
    <div class="flex flex-wrap justify-center">
      {#each socialLinks as link}
        <a href={link.href} aria-label={link.ariaLabel} 
           class="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 hover:text-white text-black hover:bg-black m-5">
          <i class={link.iconClass + " text-2xl"}></i>
        </a>
      {/each}
    </div>
  </div>
</div>

<h2 class="text-4xl font-bold text-center">Contact Our Team</h2>
<div class="flex md:p-5 pt-5 justify-center">
  <form bind:this={form} class="lg:w-1/2 w-[400px] p-3" method="post" action="" name="contact-form" on:submit|preventDefault={handleSubmit2}>
    <input type="hidden" name="access_key" value="76803e84-ecab-4c6b-8237-0d7a53f5e345">
    <div class="mb-5">
      <label for="name" class="block mb-2 text-sm font-medium text-white">Your name</label>
      <input name="name" type="text" id="name" placeholder="John Doe" required pattern="[A-Za-z\s]+" title="Name should only contain letters and spaces." class="bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-lg">
    </div>
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
      <input 
      name="email" 
      type="email" 
      id="email" 
      placeholder="john.doe@email.com" 
      required 
      title="Please enter a valid email address." 
      class="bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-lg">    
    </div>
    <div class="mb-5">
      <label for="phnno" class="block mb-2 text-sm font-medium text-white">Your phone number</label>
      <input name="phnno" type="text" inputmode="numeric" id="phnno" placeholder="123-456-7890" required pattern="[0-9]*" title="Phone number should be in the format: 123-456-7890." class="bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-lg">
    </div>
    <div class="mb-5">
      <label for="message" class="block mb-2 text-sm font-medium text-white">Your message</label>
      <textarea name="message" id="message" placeholder="Enter your message" required class="bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-lg"></textarea>
    </div>
    <button type="submit" class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700">Submit</button>
    </form>
</div>
<div>{status}</div>