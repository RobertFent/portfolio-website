import { PrivacyPolicy } from '../views/PrivacyPolicy.js';

/**
 * @param {{ app: import("fastify").FastifyInstance, db: import("better-sqlite3").Database }}
 */
export const init = async ({ app, db }) => {
	app.get('/privacy_policy', async (_, reply) => {
		return reply.render(PrivacyPolicy);
	});
};
