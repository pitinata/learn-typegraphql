import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateFilmInput{
    @Field(() => String,{nullable: true})
    title: string;

    @Field(() => String,{nullable: true})
    description: string;

    @Field(() => String,{nullable: true})
    release_year: String;

    @Field(() => Number,{nullable: true})
    language_id: number;

    @Field(() => Number,{nullable: true})
    rental_duration: number;

    @Field(() => Number,{nullable: true})
    rental_rate: number;

    @Field(() => Number,{nullable: true})
    length: number;

    @Field(() => Number,{nullable: true})
    replacement_cost: number;

    @Field(() => String,{nullable: true})
    rating: string;

    @Field(() => Date,{nullable: true})
    last_update: Date;

    @Field(() => [String],{nullable: true})
    special_features: string[];
    
    @Field(() => String,{nullable: true})
    fulltext: string;
    
}