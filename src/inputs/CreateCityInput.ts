import { Field, InputType } from "type-graphql";

@InputType()
export class CreateCityInput{
    @Field()
    city: string;

    @Field()
    country_id: number;
}