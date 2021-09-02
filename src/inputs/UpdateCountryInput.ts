import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateCountryInput{

    @Field({nullable: true})
    country?: string;
    
}