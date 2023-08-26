import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table("opportunities", (table) => {
    table.boolean("is_viewed").defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table("opportunities", (table) => {
    table.dropColumn("is_viewed");
  });
}
