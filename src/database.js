import knex      from "knex";
import bookshelf from "bookshelf";

var db = null;

export default () => {
  if (db !== null) return db;

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

  try {
    var db_conn = knex({
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

    return db_conn.migrate.latest()
      .then(() => {
        db = require("bookshelf")(db_conn);
        db.plugin("registry");
        return db;
      });
  } catch (e) {
    console.log(e);
  }

  return null;
};

