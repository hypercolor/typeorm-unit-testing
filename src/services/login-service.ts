import {inject, injectable} from "tsyringe";
import {Session} from "../models/session";
import {ISessionRepository, SessionRepository} from "../models/session-repository";
import {IUserRepository, UserRepository} from "../models/user-repository";
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

@injectable()
export class LoginService {

  constructor(
    @inject("SessionRepository") private sessionRepository: ISessionRepository,
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  public async loginUser(email: string, passwordAttempt: string) {
    const user = await this.userRepository.findOne({where: {email}})
    if (!user) {
      throw new Error('User not found');
    }
    if (!bcrypt.compareSync(user.hashedPassword, passwordAttempt)) {
      throw new Error('Password mismatch');
    }
    const session = new Session();
    session.userId = user.id;
    session.token = crypto.randomBytes(48).toString('hex');
    await this.sessionRepository.save(session);
    return session;
  }
}
