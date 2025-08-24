import { sql } from '../../core/modules/database/database.js';
import { Root } from '../views/Root.js';

/**
 * @param {{ app: import("fastify").FastifyInstance, db: import("better-sqlite3").Database }}
 */
export const init = async ({ app, db }) => {
	app.get('/', async (_, reply) => {
		// initially load contact entries
		const contactEntries = db
			.prepare(
				sql`SELECT * FROM contact_entries ORDER BY timestamp DESC LIMIT 5 `
			)
			.all();
		return reply.render(Root, { entries: contactEntries });
	});
};
