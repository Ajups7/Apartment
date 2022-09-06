/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("reviews", (table) => {
    table.increments("id").primary();
    table.string("location").notNullable();
    table.text("description").notNullable();
    table.integer("user_id");
    table.enum("type", ["landlord", "environment", "amenity"]).notNullable();
    table.text("uploads").nullable();
    table.integer("upvote").defaultTo(0);

    table.foreign("user_id").references("id").inTable("users");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropSchemaIfExists("reviews");
  
};
