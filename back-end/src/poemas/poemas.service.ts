import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validateOrReject } from 'class-validator';
import { MongoRepository } from 'typeorm';
import { transform } from 'typescript';
import { CreatePoemaInput } from './dto/create-poema.input';
import { UpdatePoemaInput } from './dto/update-poema.input';
import { Poema } from './entities/poema.entity';

@Injectable()
export class PoemasService {
  constructor(@InjectRepository(Poema) private poemaRepository: MongoRepository<Poema>) {}

  async create(createPoemaInput: CreatePoemaInput): Promise<Poema> {
    const createPoema = new Poema();
    Object.assign(createPoema, createPoemaInput);
    await validateOrReject(createPoema);
    return await this.poemaRepository.save(createPoema);
  }

  async findAll(): Promise<Poema[]> {
    return await this.poemaRepository.find();
  }

  async findOne(email: string): Promise<Poema> {
    return await this.poemaRepository.findOne({email});
  }

  async update({email, poema}: UpdatePoemaInput): Promise<Poema> {
    const updatePoema = await this.poemaRepository.findOne({email});
    if (!updatePoema) {
      throw new NotFoundException();
    }
    updatePoema.poema = poema;
    await validateOrReject(updatePoema);
    return await this.poemaRepository.save(updatePoema);
  }

  async remove(email: string): Promise<Poema> {
    const deletePoema = await this.poemaRepository.findOneAndDelete({email});
    if (!deletePoema.value) {
      throw new NotFoundException();
    }
    return deletePoema.value;
  }
}
