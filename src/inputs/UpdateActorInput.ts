import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateActorInput{

    @Field({nullable: true})
    first_name?: string;

    @Field({nullable: true})
    last_name?: string;
    
}