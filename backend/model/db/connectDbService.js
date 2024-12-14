import * as sqlite from "sqlite";
import sql3 from "sqlite3";

export default class DatabaseConnect {
  static mySqlite = sqlite;
  static sql3 = sql3.verbose();
  static async connect() {
    try {
      return this.mySqlite.open({
        filename: `../myDatabase`,
        driver: sql3.Database,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}