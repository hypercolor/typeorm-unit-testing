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

  })

})
