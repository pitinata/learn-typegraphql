import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateAddressInput } from "../inputs/CreateAddressInput";
import { UpdateAddressInput } from "../inputs/UpdateAddressInput";
import { Address } from "../models/Address";
import { City } from "../models/City";

@Resolver(of => Address)
export class AddressResolver{
    @Query(() => [Address])
    addresses(){
        return Address.find();
    }

    @Query(() => Address)
    address(@Arg("id") address_id: number){
        return Address.findOne({where: {address_id}});
    }

    @Mutation(() => Address)
    async createAddress(@Arg("data") data: CreateAddressInput){
        const address = Address.create(data);
        await address.save();
        return address;
    }

    @Mutation(() => Address)
    async updateAddress(@Arg("id") address_id: Number, @Arg("data") data: UpdateAddressInput){
        const address = await Address.findOne({where: {address_id}});
        if(!address) throw new Error('Address not found!');

        Object.assign(address, data);

        await address.save();
        return address;
    }

    @Mutation(() => Boolean)
    async deleteAddress(@Arg("id") address_id: Number){
        const address = await Address.findOne({where: {address_id}});
        if(!address) throw new Error('Address not found!');

        await address.remove();
        return true;
    }

    
}