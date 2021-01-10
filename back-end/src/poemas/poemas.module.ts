import { Module } from '@nestjs/common';
import { PoemasService } from './poemas.service';
import { PoemasResolver } from './poemas.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poema } from './entities/poema.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Poema])],
  providers: [PoemasResolver, PoemasService]
})
export class PoemasModule {}
