<script context="module" lang="ts">
    export function load({ error }) {
      return { status: error.status, message: error.message };
    }
  </script>
  
  <script>
    export let status;
    export let message;
  </script>
  
  <div class="h-screen flex flex-col justify-center"> 
    <div class="text-center text-white">
      <h1>{status} - {message}</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <a href="/" class="font-bold hover:text-blue-700">Go back to homepage</a>
    </div>
  </div>

