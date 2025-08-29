import { sql } from 'drizzle-orm';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable("user", {
	id: text("id").primaryKey(), // Lucia user ID
	provider: text("provider").notNull(), // "telegram" | "email"
	providerUserId: text("provider_user_id").notNull(), // Telegram ID or Email
	username: text("username"), // Telegram username or app username
	firstName: text("first_name"),
	lastName: text("last_name"),
	photoUrl: text("photo_url"), // Telegram profile pic or uploaded one
	passwordHash: text("password_hash"), // only for email users
	age: integer("age"), // optional, you can keep/remove
	createdAt: integer("created_at", { mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
});

export const session = sqliteTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => user.id),
	expiresAt: integer("expires_at", { mode: "timestamp" }).notNull()
});

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;
