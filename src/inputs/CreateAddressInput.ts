import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAddressInput{

    @Field(() => String)
    address: string;

    @Field(() => String, {nullable: true})
    address2: string;

    @Field(() => String)
    district: string;

    @Field(() => Number)
    city_id: number;

    @Field(() => String)
    postal_code: string;

    @Field(() => String)
    phone: string;
    
}