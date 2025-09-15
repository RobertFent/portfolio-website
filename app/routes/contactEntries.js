import { ErrorMessage } from '../components/ErrorMessage.js';
import { sql } from '../../core/modules/database/database.js';
import { randomUUID } from 'node:crypto';
import { Contact } from '../components/Contact.js';

/**
 * @param {{ app: import("fastify").FastifyInstance, db: import("better-sqlite3").Database }}
 */
export const init = async ({ app, db }) => {
	app.post('/contact_entries', async (request, reply) => {
		const { content, author } = request.body;
		if (!content || !author) {
			console.log('hx retargeting');
			return reply
				.header('HX-Retarget', '#error-message')
				.render(ErrorMessage, {
					error: 'Content and author required'
				});
		}
		const timestamp = new Date().toISOString();
		db.prepare(
			sql`INSERT INTO contact_entries (id, timestamp, author, content) VALUES (?, ?, ?, ?)`
		).run(randomUUID(), timestamp, author, content);
		return render(request, reply);
	});

	const render = async (_, reply) => {
		return reply.render(Contact, {
			addSuccess: 'true'
		});
	};
};
