import { people } from '#arguments/PersonArgs';
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
import { buildSchemaSync, registerEnumType } from 'type-graphql';

export const buildGqlSchema = (): GraphQLSchema => {
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

	return buildSchemaSync({
		resolvers: [FilmResolver, PersonResolver, PlanetResolver, SpeciesResolver, StarshipResolver, VehicleResolver],
		dateScalarMode: 'isoDate'
	});
};

const gqlServer = (): Koa<Koa.DefaultState, Koa.DefaultContext> => {
	const schema = buildGqlSchema();
	const app = new Koa();
	const apolloServer = new ApolloServer({
		schema,
		introspection: true,
		playground: {
			endpoint: '/api',
			settings: {
				'editor.theme': 'dark',
				'editor.fontFamily': '"Fira Code", "MesloLGS NF", "Menlo", Consolas, Courier New, monospace',
				'editor.reuseHeaders': true
			},
			tabs
		}
	});

	apolloServer.applyMiddleware({ app, path: '/', cors: true });

	return app;
};

export default gqlServer;
