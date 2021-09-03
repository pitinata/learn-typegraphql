import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./Address";
import { Country } from "./Country";

@Entity()
@ObjectType()
export class City extends BaseEntity{

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    city_id: number;

    @Field(() => String)
    @Column({length: 50})
    city: string;

    @Column({type: 'smallint'})
    country_id: number;

    @Field(() => Date)
    @Column({type: 'timestamp without time zone'})
    last_update: Date;

    @Field(() => [Address])
    @OneToMany(() => Address, address => address.city)
    addresses: Promise<Address[]>;

    @Field(() => Country)
    @ManyToOne(() => Country, country => country.cities)
    @JoinColumn([
        {name: 'country_id', referencedColumnName: 'country_id'}
    ])
    country: Promise<Country>;
}