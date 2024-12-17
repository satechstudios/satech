import adapter from '@sveltejs/adapter-vercel';

export default {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		})
	}
};