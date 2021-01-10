import { IsEmail, IsNotEmpty } from 'class-validator';
import { Column, Entity, ObjectIdColumn, PrimaryColumn, Unique } from 'typeorm';

@Entity()
@Unique(['email'])
export class Poema {

  @ObjectIdColumn()
  _id: string;
  
  @PrimaryColumn()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  
  @Column()
  @IsNotEmpty()
  poema: string;
  
}
