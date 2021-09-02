import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateCustomerInput{
    @Field(() => Number,{nullable: true})
    store_id: number;

    @Field(() => String,{nullable: true})
    first_name: string;

    @Field(() => String,{nullable: true})
    last_name: string;

    @Field(() => String,{nullable: true})
    email: string;

    @Field(() => Number,{nullable: true})
    address_id: number;

    @Field(() => Boolean,{nullable: true})
    activebool: boolean;

    @Field(() => Number,{nullable: true})
    active: number;
    
}