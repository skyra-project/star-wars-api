import { people } from '#arguments/PersonArgs';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { planets } from '#arguments/PlanetArgs';
import { species } from '#arguments/SpeciesArgs';
import { starships } from '#arguments/StarshipArgs';
import { vehicles } from '#arguments/VehicleArgs';
import FilmResolver from '#resolvers/FilmResolver';
import PersonResolver from '#resolvers/PersonResolver';
import PlanetResolver from '#resolvers/PlanetResolver';
import SpeciesResolver from '#resolvers/SpeciesResolver';
import StarshipResolver from '#resolvers/StarshipResolver';
import VehicleResolver from '#resolvers/VehicleResolver';
import tabs from '#root/defaultPlaygroundTabs';
import { ApolloServer } from 'apollo-server-koa';
import type { GraphQLSchema } from 'graphql';
import Koa from 'koa';
import { buildSchema, registerEnumType } from 'type-graphql';

export const buildGqlSchema = async (): Promise<GraphQLSchema> => {
	registerEnumType(people, {
		name: 'StarWarsPeople',
		description: 'The people in Star Wars'
	});

	registerEnumType(planets, {
		name: 'StarWarsPlanets',
		description: 'The planets in Star War'
	});

	registerEnumType(species, {
		name: 'StarWarsSpecies',
		description: 'The species in Star Wars'
	});

	registerEnumType(starships, {
		name: 'StarWarsStarships',
		description: 'The starships in Star Wars'
	});

	registerEnumType(vehicles, {
		name: 'StarWarsVehicles',
		description: 'The vehicles in Star Wars'
	});

	return buildSchema({
		resolvers: [FilmResolver, PersonResolver, PlanetResolver, SpeciesResolver, StarshipResolver, VehicleResolver],
		dateScalarMode: 'isoDate'
	});
};

const gqlServer = async (): Promise<Koa<Koa.DefaultState, Koa.DefaultContext>> => {
	const schema = await buildGqlSchema();
	const app = new Koa();
	const apolloServer = new ApolloServer({
		schema,
		introspection: true,
		plugins: [
			ApolloServerPluginLandingPageGraphQLPlayground({
				settings: {
					'editor.theme': 'dark',
					'editor.fontFamily': '"Fira Code", "MesloLGS NF", "Menlo", Consolas, Courier New, monospace',
					'editor.reuseHeaders': true
				},
				tabs
			})
		]
	});

	await apolloServer.start();

	apolloServer.applyMiddleware({ app, path: '/', cors: true });

	return app;
};

export default gqlServer;
