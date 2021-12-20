const pg = require("pg");
const client = new pg.Client({
  connectionString:
    process.env.DATABASE_URL || "postgres://localhost:5432/bugtracker",
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : undefined,
});

module.exports = client;