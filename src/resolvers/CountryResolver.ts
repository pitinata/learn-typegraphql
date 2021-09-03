import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateCountryInput } from "../inputs/CreateCountryInput";
import { UpdateCountryInput } from "../inputs/UpdateCountryInput";
import { City } from "../models/City";
import { Country } from "../models/Country";

@Resolver(of => Country)
export class CountryResolver{

    @Query(() => [Country])
    countries(){
        return Country.find();
    }

    @Query(() => Country)
    country(@Arg("id") country_id: Number){
        return Country.findOne({where: {country_id}});
    }

    @Mutation(() => Country)
    async createCountry(@Arg("data") data: CreateCountryInput){
        const country = Country.create(data);
        await country.save();
        return country;
    }

    @Mutation(() => Country)
    async updateCountry(@Arg("id") country_id: Number, @Arg("data") data: UpdateCountryInput){
        const country = await Country.findOne({where: {country_id}});
        if(!country) throw new Error('Country not found!');

        Object.assign(country, data);

        await country.save();
        return country;
    }

    @Mutation(() => Boolean)
    async deleteCountry(@Arg("id") country_id: Number){
        const country = await Country.findOne({where: {country_id}});
        if(!country) throw new Error('Country not found!');
        await country.remove();
        return true;
    }


}