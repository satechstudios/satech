/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    try {
        const response = await resolve(event);
        return response;
    } catch (error) {
        if (error.status === 404) {
            // Log or handle the error here
            console.error('Page not found:', error.path);

            return new Response('Custom 404 page content here', { status: 404 });
        }

        // Re-throw other errors
        throw error;
    }
}
