import { CreatePoemaInput } from './create-poema.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdatePoemaInput extends PartialType(CreatePoemaInput) {

  @Field(() => String, { description: 'E-mail' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(() => String, { description: 'Poema' })
  @IsNotEmpty()
  poema: string;

}
