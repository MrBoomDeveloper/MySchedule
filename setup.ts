import database from "@/database";

database.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    )
`);

database.exec(`
    CREATE TABLE IF NOT EXISTS schedules (
        id TEXT PRIMARY KEY,
        owner TEXT NOT NULL,
        name TEXT NOT NULL,
        public BOOLEAN NOT NULL
    )
`);

database.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        schedule TEXT NOT NULL,
        name TEXT,
        time_start TIMESTAMP,
        time_end TIMESTAMP
    )
`);

console.log("Created database successfully!")