import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { City } from "./City";

@Entity()
@ObjectType()
export class Address extends BaseEntity{

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    address_id: number;

    @Field(() => String)
    @Column({length: 50})
    address: string;

    @Field(() => String, {nullable: true})
    @Column({length: 50})
    address2: string;

    @Field(() => String)
    @Column({length: 20})
    district: string;

    @Field(() => Number)
    @Column()
    city_id: number;

    @Field(() => String)
    @Column({length: 10})
    postal_code: string;

    @Field(() => String)
    @Column({length: 20})
    phone: string;

    @Field(() => Date)
    @Column({type: 'timestamp without time zone'})
    last_update: Date;

    @ManyToOne(() => City, city => city.addresses)
    @JoinColumn([
        {name: 'city_id', referencedColumnName: 'city_id'}
    ])
    city: City;
}