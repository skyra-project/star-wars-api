import FuzzyPlanetArgs from '#arguments/FuzzyArgs/FuzzyPlanetArgs';
import PlanetArgs from '#arguments/PlanetArgs';
import planets from '#assets/planets';
import FilmService from '#services/FilmService';
import PersonService from '#services/PersonService';
import type Film from '#structures/Film';
import type Person from '#structures/Person';
import Planet from '#structures/Planet';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import FuzzySearch from '#utils/FuzzySearch';
import type GraphQLSet from '#utils/GraphQLSet';
import type StarWarsApi from '#utils/star-wars';
import { preParseInput } from '#utils/util';
import type Fuse from 'fuse.js';
import { Args } from 'type-graphql';

export default class PlanetService {
	public static getByPlanetName(@Args(() => PlanetArgs) { planet }: PlanetArgs): StarWarsApi.Planet | undefined {
		return planets.get(planet);
	}

	public static mapPlanetDataToPlanetGraphQL({ data, requestedFields, isReferencedCall = false }: MapPlanetDataToPlanetGraphQLParameters): Planet {
		const planet = new Planet();

		const films: Film[] = [];
		const residents: Person[] = [];

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

			if (requestedFields.has('residents')) {
				const characterFields = requestedFields.filterStartsWith<GraphQLSet<keyof Person>>('residents.');

				for (const character of data.residents) {
					const personData = PersonService.getByPersonName({ person: character })!;
					residents.push(
						PersonService.mapPersonDataToPersonGraphQL({
							data: personData,
							requestedFields: characterFields,
							isReferencedCall: true
						})
					);
				}
			}
		}

		addPropertyToClass(planet, 'climates', data.climate, requestedFields);
		addPropertyToClass(planet, 'diameter', data.diameter, requestedFields);
		addPropertyToClass(planet, 'films', films, requestedFields);
		addPropertyToClass(planet, 'gravity', data.gravity, requestedFields);
		addPropertyToClass(planet, 'name', data.name, requestedFields);
		addPropertyToClass(planet, 'orbitalPeriod', data.orbitalPeriod, requestedFields);
		addPropertyToClass(planet, 'population', data.population, requestedFields);
		addPropertyToClass(planet, 'residents', residents, requestedFields);
		addPropertyToClass(planet, 'rotationPeriod', data.rotationPeriod, requestedFields);
		addPropertyToClass(planet, 'surfaceWater', data.surfaceWater, requestedFields);
		addPropertyToClass(planet, 'terrains', data.terrains, requestedFields);

		return planet;
	}

	public static findByFuzzy(
		@Args(() => FuzzyPlanetArgs) { planet, offset, reverse, take }: FuzzyPlanetArgs
	): Fuse.FuseResult<StarWarsApi.Planet>[] {
		planet = preParseInput(planet);

		const fuzzyResult = new FuzzySearch(planets, ['name'], { threshold: 0.3 }).runFuzzy(planet);

		if (reverse) {
			fuzzyResult.reverse();
		}

		return fuzzyResult.slice(offset, offset + take);
	}
}

interface MapPlanetDataToPlanetGraphQLParameters {
	data: StarWarsApi.Planet;
	requestedFields: GraphQLSet<keyof Planet>;
	isReferencedCall?: boolean;
}
