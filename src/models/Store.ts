import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./Address";
import { Customer } from "./Customer";
import { Staff } from "./Staff";

@Entity()
@ObjectType()
export class Store extends BaseEntity{

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    store_id: number;

    @Field(() => Number)
    @Column({type: 'smallint'})
    manager_staff_id: number;

    @Field(() => Number)
    @Column({type: 'smallint'})
    address_id: number;

    @Field(() => Date)
    @Column({type: 'timestamp without time zone'})
    last_update: Date;

    @OneToOne(() => Staff)
    @JoinColumn({
        name: 'manager_staff_id', referencedColumnName: 'staff_id'
    })
    manager: Staff;

    @OneToMany(() => Staff, staff => staff.store)
    staffs: Staff[];

    @OneToOne(() => Address)
    @JoinColumn({
        name: 'address_id', referencedColumnName: 'address_id'
    })
    address: Address;

    @OneToMany(() => Customer, customer => customer.store)
    customers: Customer[];
}