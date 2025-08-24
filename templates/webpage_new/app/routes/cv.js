import { CV } from '../views/CV.js';

/**
 * @param {{ app: import("fastify").FastifyInstance, db: import("better-sqlite3").Database }}
 */
export const init = async ({ app, db }) => {
	app.get('/cv', async (_, reply) => {
		return reply.render(CV);
	});
};
