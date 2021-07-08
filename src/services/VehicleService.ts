import FuzzyVehicleArgs from '#arguments/FuzzyArgs/FuzzyVehicleArgs';
import VehicleArgs from '#arguments/VehicleArgs';
import vehicles from '#assets/vehicles';
import FilmService from '#services/FilmService';
import PersonService from '#services/PersonService';
import type Film from '#structures/Film';
import type Person from '#structures/Person';
import Vehicle from '#structures/Vehicle';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import FuzzySearch from '#utils/FuzzySearch';
import type GraphQLSet from '#utils/GraphQLSet';
import type StarWarsApi from '#utils/star-wars';
import Util from '#utils/util';
import type Fuse from 'fuse.js';
import { Args } from 'type-graphql';

export default class VehicleService {
	public static getByVehicleName(@Args(() => VehicleArgs) { vehicle }: VehicleArgs): StarWarsApi.Vehicle | undefined {
		return vehicles.get(vehicle);
	}

	public static mapVehicleDataToVehicleGraphQL(
		data: StarWarsApi.Vehicle,
		requestedFields: GraphQLSet<keyof Vehicle>,
		isReferencedCall = false
	): Vehicle {
		const vehicle = new Vehicle();

		const pilots: Person[] = [];
		const films: Film[] = [];

		if (!isReferencedCall) {
			if (requestedFields.has('films')) {
				const filmFields = requestedFields.filterStartsWith<GraphQLSet<keyof Film>>('films.');

				for (const film of data.films) {
					const filmData = FilmService.getByEpisodeNumber({ film })!;
					films.push(FilmService.mapFilmDataToFilmGraphQL(filmData, filmFields, true));
				}
			}

			if (requestedFields.has('pilots')) {
				const characterFields = requestedFields.filterStartsWith<GraphQLSet<keyof Person>>('pilots.');

				for (const character of data.pilots) {
					const personData = PersonService.getByPersonName({ person: character })!;
					pilots.push(PersonService.mapPersonDataToPersonGraphQL(personData, characterFields, true));
				}
			}
		}

		addPropertyToClass(vehicle, 'cargoCapacity', data.cargoCapacity, requestedFields);
		addPropertyToClass(vehicle, 'consumables', data.consumables, requestedFields);
		addPropertyToClass(vehicle, 'costInCredits', data.costInCredits, requestedFields);
		addPropertyToClass(vehicle, 'crew', data.crew, requestedFields);
		addPropertyToClass(vehicle, 'films', films, requestedFields);
		addPropertyToClass(vehicle, 'length', data.length, requestedFields);
		addPropertyToClass(vehicle, 'manufacturers', data.manufacturers, requestedFields);
		addPropertyToClass(vehicle, 'maxAtmospheringSpeed', data.maxAtmospheringSpeed, requestedFields);
		addPropertyToClass(vehicle, 'model', data.model, requestedFields);
		addPropertyToClass(vehicle, 'name', data.name, requestedFields);
		addPropertyToClass(vehicle, 'passengers', data.passengers, requestedFields);
		addPropertyToClass(vehicle, 'pilots', pilots, requestedFields);
		addPropertyToClass(vehicle, 'vehicleClass', data.vehicleClass, requestedFields);

		return vehicle;
	}

	public static findByFuzzy(
		@Args(() => FuzzyVehicleArgs) { vehicle, offset, reverse, take }: FuzzyVehicleArgs
	): Fuse.FuseResult<StarWarsApi.Vehicle>[] {
		vehicle = Util.preParseInput(vehicle);

		const fuzzyResult = new FuzzySearch(vehicles, ['name', 'model'], { threshold: 0.3 }).runFuzzy(vehicle);

		if (reverse) {
			fuzzyResult.reverse();
		}

		return fuzzyResult.slice(offset, offset + take);
	}
}
