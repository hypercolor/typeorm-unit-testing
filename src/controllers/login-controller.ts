import {injectable} from "tsyringe";
import {LoginService} from "../services/login-service";
import express from 'express';

@injectable()
export class LoginController {

  private loginService!: LoginService;

  public async handleRequest(request: express.Request) {
    const email = request.body.email;
    const password = request.body.password;
    const session = await this.loginService.loginUser(email, password);
    return session.token;
  }
}
