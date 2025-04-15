import {Column, Entity} from "typeorm";
import {BaseModel} from "./base-model";

@Entity()
export class Session extends BaseModel {
  @Column() public id!: number;
  @Column() public userId!: number;
  @Column() public token!: string;
}
