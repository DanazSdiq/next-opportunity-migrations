import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  const doesTableExist = await knex.schema.hasTable("organizations");

  if (!doesTableExist) {
    return knex.schema.createTable("organizations", (table) => {
      table.uuid("id").primary();
      table.text("name").unique().notNullable();
      table.text("main_url").notNullable();

      table.date("created_at").notNullable();
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("organizations");
}
