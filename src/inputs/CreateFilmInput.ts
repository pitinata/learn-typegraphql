import { Field, InputType } from "type-graphql";

@InputType()
export class CreateFilmInput{
    @Field(() => String)
    title: string;

    @Field(() => String)
    description: string;

    @Field(() => String)
    release_year: String;

    @Field(() => Number)
    language_id: number;

    @Field(() => Number)
    rental_duration: number;

    @Field(() => Number)
    rental_rate: number;

    @Field(() => Number)
    length: number;

    @Field(() => Number)
    replacement_cost: number;

    @Field(() => String)
    rating: string;

    @Field(() => Date)
    last_update: Date;

    @Field(() => [String])
    special_features: string[];
    
    @Field(() => String)
    fulltext: string;
}