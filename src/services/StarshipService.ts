import FuzzyStarshipArgs from '#arguments/FuzzyArgs/FuzzyStarshipArgs';
import StarshipArgs from '#arguments/StarshipArgs';
import starships from '#assets/starships';
import Starship from '#structures/Starship';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import FuzzySearch from '#utils/FuzzySearch';
import type GraphQLSet from '#utils/GraphQLSet';
import type StarWarsApi from '#utils/star-wars';
import Util from '#utils/util';
import type Fuse from 'fuse.js';
import { Args } from 'type-graphql';

export default class SpeciesService {
	public getByStarshipName(@Args(() => StarshipArgs) { starship }: StarshipArgs): StarWarsApi.Starship | undefined {
		return starships.get(starship);
	}

	// TODO: add parameter to prevent deep-nesting
	// TODO: ensure requestedFields supports deep-nesting
	public mapStarshipDataToStarshipGraphQL(data: StarWarsApi.Starship, requestedFields: GraphQLSet<keyof Starship>): Starship {
		const starship = new Starship();

		addPropertyToClass(starship, 'cargoCapacity', data.cargoCapacity, requestedFields);
		addPropertyToClass(starship, 'consumables', data.consumables, requestedFields);
		addPropertyToClass(starship, 'costInCredits', data.costInCredits, requestedFields);
		addPropertyToClass(starship, 'crew', data.crew, requestedFields);
		addPropertyToClass(starship, 'films', data.films, requestedFields); // TODO: map to actual GraphQL Class
		addPropertyToClass(starship, 'hyperdriveRating', data.hyperdriveRating, requestedFields);
		addPropertyToClass(starship, 'length', data.length, requestedFields);
		addPropertyToClass(starship, 'manufacturers', data.manufacturers, requestedFields);
		addPropertyToClass(starship, 'maxAtmospheringSpeed', data.maxAtmospheringSpeed, requestedFields);
		addPropertyToClass(starship, 'MGLT', data.MGLT, requestedFields);
		addPropertyToClass(starship, 'model', data.model, requestedFields);
		addPropertyToClass(starship, 'name', data.name, requestedFields);
		addPropertyToClass(starship, 'passengers', data.passengers, requestedFields);
		addPropertyToClass(starship, 'pilots', data.pilots, requestedFields); // TODO: map to actual GraphQL Class
		addPropertyToClass(starship, 'starshipClass', data.starshipClass, requestedFields);

		return starship;
	}

	public findByFuzzy(
		@Args(() => FuzzyStarshipArgs) { starship, offset, reverse, take }: FuzzyStarshipArgs
	): Fuse.FuseResult<StarWarsApi.Starship>[] {
		starship = Util.preParseInput(starship);

		const fuzzyResult = new FuzzySearch(starships, ['name', 'model'], { threshold: 0.3 }).runFuzzy(starship);

		if (reverse) {
			fuzzyResult.reverse();
		}

		return fuzzyResult.slice(offset, offset + take);
	}
}
