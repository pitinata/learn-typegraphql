import { Arg, Query, Resolver } from "type-graphql";
import { Inventory } from "../models/Inventory";

@Resolver(of => Inventory)
export class InventoryResolver{
    @Query(() => [Inventory])
    inventories(){
        return Inventory.find();
    }

    @Query(() => Inventory)
    inventory(@Arg("id") inventory_id: Number){
        return Inventory.findOne({where: {inventory_id}});
    }
}