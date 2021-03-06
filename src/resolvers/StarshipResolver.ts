import FuzzyStarshipArgs from '#arguments/FuzzyArgs/FuzzyStarshipArgs';
import StarshipArgs from '#arguments/StarshipArgs';
import StarshipService from '#services/StarshipService';
import Starship from '#structures/Starship';
import { getRequestedFields } from '#utils/getRequestedFields';
import GraphQLSet from '#utils/GraphQLSet';
import { Args, Query, Resolver } from 'type-graphql';

@Resolver(Starship)
export default class StarshipResolver {
	@Query(() => Starship, {
		description: 'Gets details on a Star Wars starship, using the name of that starship'
	})
	public getStarship(@Args() args: StarshipArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof Starship>): Starship {
		const starshipData = StarshipService.getByStarshipName(args);

		if (!starshipData) {
			throw new Error(`No starship found for ${args.starship}`);
		}

		const graphqlObject = StarshipService.mapStarshipDataToStarshipGraphQL({
			data: starshipData,
			requestedFields
		});

		if (!graphqlObject) {
			throw new Error(`Failed to get data for starship: ${args.starship}`);
		}

		return graphqlObject;
	}

	@Query(() => [Starship], {
		description: [
			"Gets details on a Star Wars starship, using a fuzzy search on that starship' name",
			'This can be used to find multiple results based on the query',
			'By default only 1 result is returned. You can provide the arguments "take", "offset", and "reverse" to modify this behaviour.'
		].join('\n')
	})
	public getFuzzyStarship(@Args() args: FuzzyStarshipArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof Starship>): Starship[] {
		const fuzzyEntry = StarshipService.findByFuzzy(args);

		if (!fuzzyEntry.length) {
			throw new Error(`No starships found for: ${args.starship}`);
		}

		const graphqlObjects = fuzzyEntry.map((starshipData) =>
			StarshipService.mapStarshipDataToStarshipGraphQL({ data: starshipData.item, requestedFields })
		);

		if (!graphqlObjects.length) {
			throw new Error(`Failed to get data for starships: ${args.starship}`);
		}

		return graphqlObjects;
	}
}
