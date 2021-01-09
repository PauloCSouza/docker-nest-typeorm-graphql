import { Field, ObjectType } from '@nestjs/graphql';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import Poems from './poems.entity';

@ObjectType()
@Entity({ name: 'users' })
export default class User {
    
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    email: string;

    @Field()
    @CreateDateColumn({ name: 'created_at' })
    createAt: Date;

    @Field()
    @UpdateDateColumn({ name: 'updated_at '})
    updatedAt: Date;

    // Associations
    @OneToMany(
        () => Poems,
        poems => poems.userConnection
    )
    poemsConnection: Promise<Poems[]>;
}