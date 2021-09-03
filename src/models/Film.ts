import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Actor } from "./Actor";
import { Category } from "./Category";
import { Inventory } from "./Inventory";
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

    @Field(() => [Actor])
    @ManyToMany(() => Actor)
    @JoinTable({name: 'film_actor', joinColumn: {
        name: 'film_id',
        referencedColumnName: 'film_id'
    }, inverseJoinColumn: {
        name: 'actor_id',
        referencedColumnName: 'actor_id'
    }})
    actors: Promise<Actor[]>;

    @Field(() => [Language])
    @ManyToOne(() => Language, language => language.films)
    @JoinColumn([
        {name: 'language_id', referencedColumnName: 'language_id'}
    ])
    language: Promise<Language>;

    @Field(() => [Inventory])
    @OneToMany(() => Inventory, inventory => inventory.film)
    @JoinColumn({
        name: "film_id", referencedColumnName: "film_id"
    })
    inventories: Promise<Inventory[]>;

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