import {User} from "../../src/models/user";


export const Fixtures = {
    User: {
        user1: User.build({
            email: 'test@email.com',
            hashedPassword: 'asdf',
        }),
    },
};
