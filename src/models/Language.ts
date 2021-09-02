import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Film } from "./Film";

@Entity()
@ObjectType()
export class Language extends BaseEntity{

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    language_id: number;
    
    @Field(() => String)
    @Column({length: 20})
    name: string;

    @Field(() => Date)
    @Column({type: 'timestamp without time zone'})
    last_update: Date;

    @OneToMany(() => Film, film => film.language)
    films: Film[];
}