import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./Address";
import { Payment } from "./Payment";
import { Store } from "./Store";

@Entity()
@ObjectType()
export class Staff extends BaseEntity{
    
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    staff_id: number;
    
    @Field(() => String)
    @Column({length: 45})
    first_name: string;

    @Field(() => String)
    @Column({length: 45})
    last_name: string;

    @Field(() => Number)
    @Column({type: 'smallint'})
    address_id: number;

    @Field(() => String)
    @Column({length: 50})
    email: string;

    @Field(() => Number)
    @Column({type: 'smallint'})
    store_id: number;

    @Field(() => Boolean)
    @Column()
    active: boolean;

    @Field(() => String)
    @Column({length: 16})
    username: string;

    @Field(() => String)
    @Column({length: 40})
    password: string;

    @Field(() => Date)
    @Column({type: 'timestamp without time zone'})
    last_update: Date;

    @Field(() => Buffer)
    @Column({type: 'bytea'})
    picture: Buffer;

    @OneToOne(() => Address)
    @JoinColumn({
        name: 'address_id', referencedColumnName: 'address_id'
    })
    address: Address;

    @ManyToOne(() => Store, store => store.staffs)
    @JoinColumn([
        {name: 'store_id', referencedColumnName: 'store_id'}
    ])
    store: Store;

    @OneToMany(() => Payment, payment => payment.staff)
    payments: Payment[];
}