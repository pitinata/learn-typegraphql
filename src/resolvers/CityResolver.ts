import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { Repository } from "typeorm";
import { CreateCityInput } from "../inputs/CreateCityInput";
import { UpdateCityInput } from "../inputs/UpdateCityInput";
import { City } from "../models/City";
import { Country } from "../models/Country";

@Resolver(of => City)
export class CityResolver{

    @Query(() => [City])
    cities(){
        return City.find();
    }

    @Query(() => City)
    city(@Arg("id") city_id: Number){
        return City.findOne({where: {city_id}});
    }

    @Mutation(() => City)
    async createCity(@Arg("data") data: CreateCityInput){
        const city = City.create(data);
        await city.save();
        return city;
    }

    @Mutation(() => City)
    async updateCity(@Arg("id") city_id: Number, @Arg("data") data: UpdateCityInput){
        const city = await City.findOne({where: {city_id}});
        if(!city) throw new Error('City not found!');

        Object.assign(city, data);

        await city.save();
        return city;
    }


    @Mutation(() => Boolean)
    async deleteCity(@Arg("id") city_id: Number){
        const city = await City.findOne({where: {city_id}});
        if(!city) throw new Error('City not found!');
        await city.remove();
        return true;
    }

}