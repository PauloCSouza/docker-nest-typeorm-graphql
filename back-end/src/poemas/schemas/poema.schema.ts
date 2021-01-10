import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class PoemaSchema {

  @Field(() => String, { description: 'E-mail' })
  email: string;

  @Field(() => String, { description: 'Poema' })
  poema: string;
  
}
