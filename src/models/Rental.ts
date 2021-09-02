import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Payment } from "./Payment";

@Entity()
@ObjectType()
export class Rental extends BaseEntity{
    
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    rental_id: number;

    @Field(() => Date)
    @Column({type: 'timestamp without time zone'})
    rental_date: Date;

    @Field(() => Number)
    @Column()
    inventory_id: number;

    @Field(() => Number)
    @Column({type: 'smallint'})
    customer_id: number;

    @Field(() => Date)
    @Column({type: 'timestamp without time zone'})
    return_date: Date;

    @Field(() => Number)
    @Column({type: 'smallint'})
    staff_id: number;
    
    @Field(() => Date)
    @Column({type: 'timestamp without time zone'})
    last_update: Date;

    @OneToMany(() => Payment, payment => payment.customer)
    payments: Payment[];
}