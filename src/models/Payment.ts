import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./Customer";
import { Rental } from "./Rental";
import { Staff } from "./Staff";

@Entity()
@ObjectType()
export class Payment extends BaseEntity{

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    payment_id: number;

    @Field(() => Number)
    @Column({type: 'smallint'})
    customer_id: number;

    @Field(() => Number)
    @Column({type: 'smallint'})
    staff_id: number;

    @Field(() => Number)
    @Column()
    rental_id: number;

    @Field(() => Number)
    @Column({type: 'numeric'})
    amount: number;

    @Field(() => Date)
    @Column({type: 'timestamp without time zone'})
    payment_date: Date;

    @ManyToOne(() => Customer, customer => customer.payments)
    @JoinColumn([
        {name: 'customer_id', referencedColumnName: 'customer_id'}
    ])
    customer: Customer;

    @ManyToOne(() => Staff, staff => staff.payments)
    @JoinColumn([
        {name: 'staff_id', referencedColumnName: 'staff_id'}
    ])
    staff: Staff;

    @ManyToOne(() => Rental, rental => rental.payments)
    @JoinColumn([
        {name: 'rental_id', referencedColumnName: 'rental_id'}
    ])
    rental: Rental;
}