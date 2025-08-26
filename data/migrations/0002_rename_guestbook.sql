CREATE TABLE IF NOT EXISTS contact_entries (
  id TEXT PRIMARY KEY,
  timestamp TEXT NOT NULL,
  author TEXT NOT NULL,
  content TEXT NOT NULL
) STRICT;

DROP TABLE guestbook_entries;
