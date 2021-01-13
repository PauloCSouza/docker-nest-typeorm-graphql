import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { PoemasService } from './poemas.service';
import { PoemaSchema } from './schemas/poema.schema';
import { CreatePoemaInput } from './dto/create-poema.input';
import { UpdatePoemaInput } from './dto/update-poema.input';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver(() => PoemaSchema)
export class PoemasResolver {
  constructor(private readonly poemasService: PoemasService) {}

  @Mutation(() => PoemaSchema)
  async createPoema(@Args('createPoemaInput') createPoemaInput: CreatePoemaInput): Promise<PoemaSchema> {
    const response = await this.poemasService.create(createPoemaInput);
    pubSub.publish('poemaAdded', { poemaAdded: createPoemaInput });
    return response;
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

  @Subscription(() => PoemaSchema)
  poemaAdded() {
    return pubSub.asyncIterator('poemaAdded');
  }

}
