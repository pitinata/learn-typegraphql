import { Field, InputType } from "type-graphql";

@InputType()
export class CreateCountryInput{
    @Field()
    country: string;
}