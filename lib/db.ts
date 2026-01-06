import mysql from 'mysql2/promise';

// Create a connection pool for TiDB
let pool: mysql.Pool | null = null;

export function getDbPool(): mysql.Pool {
  if (!pool) {
    // Support multiple environment variable naming conventions
    const host = process.env.TIDB_HOST || process.env.DB_HOST || process.env.DATABASE_HOST || process.env.MYSQL_HOST;
    const port = Number(process.env.TIDB_PORT || process.env.DB_PORT || process.env.DATABASE_PORT || process.env.MYSQL_PORT || 4000);
    const user = process.env.TIDB_USER || process.env.DB_USER || process.env.DATABASE_USER || process.env.MYSQL_USER;
    const password = process.env.TIDB_PASSWORD || process.env.DB_PASSWORD || process.env.DATABASE_PASSWORD || process.env.MYSQL_PASSWORD;
    const database = process.env.TIDB_DATABASE || process.env.DB_NAME || process.env.DATABASE_NAME || process.env.MYSQL_DATABASE;
    const ssl = process.env.TIDB_SSL === 'true' || process.env.DB_SSL === 'true' || process.env.DATABASE_SSL === 'true' || process.env.MYSQL_SSL === 'true';

    if (!host || !user || !password || !database) {
      throw new Error('Database credentials are missing. Please check your .env file for database connection settings.');
    }

    pool = mysql.createPool({
      host,
      port,
      user,
      password,
      database,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      ssl: ssl ? {} : undefined,
    });
  }
  return pool;
}

// Helper function to execute queries
export async function query<T = unknown>(
  sql: string,
  params?: unknown[]
): Promise<T[]> {
  const connection = getDbPool();
  const [rows] = await connection.execute(sql, params);
  return rows as T[];
}

