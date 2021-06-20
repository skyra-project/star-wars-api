import { films } from '#arguments/FilmsArgs';
import { people } from '#arguments/PersonArgs';
import { planets } from '#arguments/PlanetArgs';
import { species } from '#arguments/SpeciesArgs';
import { starships } from '#arguments/StarshipsArgs';
import { vehicles } from '#arguments/VehiclesArgs';
import FilmResolver from '#resolvers/FilmResolver';
import tabs from '#root/defaultPlaygroundTabs';
import { ApolloServer } from 'apollo-server-koa';
import type { GraphQLSchema } from 'graphql';
import Koa from 'koa';
import { buildSchemaSync, registerEnumType } from 'type-graphql';

export const buildGqlSchema = (): GraphQLSchema => {
	registerEnumType(films, {
		name: 'Films',
		description: 'The Star Wars films'
	});

	registerEnumType(people, {
		name: 'People',
		description: 'The people in Star Wars'
	});

	registerEnumType(planets, {
		name: 'Planets',
		description: 'The planets in Star War'
	});

	registerEnumType(species, {
		name: 'Species',
		description: 'The species in Star Wars'
	});

	registerEnumType(starships, {
		name: 'Starships',
		description: 'The starships in Star Wars'
	});

	registerEnumType(vehicles, {
		name: 'Vehicles',
		description: 'The vehicles in Star Wars'
	});

	return buildSchemaSync({
		resolvers: [FilmResolver],
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
