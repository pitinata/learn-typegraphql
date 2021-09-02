import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Inventory extends BaseEntity{
    
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    inventory_id: number;

    @Field(() => Number)
    @Column({type: 'smallint'})
    film_id: number;

    @Field(() => Number)
    @Column({type: 'smallint'})
    store_id: number;

    @Column({type: 'timestamp without time zone'})
    last_update: Date;

    
}