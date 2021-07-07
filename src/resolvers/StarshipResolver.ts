import FuzzyStarshipArgs from '#arguments/FuzzyArgs/FuzzyStarshipArgs';
import StarshipArgs from '#arguments/StarshipArgs';
import StarshipService from '#services/StarshipService';
import Starship from '#structures/Starship';
import { getRequestedFields } from '#utils/getRequestedFields';
import GraphQLSet from '#utils/GraphQLSet';
import { Args, Query, Resolver } from 'type-graphql';

@Resolver(Starship)
export default class StarshipResolver {
	private starshipService: StarshipService;

	public constructor() {
		this.starshipService = new StarshipService();
	}

	@Query(() => Starship, {
		description: 'Gets details on a Star Wars starship, using the name of that starship'
	})
	public getStarship(@Args() args: StarshipArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof Starship>): Starship {
		const starshipData = this.starshipService.getByStarshipName(args);

		if (!starshipData) {
			throw new Error(`No starship found for ${args.starship}`);
		}

		const graphqlObject = this.starshipService.mapStarshipDataToStarshipGraphQL(starshipData, requestedFields);

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
		let data = this.starshipService.getByStarshipName(args);

		if (!data) {
			const fuzzyEntry = this.starshipService.findByFuzzy(args);

			if (fuzzyEntry === undefined || !fuzzyEntry.length) {
				throw new Error(`Failed to get data for starship: ${args.starship}`);
			}

			// TODO: Actually return multiple results by looping over this
			data = this.starshipService.getByStarshipName({ starship: fuzzyEntry[0].item.name });

			if (!data) {
				throw new Error(`No starship found for: ${args.starship}`);
			}
		}

		const graphqlObject = this.starshipService.mapStarshipDataToStarshipGraphQL(data, requestedFields);

		if (!graphqlObject) {
			throw new Error(`Failed to get data for starship: ${args.starship}`);
		}

		// TODO: Actually return multiple results by looping over this
		return [graphqlObject];
	}
}
