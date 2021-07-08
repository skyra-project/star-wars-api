import FuzzySpeciesArgs from '#arguments/FuzzyArgs/FuzzySpeciesArgs';
import SpeciesArgs from '#arguments/SpeciesArgs';
import speciesData from '#assets/species';
import FilmService from '#services/FilmService';
import PersonService from '#services/PersonService';
import PlanetService from '#services/PlanetService';
import type Film from '#structures/Film';
import type Person from '#structures/Person';
import type Planet from '#structures/Planet';
import Species from '#structures/Species';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import FuzzySearch from '#utils/FuzzySearch';
import type GraphQLSet from '#utils/GraphQLSet';
import type StarWarsApi from '#utils/star-wars';
import Util from '#utils/util';
import type Fuse from 'fuse.js';
import { Args } from 'type-graphql';

export default class SpeciesService {
	public static getBySpeciesName(@Args(() => SpeciesArgs) { species }: SpeciesArgs): StarWarsApi.Species | undefined {
		return speciesData.get(species);
	}

	public static mapSpeciesDataToSpeciesGraphQL(
		data: StarWarsApi.Species,
		requestedFields: GraphQLSet<keyof Species>,
		isReferencedCall = false
	): Species {
		const species = new Species();

		const people: Person[] = [];
		const films: Film[] = [];

		if (!isReferencedCall) {
			if (requestedFields.has('films')) {
				const filmFields = requestedFields.filterStartsWith<GraphQLSet<keyof Film>>('films.');

				for (const film of data.films) {
					const filmData = FilmService.getByEpisodeNumber({ film })!;
					films.push(FilmService.mapFilmDataToFilmGraphQL(filmData, filmFields, true));
				}
			}

			if (requestedFields.has('people')) {
				const characterFields = requestedFields.filterStartsWith<GraphQLSet<keyof Person>>('people.');

				for (const character of data.people) {
					const personData = PersonService.getByPersonName({ person: character })!;
					people.push(PersonService.mapPersonDataToPersonGraphQL(personData, characterFields, true));
				}
			}

			if (requestedFields.has('homeworld')) {
				const homeworldFields = requestedFields.filterStartsWith<GraphQLSet<keyof Planet>>('homeworld.');

				if (data.homeworld) {
					const homeworldData = PlanetService.getByPlanetName({ planet: data.homeworld })!;
					addPropertyToClass(
						species,
						'homeworld',
						PlanetService.mapPlanetDataToPlanetGraphQL(homeworldData, homeworldFields, true),
						requestedFields
					);
				}
			}
		}

		addPropertyToClass(species, 'averageHeight', data.averageHeight, requestedFields);
		addPropertyToClass(species, 'averageLifespan', data.averageLifespan, requestedFields);
		addPropertyToClass(species, 'classification', data.classification, requestedFields);
		addPropertyToClass(species, 'designation', data.designation, requestedFields);
		addPropertyToClass(species, 'eyeColors', data.eyeColors, requestedFields);
		addPropertyToClass(species, 'films', films, requestedFields);
		addPropertyToClass(species, 'hairColors', data.hairColors, requestedFields);
		addPropertyToClass(species, 'language', data.language, requestedFields);
		addPropertyToClass(species, 'name', data.name, requestedFields);
		addPropertyToClass(species, 'people', people, requestedFields);
		addPropertyToClass(species, 'skinColors', data.skinColors, requestedFields);

		return species;
	}

	public static findByFuzzy(
		@Args(() => FuzzySpeciesArgs) { species, offset, reverse, take }: FuzzySpeciesArgs
	): Fuse.FuseResult<StarWarsApi.Species>[] {
		species = Util.preParseInput(species);

		const fuzzyResult = new FuzzySearch(speciesData, ['name'], { threshold: 0.3 }).runFuzzy(species);

		if (reverse) {
			fuzzyResult.reverse();
		}

		return fuzzyResult.slice(offset, offset + take);
	}
}
