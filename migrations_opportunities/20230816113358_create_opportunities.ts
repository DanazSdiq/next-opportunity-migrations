import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  const doesTableExist = await knex.schema.hasTable("opportunities");
  if (!doesTableExist) {
    return knex.schema.createTable("opportunities", (table) => {
      table.uuid("id").primary();
      table.text("title").notNullable();
      table
        .uuid("organization_id")
        .notNullable()
        .references("id")
        .inTable("organizations");
      table.text("description");
      table.specificType("labels", "TEXT[]");
      table.text("commitment");
      table.text("url").unique().notNullable();

      table.date("created_at").notNullable();
      table.date("updated_at").defaultTo(null);
      table.date("deleted_at").defaultTo(null);
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("opportunities");
}
