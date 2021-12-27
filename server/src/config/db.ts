const dbName = process.env.DB_NAME;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;

const readyDBUrl = process.env.DB_URL;

export const DB_URL = readyDBUrl || `mongodb://${dbHost}:${dbPort}/${dbName}`;

export const DB_CONNECTION_RETRY_TIMEOUT =
  parseInt(process.env.DB_CONNECTION_RETRY_TIMEOUT || '') || 500;

export const DB_CONNECTION_RETRY_COUNT =
  parseInt(process.env.DB_CONNECTION_RETRY_COUNT || '') || 10;
