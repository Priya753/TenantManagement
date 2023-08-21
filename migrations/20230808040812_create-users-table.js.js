/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', table =>{
    table.increments('id').primary(),
    table.string('name',50),
    table.integer('age'),
    table.enum('gender',['male',"female", "other"]),
    table.string('email').unique(),
    table.string('phoneNo').unique(),
    table.string('password').unique(),  
    table.string('occupation'),
    table.integer('status').defaultTo(1).comment('active:1, inactive :2'),
    table.integer('role').comment("['admin':1,'tenant':2]");
});
}

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
       