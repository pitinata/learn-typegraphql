import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { City } from "./City";

@Entity()
@ObjectType()
export class Country extends BaseEntity{

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    country_id: number;
    
    @Field(() => String)
    @Column({length: 50})
    country: string;
    
    @Field(() => Date)
    @Column({type: 'timestamp without time zone'})
    last_update: Date;

    @Field(() => [City])
    @OneToMany(() => City, city => city.country)
    cities: City[];
    
}