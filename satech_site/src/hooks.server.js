import fs from 'fs';
import path from 'path';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  try {
    // Resolve the request as usual
    const response = await resolve(event);

    // Check if it's a 404 response
    if (response.status === 404) {
      // Load the custom 404.html file
      const errorPagePath = path.resolve('$lib/404.html');
      const errorPage = fs.readFileSync(errorPagePath, 'utf-8');

      return new Response(errorPage, {
        status: 404,
        headers: { 'Content-Type': 'text/html' }
      });
    }

    return response;
  } catch (err) {
    // If something goes wrong, serve the 404.html as a fallback
    const errorPagePath = path.resolve('.$lib/404.html');
    const errorPage = fs.readFileSync(errorPagePath, 'utf-8');

    return new Response(errorPage, {
      status: 500,
      headers: { 'Content-Type': 'text/html' }
    });
  }
}
