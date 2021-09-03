import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Film } from "./Film";
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

    @Field(() => [Film])
    @ManyToMany(() => Film)
    @JoinTable({name: 'film_category', joinColumn: {
        name: 'category_id',
        referencedColumnName: 'category_id'
    }, inverseJoinColumn: {
        name: 'film_id',
        referencedColumnName: 'film_id'
    }})
    films: Promise<Film[]>;

}