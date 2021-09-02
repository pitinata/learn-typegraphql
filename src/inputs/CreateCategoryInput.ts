import { Field, InputType } from "type-graphql";

@InputType()
export class CreateCategoryInput{
    @Field(() => String, {nullable: true})
    name: string;
}