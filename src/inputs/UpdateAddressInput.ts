import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateAddressInput{

    @Field(() => String, {nullable: true})
    address: string;

    @Field(() => String, {nullable: true})
    address2: string;

    @Field(() => String, {nullable: true})
    district: string;

    @Field(() => Number, {nullable: true})
    city_id: number;

    @Field(() => String, {nullable: true})
    postal_code: string;

    @Field(() => String, {nullable: true})
    phone: string;
    
}