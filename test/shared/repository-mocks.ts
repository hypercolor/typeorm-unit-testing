import { container } from "tsyringe";
import { RepositoryMock } from "./repository-mock";

export class RepositoryMocks {
    public static getMocks() {
        const sessionRepository = new RepositoryMock();
        const userRepository = new RepositoryMock();
        container.register("SessionRepository", {
            useValue: sessionRepository,
        });
        container.register("UserRepository", {
            useValue: userRepository,
        });

        return {
            sessionRepository,
            userRepository
        };
    }
}
