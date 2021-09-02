import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateCityInput{

    @Field({nullable: true})
    city?: string;

    @Field({nullable: true})
    country_id?: number;
    
}