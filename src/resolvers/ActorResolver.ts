import { Arg, Info, Mutation, Query, Resolver } from "type-graphql";
import { CreateActorInput } from "../inputs/CreateActorInput";
import { UpdateActorInput } from "../inputs/UpdateActorInput";
import { Actor } from "../models/Actor";

@Resolver()
export class ActorResolver {
    @Query(() => [Actor])
    actors(){
        return Actor.find();
    }

    @Mutation(() => Actor)
    async createActor(@Arg("data") data: CreateActorInput){
        const actor = Actor.create(data);
        await actor.save();
        return actor;
    }

    @Query(() => Actor)
    actor(@Arg("id") actor_id: Number){
        return Actor.findOne({where: {actor_id}});
    }

    @Mutation(() => Actor)
    async updateActor(@Arg("id") actor_id: Number, @Arg("data") data: UpdateActorInput){
        const actor = await Actor.findOne({where: {actor_id}});
        if(!actor) throw new Error('Actor not found!');
        Object.assign(actor, data);
        await actor.save();
        return actor;
    }

    @Mutation(() => Boolean)
    async deleteActor(@Arg("id") actor_id: Number){
        const actor = await Actor.findOne({where: {actor_id}});
        if(!actor) throw new Error('Actor not found!');
        await actor.remove();
        return true;
    }
}