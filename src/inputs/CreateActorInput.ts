import { Field, InputType } from "type-graphql";

@InputType()
export class CreateActorInput{

    @Field()
    first_name: string;

    @Field()
    last_name: string;
    
}