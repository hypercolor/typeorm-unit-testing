import {Column, Entity} from "typeorm";

@Entity()
export class User {
  @Column() public id!: number;
  @Column() public email!: string;
  @Column() public hashedPassword!: string;
}
