import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateFilmInput } from "../inputs/CreateFilmInput";
import { UpdateCustomerInput } from "../inputs/UpdateCustomerInput";
import { UpdateFilmInput } from "../inputs/UpdateFilmInput";
import { Film } from "../models/Film";
import { Inventory } from "../models/Inventory";

@Resolver(of => Film)
export class FilmResolver{

    @Query(() => [Film])
    films(){
        return Film.find();
    }

    @Query(() => Film)
    film(@Arg("id") film_id: Number){
        return Film.findOne({where: {film_id}});
    }

    @Mutation(() => Film)
    async createFilm(@Arg("data") data: CreateFilmInput){
        const film = Film.create(data);
        await film.save();
        return film;
    }

    @Mutation(() => Film)
    async updateFilm(@Arg("id") film_id: Number, @Arg("data") data: UpdateFilmInput){
        const film = await Film.findOne({where: {film_id}});
        if(!film) throw new Error('Film not found!');

        Object.assign(film, data);

        await film.save();
        return film;
    }

    @Mutation(() => Boolean)
    async deleteFilm(@Arg("id") film_id: Number){
        const film = await Film.findOne({where: {film_id}});
        if(!film) throw new Error('Film not found!');
        await film.remove();
        return true;
    }


}