import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { ActorResolver } from "./resolvers/ActorResolver";
import { CityResolver } from "./resolvers/CityResolver";
import { CountryResolver } from "./resolvers/CountryResolver";
import { AddressResolver } from "./resolvers/AddressResolver";
import { CategoryResolver } from "./resolvers/CategoryResolver";

async function main() {
    await createConnection();
    const schema = await buildSchema({
        resolvers: [
            ActorResolver,
            AddressResolver,
            CategoryResolver,
            CityResolver,
            CountryResolver
        ]
    });
    const server = new ApolloServer({schema});
    await server.listen(4000);
    console.log("Server has started!");
}

main();