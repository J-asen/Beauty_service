import postgres from "postgres";

const globalForDb = globalThis;

export function getSql() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured.");
  }

  if (!globalForDb.__bookingSql) {
    globalForDb.__bookingSql = postgres(process.env.DATABASE_URL, {
      max: 3,
      idle_timeout: 20,
      connect_timeout: 10,
      ssl: "require",
    });
  }

  return globalForDb.__bookingSql;
}
