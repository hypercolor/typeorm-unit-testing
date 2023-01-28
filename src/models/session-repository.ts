import {DatabaseManager} from "../database/database-manager";
import {Session} from "./session";

export const SessionRepository = DatabaseManager.dataSource.getRepository(Session);
export type ISessionRepository = typeof SessionRepository;
