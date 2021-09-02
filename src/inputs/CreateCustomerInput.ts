import { Field, InputType } from "type-graphql";

@InputType()
export class CreateCustomerInput{
    @Field(() => Number)
    store_id: number;

    @Field(() => String)
    first_name: string;

    @Field(() => String)
    last_name: string;

    @Field(() => String)
    email: string;

    @Field(() => Number)
    address_id: number;

    @Field(() => Boolean)
    activebool: boolean;

    @Field(() => Number)
    active: number;
}