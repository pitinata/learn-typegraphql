import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class FilmActor extends BaseEntity{
    
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    actor_id: number;

    @Field(() => Number)
    @Column({type: 'smallint'})
    film_id: number;

    @Field(() => Date)
    @Column({type: 'timestamp without time zone'})
    last_update: Date;

}