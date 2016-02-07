import knex      from "knex";
import bookshelf from "bookshelf";

try {
  var createDBConn = knex({
    client: "pg",
    connection: {
      host: "rrep_postgres_1",
      user: "admin",
      password: "admin",
    }
  });
    
  createDBConn.raw("CREATE DATABASE rrep")
    .then(() => createDBConn.destroy());
} catch(e) {
  console.log("Database Already Exists");
}

var conn = knex({
  client: "pg",
  connection: {
    host: "rrep_postgres_1",
    user: "admin",
    password: "admin",
  },
  pool: {
    min: 0,
    max: 4
  },
  migrations: {
    tableName: "migrations"
  }
});

conn.migrate.latest();

export default require("bookshelf")(conn).plugin("registry");
