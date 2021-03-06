import FuzzyStarshipArgs from '#arguments/FuzzyArgs/FuzzyStarshipArgs';
import StarshipArgs from '#arguments/StarshipArgs';
import starships from '#assets/starships';
import FilmService from '#services/FilmService';
import PersonService from '#services/PersonService';
import type Film from '#structures/Film';
import type Person from '#structures/Person';
import Starship from '#structures/Starship';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import FuzzySearch from '#utils/FuzzySearch';
import type GraphQLSet from '#utils/GraphQLSet';
import type StarWarsApi from '#utils/star-wars';
import { preParseInput } from '#utils/util';
import type Fuse from 'fuse.js';
import { Args } from 'type-graphql';

export default class StarshipService {
	public static getByStarshipName(@Args(() => StarshipArgs) { starship }: StarshipArgs): StarWarsApi.Starship | undefined {
		return starships.get(starship);
	}

	public static mapStarshipDataToStarshipGraphQL({
		data,
		requestedFields,
		isReferencedCall = false
	}: MapStarshipDataToStarshipGraphQLParameters): Starship {
		const starship = new Starship();

		const pilots: Person[] = [];
		const films: Film[] = [];

		if (!isReferencedCall) {
			if (requestedFields.has('films')) {
				const filmFields = requestedFields.filterStartsWith<GraphQLSet<keyof Film>>('films.');

				for (const film of data.films) {
					const filmData = FilmService.getByEpisodeNumber({ film })!;
					films.push(
						FilmService.mapFilmDataToFilmGraphQL({
							data: filmData,
							requestedFields: filmFields,
							isReferencedCall: true
						})
					);
				}
			}

			if (requestedFields.has('pilots')) {
				const characterFields = requestedFields.filterStartsWith<GraphQLSet<keyof Person>>('pilots.');

				for (const character of data.pilots) {
					const personData = PersonService.getByPersonName({ person: character })!;
					pilots.push(
						PersonService.mapPersonDataToPersonGraphQL({
							data: personData,
							requestedFields: characterFields,
							isReferencedCall: true
						})
					);
				}
			}
		}

		addPropertyToClass(starship, 'cargoCapacity', data.cargoCapacity, requestedFields);
		addPropertyToClass(starship, 'consumables', data.consumables, requestedFields);
		addPropertyToClass(starship, 'costInCredits', data.costInCredits, requestedFields);
		addPropertyToClass(starship, 'crew', data.crew, requestedFields);
		addPropertyToClass(starship, 'films', films, requestedFields);
		addPropertyToClass(starship, 'hyperdriveRating', data.hyperdriveRating, requestedFields);
		addPropertyToClass(starship, 'length', data.length, requestedFields);
		addPropertyToClass(starship, 'manufacturers', data.manufacturers, requestedFields);
		addPropertyToClass(starship, 'maxAtmospheringSpeed', data.maxAtmospheringSpeed, requestedFields);
		addPropertyToClass(starship, 'MGLT', data.MGLT, requestedFields);
		addPropertyToClass(starship, 'model', data.model, requestedFields);
		addPropertyToClass(starship, 'name', data.name, requestedFields);
		addPropertyToClass(starship, 'passengers', data.passengers, requestedFields);
		addPropertyToClass(starship, 'pilots', pilots, requestedFields);
		addPropertyToClass(starship, 'starshipClass', data.starshipClass, requestedFields);

		return starship;
	}

	public static findByFuzzy(
		@Args(() => FuzzyStarshipArgs) { starship, offset, reverse, take }: FuzzyStarshipArgs
	): Fuse.FuseResult<StarWarsApi.Starship>[] {
		starship = preParseInput(starship);

		const fuzzyResult = new FuzzySearch(starships, ['name', 'model'], { threshold: 0.3 }).runFuzzy(starship);

		if (reverse) {
			fuzzyResult.reverse();
		}

		return fuzzyResult.slice(offset, offset + take);
	}
}

interface MapStarshipDataToStarshipGraphQLParameters {
	data: StarWarsApi.Starship;
	requestedFields: GraphQLSet<keyof Starship>;
	isReferencedCall?: boolean;
}
