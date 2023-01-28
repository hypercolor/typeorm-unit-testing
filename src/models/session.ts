import {Column, Entity} from "typeorm";

@Entity()
export class Session {
  @Column() public id!: number;
  @Column() public userId!: number;
  @Column() public token!: string;
}
