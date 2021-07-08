import FuzzySpeciesArgs from '#arguments/FuzzyArgs/FuzzySpeciesArgs';
import SpeciesArgs from '#arguments/SpeciesArgs';
import SpeciesService from '#services/SpeciesService';
import Species from '#structures/Species';
import { getRequestedFields } from '#utils/getRequestedFields';
import GraphQLSet from '#utils/GraphQLSet';
import { Args, Query, Resolver } from 'type-graphql';

@Resolver(Species)
export default class SpeciesResolver {
	@Query(() => Species, {
		description: 'Gets details on a Star Wars species, using the name of that species'
	})
	public getSpecies(@Args() args: SpeciesArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof Species>): Species {
		const speciesData = SpeciesService.getBySpeciesName(args);

		if (!speciesData) {
			throw new Error(`No species found for ${args.species}`);
		}

		const graphqlObject = SpeciesService.mapSpeciesDataToSpeciesGraphQL({
			data: speciesData,
			requestedFields
		});

		if (!graphqlObject) {
			throw new Error(`Failed to get data for species: ${args.species}`);
		}

		return graphqlObject;
	}

	@Query(() => [Species], {
		description: [
			"Gets details on a Star Wars species, using a fuzzy search on that species' name",
			'This can be used to find multiple results based on the query',
			'By default only 1 result is returned. You can provide the arguments "take", "offset", and "reverse" to modify this behaviour.'
		].join('\n')
	})
	public getFuzzySpecies(@Args() args: FuzzySpeciesArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof Species>): Species[] {
		let data = SpeciesService.getBySpeciesName(args);

		if (!data) {
			const fuzzyEntry = SpeciesService.findByFuzzy(args);

			if (fuzzyEntry === undefined || !fuzzyEntry.length) {
				throw new Error(`Failed to get data for species: ${args.species}`);
			}

			// TODO: Actually return multiple results by looping over this
			data = SpeciesService.getBySpeciesName({ species: fuzzyEntry[0].item.name });

			if (!data) {
				throw new Error(`No species found for: ${args.species}`);
			}
		}

		const graphqlObject = SpeciesService.mapSpeciesDataToSpeciesGraphQL({
			data,
			requestedFields
		});

		if (!graphqlObject) {
			throw new Error(`Failed to get data for species: ${args.species}`);
		}

		// TODO: Actually return multiple results by looping over this
		return [graphqlObject];
	}
}
