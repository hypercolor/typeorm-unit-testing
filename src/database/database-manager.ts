import { DataSource } from "typeorm";
import {container} from "tsyringe";
import {UserRepository} from "../models/user-repository";
import {SessionRepository} from "../models/session-repository";

export class DatabaseManager {
  public static get dataSource() {
    if (!this._dataSource) {
      throw new Error("DataSource not inititalized");
    }
    return this._dataSource;
  }

  private static _dataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    database: process.env.DATABASE_URL!.split("/").pop(),
    ssl: {
      rejectUnauthorized: false,
    },
    synchronize: false,
  });

  public static async connect() {
    this._dataSource = await this._dataSource.initialize();

    container.register('UserRepository', { useValue: UserRepository });
    container.register('SessionRepository', { useValue: SessionRepository });
  }
}
