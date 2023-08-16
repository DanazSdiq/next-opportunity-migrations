import path from "path";
import { config } from "./config";

export default {
  client: "postgresql",
  connection: config.PG_CONNECTION_STRING,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: path.resolve(__dirname, "migrations_opportunities"),
  },
};
