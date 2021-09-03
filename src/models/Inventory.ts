import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Film } from "./Film";
import { Store } from "./Store";

@Entity()
@ObjectType()
export class Inventory extends BaseEntity{
    
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    inventory_id: number;
    
    @Column({type: 'smallint'})
    film_id: number;

    @Column({type: 'smallint'})
    store_id: number;

    @Column({type: 'timestamp without time zone'})
    last_update: Date;

    @Field(() => Film)
    @ManyToOne(() => Film, film => film.inventories)
    @JoinColumn({
        name: "film_id", referencedColumnName: "film_id"
    })
    film: Promise<Film>;

    @Field(() => Store)
    @ManyToOne(() => Store, store => store.inventories)
    @JoinColumn({
        name: "store_id", referencedColumnName: "store_id"
    })
    store: Promise<Store>;
    

    
}