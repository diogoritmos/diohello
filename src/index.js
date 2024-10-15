import { Hono } from 'hono';

// export default {
// 	async fetch(request, env, ctx) {
// 		let response;
// 		if (request.method === 'OPTIONS') {
// 			response = handleOptions(request);
// 		} else {
// 			// returns Hello + the value of the name query parameter
// 			const url = new URL(request.url);
// 			const name = url.searchParams.get('name') || 'World';

// 			response = new Response(`Hello ${name}!`);
// 		}

// 		return response;
// 	},
// 	async scheduled(controller, env, ctx) {
// 		console.log('Scheduled event triggered');
// 		// Add your scheduled event handling logic here
// 	},
// };

const app = new Hono();

app.get('/hello', (c) => {
	return c.json({ a: 1 });
});

export default app;
