import {Column, Entity} from "typeorm";
import {BaseModel} from "./base-model";

@Entity()
export class User extends BaseModel {
  @Column() public id!: number;
  @Column() public email!: string;
  @Column() public hashedPassword!: string;
}
