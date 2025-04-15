import {container} from "tsyringe";
import {LoginController} from "../src/controllers/login-controller";
import {LoginService} from "../src/services/login-service";

describe('Login', () => {

  describe('Login Controller', () => {

    it('should inject dependencies', () => {
      container.resolve(LoginController);
    })

  })

  describe('Login Service', () => {

    it('should inject dependencies', () => {
      container.resolve(LoginService);
    })

    // it('should not login user for incorrect password', async () => {
    //   const mocks = RepositoryMocks.getMocks();
    //   const loginService = container.resolve(LoginService);
    //   mocks.userRepository.findOne_addFixture(
    //     Fixtures.User.user1
    //   );
    //   await expect(await loginService.loginUser(
    //     Fixtures.User.user1.email, 'wrong password'
    //   )).rejects.toThrow();
    //   expect(mocks.userRepository.findOne.mock.calls.length).toBe(1);
    //   expect(mocks.sessionRepository.save.mock.calls.length).toBe(0);
    // })

  })

})
