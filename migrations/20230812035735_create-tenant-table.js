/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tenant', table =>{
    table.increments('id').primary(),
    table.string('name',50),
    table.date('move_in_date'),  
    table.text('schedule_visit'),
    table.text('amenities'),
    table.string("propertyName"),
    table.text("address"),
    table.integer("rentamount"),
    table.date("rentDate"),
    table.text("tenant_members"),
    table.string("lock_in_period"),
    table.integer("deposit"),
    table.integer("due_payment"),
    table.date("duedate"),
    table.integer("rent_received")
})
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('tenant');
};
