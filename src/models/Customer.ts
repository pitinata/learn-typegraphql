import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./Address";
import { Payment } from "./Payment";
import { Store } from "./Store";

@Entity()
@ObjectType()
export class Customer extends BaseEntity{

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    customer_id: number;
    
    @Column({type: 'smallint'})
    store_id: number;

    @Field(() => String)
    @Column({length: 45})
    first_name: string;

    @Field(() => String)
    @Column({length: 45})
    last_name: string;

    @Field(() => String)
    @Column({length: 50})
    email: string;

    @Column({type: 'smallint'})
    address_id: number;

    @Field(() => Boolean)
    @Column()
    activebool: boolean;

    @Field(() => Date)
    @Column()
    create_date: Date;

    @Field(() => Date)
    @Column({type: 'timestamp without time zone'})
    last_update: Date;

    @Field(() => Number)
    @Column()
    active: number;
    
    @Field(() => Store)
    @ManyToOne(() => Store, store => store.customers, {
        eager: true
    })
    @JoinColumn({
        name: "store_id", referencedColumnName: "store_id"
    })
    store: Store;

    @Field(() => Address)
    @OneToOne(() => Address, {
        eager: true
    })
    @JoinColumn({
        name: 'address_id', referencedColumnName: 'address_id'
    })
    address: Address;

    @Field(() => Payment)
    @OneToMany(() => Payment, payment => payment.customer)
    payments: Promise<Payment[]>;
}