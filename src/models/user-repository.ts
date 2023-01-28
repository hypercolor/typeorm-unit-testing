import {User} from "./user";
import {DatabaseManager} from "../database/database-manager";

export const UserRepository = DatabaseManager.dataSource.getRepository(User);
export type IUserRepository = typeof UserRepository;
