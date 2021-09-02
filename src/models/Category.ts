import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FilmCategory } from "./FilmCategory";

@Entity()
@ObjectType()
export class Category extends BaseEntity{
    
    @Field(() => ID)
    @PrimaryGeneratedColumn({name: 'category_id'})
    category_id: number;
    
    @Field(() => String)
    @Column({length: 25})
    name: string;
    
    @Field(() => Date)
    @Column({type:'timestamp without time zone'})
    last_update: Date;

    @OneToMany(() => FilmCategory, film_category => film_category.category)
    film_categories: FilmCategory[];

}