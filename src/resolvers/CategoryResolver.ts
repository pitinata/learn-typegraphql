import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { Repository } from "typeorm";
import { CreateCategoryInput } from "../inputs/CreateCategoryInput";
import { CreateCityInput } from "../inputs/CreateCityInput";
import { UpdateCategoryInput } from "../inputs/UpdateCategoryInput";
import { UpdateCityInput } from "../inputs/UpdateCityInput";
import { Category } from "../models/Category";
import { City } from "../models/City";
import { Country } from "../models/Country";
import { Film } from "../models/Film";
import { FilmCategory } from "../models/FilmCategory";

@Resolver(of => Category)
export class CategoryResolver{

    @Query(() => [Category])
    categories(){
        return Category.find();
    }

    @Query(() => Category)
    category(@Arg("id") category_id: Number){
        return Category.findOne({where: {category_id}});
    }

    @Mutation(() => Category)
    async createCategory(@Arg("data") data: CreateCategoryInput){
        const category = Category.create(data);
        await category.save();
        return category;
    }

    @Mutation(() => Category)
    async updateCategory(@Arg("id") category_id: Number, @Arg("data") data: UpdateCategoryInput){
        const category = await Category.findOne({where: {category_id}});
        if(!category) throw new Error('Category not found!');

        Object.assign(category, data);

        await category.save();
        return category;
    }


    @Mutation(() => Boolean)
    async deleteCategory(@Arg("id") category_id: Number){
        const category = await City.findOne({where: {category_id}});
        if(!category) throw new Error('Category not found!');
        await category.remove();
        return true;
    }

}