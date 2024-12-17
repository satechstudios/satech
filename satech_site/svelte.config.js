import adapter from '@sveltejs/adapter-vercel';

export default {
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ status, path, referrer }) => {
				// Ignore all 404 errors during prerendering
				if (status === 404) {
					console.warn(`Ignoring 404 error for ${path} (linked from ${referrer || 'unknown'})`);
					return;
				}

				// Throw for other types of errors
				throw new Error(`Unhandled error at ${path}`);
			}
		}
	}
};
