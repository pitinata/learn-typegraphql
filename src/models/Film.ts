import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
import { Language } from "./Language";
import { Store } from "./Store";

@Entity()
@ObjectType()
export class Film extends BaseEntity{

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    film_id: number;

    @Field(() => String)
    @Column()
    title: string;

    @Field(() => String)
    @Column({type: 'text'})
    description: string;

    @Field(() => String)
    @Column()
    release_year: String;

    @Field(() => Number)
    @Column({type: 'smallint'})
    language_id: number;

    @Field(() => Number)
    @Column({type: 'smallint'})
    rental_duration: number;

    @Field(() => Number)
    @Column({type: 'numeric'})
    rental_rate: number;

    @Field(() => Number)
    @Column({type: 'smallint'})
    length: number;

    @Field(() => Number)
    @Column({type: 'numeric'})
    replacement_cost: number;

    @Field(() => String)
    @Column()
    rating: string;

    @Field(() => Date)
    @Column({type: 'timestamp without time zone'})
    last_update: Date;

    @Field(() => [String])
    @Column({type: 'text', array: true})
    special_features: string[];
    
    @Field(() => String)
    @Column({type: 'tsvector'})
    fulltext: string;

    @ManyToOne(() => Language, language => language.films)
    @JoinColumn([
        {name: 'language_id', referencedColumnName: 'language_id'}
    ])
    language: Language;

    @ManyToMany(() => Store)
    @JoinTable({name: 'inventory', joinColumn: {
        name: 'film_id',
        referencedColumnName: 'film_id'
    }, inverseJoinColumn: {
        name: 'store_id',
        referencedColumnName: 'store_id'
    }})
    store: Store;

    @Field(() => [Category])
    @ManyToMany(() => Category)
    @JoinTable({name: 'film_category', joinColumn: {
        name: 'film_id',
        referencedColumnName: 'film_id'
    }, inverseJoinColumn: {
        name: 'category_id',
        referencedColumnName: 'category_id'
    }})
    categories: Promise<Category[]>;

}