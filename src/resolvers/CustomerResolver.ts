import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateCountryInput } from "../inputs/CreateCountryInput";
import { CreateCustomerInput } from "../inputs/CreateCustomerInput";
import { UpdateCountryInput } from "../inputs/UpdateCountryInput";
import { UpdateCustomerInput } from "../inputs/UpdateCustomerInput";
import { Customer } from "../models/Customer";

@Resolver(of => Customer)
export class CustomerResolver{

    @Query(() => [Customer])
    customers(){
        return Customer.find();
    }

    @Query(() => Customer)
    customer(@Arg("id") customer_id: Number){
        return Customer.findOne({where: {customer_id}});
    }

    @Mutation(() => Customer)
    async createCustomer(@Arg("data") data: CreateCustomerInput){
        const customer = Customer.create(data);
        await customer.save();
        return customer;
    }

    @Mutation(() => Customer)
    async updateCustomer(@Arg("id") customer_id: Number, @Arg("data") data: UpdateCustomerInput){
        const customer = await Customer.findOne({where: {customer_id}});
        if(!customer) throw new Error('Customer not found!');

        Object.assign(customer, data);

        await customer.save();
        return customer;
    }

    @Mutation(() => Boolean)
    async deleteCustomer(@Arg("id") customer_id: Number){
        const customer = await Customer.findOne({where: {customer_id}});
        if(!customer) throw new Error('Customer not found!');
        await customer.remove();
        return true;
    }


}