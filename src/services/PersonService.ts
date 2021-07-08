import FuzzyPersonArgs from '#arguments/FuzzyArgs/FuzzyPersonArgs';
import PersonArgs from '#arguments/PersonArgs';
import people from '#assets/people';
import FilmService from '#services/FilmService';
import PlanetService from '#services/PlanetService';
import SpeciesService from '#services/SpeciesService';
import StarshipService from '#services/StarshipService';
import VehicleService from '#services/VehicleService';
import type Film from '#structures/Film';
import Person from '#structures/Person';
import type Planet from '#structures/Planet';
import type Species from '#structures/Species';
import type Starship from '#structures/Starship';
import type Vehicle from '#structures/Vehicle';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import FuzzySearch from '#utils/FuzzySearch';
import type GraphQLSet from '#utils/GraphQLSet';
import type StarWarsApi from '#utils/star-wars';
import { preParseInput } from '#utils/util';
import type Fuse from 'fuse.js';
import { Args } from 'type-graphql';

export default class PersonService {
	public static getByPersonName(@Args(() => PersonArgs) { person }: PersonArgs): StarWarsApi.Person | undefined {
		return people.get(person);
	}

	public static mapPersonDataToPersonGraphQL({ data, requestedFields, isReferencedCall = false }: MapPersonDataToPersonGraphQLParameters): Person {
		const person = new Person();

		const films: Film[] = [];
		const species: Species[] = [];
		const starships: Starship[] = [];
		const vehicles: Vehicle[] = [];

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

			if (requestedFields.has('homeworld')) {
				const homeworldFields = requestedFields.filterStartsWith<GraphQLSet<keyof Planet>>('homeworld.');

				if (data.homeworld) {
					const homeworldData = PlanetService.getByPlanetName({ planet: data.homeworld })!;
					addPropertyToClass(
						person,
						'homeworld',
						PlanetService.mapPlanetDataToPlanetGraphQL({
							data: homeworldData,
							requestedFields: homeworldFields,
							isReferencedCall: true
						}),
						requestedFields
					);
				}
			}

			if (requestedFields.has('species')) {
				const speciesFields = requestedFields.filterStartsWith<GraphQLSet<keyof Species>>('species.');

				for (const filmSpecies of data.species) {
					const speciesData = SpeciesService.getBySpeciesName({ species: filmSpecies })!;
					species.push(
						SpeciesService.mapSpeciesDataToSpeciesGraphQL({
							data: speciesData,
							requestedFields: speciesFields,
							isReferencedCall: true
						})
					);
				}
			}

			if (requestedFields.has('starships')) {
				const starshipFields = requestedFields.filterStartsWith<GraphQLSet<keyof Starship>>('starships.');

				for (const starship of data.starships) {
					const starshipData = StarshipService.getByStarshipName({ starship })!;
					starships.push(
						StarshipService.mapStarshipDataToStarshipGraphQL({
							data: starshipData,
							requestedFields: starshipFields,
							isReferencedCall: true
						})
					);
				}
			}

			if (requestedFields.has('vehicles')) {
				const vehicleFields = requestedFields.filterStartsWith<GraphQLSet<keyof Vehicle>>('vehicles.');

				for (const vehicle of data.vehicles) {
					const vehicleData = VehicleService.getByVehicleName({ vehicle })!;
					vehicles.push(
						VehicleService.mapVehicleDataToVehicleGraphQL({
							data: vehicleData,
							requestedFields: vehicleFields,
							isReferencedCall: true
						})
					);
				}
			}
		}

		addPropertyToClass(person, 'birthYear', data.birthYear, requestedFields);
		addPropertyToClass(person, 'eyeColors', data.eyeColors, requestedFields);
		addPropertyToClass(person, 'films', films, requestedFields);
		addPropertyToClass(person, 'gender', data.gender, requestedFields);
		addPropertyToClass(person, 'hairColors', data.hairColors, requestedFields);
		addPropertyToClass(person, 'height', data.height, requestedFields);
		addPropertyToClass(person, 'mass', data.mass, requestedFields);
		addPropertyToClass(person, 'name', data.name, requestedFields);
		addPropertyToClass(person, 'skinColors', data.skinColors, requestedFields);
		addPropertyToClass(person, 'species', species, requestedFields);
		addPropertyToClass(person, 'starships', starships, requestedFields);
		addPropertyToClass(person, 'vehicles', vehicles, requestedFields);

		return person;
	}

	public static findByFuzzy(
		@Args(() => FuzzyPersonArgs) { person, offset, reverse, take }: FuzzyPersonArgs
	): Fuse.FuseResult<StarWarsApi.Person>[] {
		person = preParseInput(person);

		const fuzzyResult = new FuzzySearch(people, ['name'], { threshold: 0.3 }).runFuzzy(person);

		if (reverse) {
			fuzzyResult.reverse();
		}

		return fuzzyResult.slice(offset, offset + take);
	}
}

interface MapPersonDataToPersonGraphQLParameters {
	data: StarWarsApi.Person;
	requestedFields: GraphQLSet<keyof Person>;
	isReferencedCall?: boolean;
}
