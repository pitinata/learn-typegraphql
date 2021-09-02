import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Film } from "./Film";

@Entity()
@ObjectType()
export class Actor extends BaseEntity{

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    actor_id: number;

    @Field(() => String)
    @Column({length: 45})
    first_name: string;

    @Field(() => String)
    @Column({length: 45})
    last_name: string;

    @Field(() => Date)
    @Column({type: 'timestamp without time zone', default: Date.now()})
    last_update: Date;

    @ManyToMany(() => Film)
    @JoinTable({name: 'film_actor', joinColumn: {
        name: 'actor_id',
        referencedColumnName: 'actor_id'
    }, inverseJoinColumn: {
        name: 'film_id',
        referencedColumnName: 'film_id'
    }})
    films: Film[];
}