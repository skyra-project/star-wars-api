import FuzzyPlanetArgs from '#arguments/FuzzyArgs/FuzzyPlanetArgs';
import PlanetArgs from '#arguments/PlanetArgs';
import PlanetService from '#services/PlanetService';
import Planet from '#structures/Planet';
import { getRequestedFields } from '#utils/getRequestedFields';
import GraphQLSet from '#utils/GraphQLSet';
import { Args, Query, Resolver } from 'type-graphql';

@Resolver(Planet)
export default class PlanetResolver {
	@Query(() => Planet, {
		description: 'Gets details on a Star Wars planet, using the name of that planet'
	})
	public getPlanet(@Args() args: PlanetArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof Planet>): Planet {
		const planetData = PlanetService.getByPlanetName(args);

		if (!planetData) {
			throw new Error(`No planet found for ${args.planet}`);
		}

		const graphqlObject = PlanetService.mapPlanetDataToPlanetGraphQL(planetData, requestedFields);

		if (!graphqlObject) {
			throw new Error(`Failed to get data for planet: ${args.planet}`);
		}

		return graphqlObject;
	}

	@Query(() => [Planet], {
		description: [
			"Gets details on a Star Wars planet, using a fuzzy search on that planet's name",
			'This can be used to find multiple results based on the query',
			'By default only 1 result is returned. You can provide the arguments "take", "offset", and "reverse" to modify this behaviour.'
		].join('\n')
	})
	public getFuzzyPlanet(@Args() args: FuzzyPlanetArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof Planet>): Planet[] {
		let data = PlanetService.getByPlanetName(args);

		if (!data) {
			const fuzzyEntry = PlanetService.findByFuzzy(args);

			if (fuzzyEntry === undefined || !fuzzyEntry.length) {
				throw new Error(`Failed to get data for planet: ${args.planet}`);
			}

			// TODO: Actually return multiple results by looping over this
			data = PlanetService.getByPlanetName({ planet: fuzzyEntry[0].item.name });

			if (!data) {
				throw new Error(`No planet found for: ${args.planet}`);
			}
		}

		const graphqlObject = PlanetService.mapPlanetDataToPlanetGraphQL(data, requestedFields);

		if (!graphqlObject) {
			throw new Error(`Failed to get data for planet: ${args.planet}`);
		}

		// TODO: Actually return multiple results by looping over this
		return [graphqlObject];
	}
}
