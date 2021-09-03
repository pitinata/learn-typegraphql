import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";

@Entity()
@ObjectType()
export class FilmCategory extends BaseEntity{

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    film_id: number;

    @Field(() => Number)
    @Column({type: 'smallint'})
    category_id: number;

    @Field(() => Date)
    @Column({type: 'timestamp without time zone'})
    last_update: Date;
    
}