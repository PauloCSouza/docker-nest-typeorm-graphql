import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PoemasService } from './poemas.service';
import { PoemaSchema } from './schemas/poema.schema';
import { CreatePoemaInput } from './dto/create-poema.input';
import { UpdatePoemaInput } from './dto/update-poema.input';

@Resolver(() => PoemaSchema)
export class PoemasResolver {
  constructor(private readonly poemasService: PoemasService) {}

  @Mutation(() => PoemaSchema)
  async createPoema(@Args('createPoemaInput') createPoemaInput: CreatePoemaInput): Promise<PoemaSchema> {
    return await this.poemasService.create(createPoemaInput);
  }

  @Query(() => [PoemaSchema], { name: 'poemas' })
  async findAll(): Promise<PoemaSchema[]> {
    return await this.poemasService.findAll();
  }

  @Query(() => PoemaSchema, { name: 'poema' })
  async findOne(@Args('email', { type: () => String }) email: string): Promise<PoemaSchema> {
    return await this.poemasService.findOne(email);
  }

  @Mutation(() => PoemaSchema)
  async updatePoema(@Args('updatePoemaInput') updatePoemaInput: UpdatePoemaInput): Promise<PoemaSchema> {
    return await this.poemasService.update(updatePoemaInput);
  }

  @Mutation(() => PoemaSchema)
  async removePoema(@Args('email', { type: () => String }) email: string): Promise<PoemaSchema> {
    return await this.poemasService.remove(email);
  }
}
