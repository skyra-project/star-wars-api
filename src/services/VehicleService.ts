import FuzzyVehicleArgs from '#arguments/FuzzyArgs/FuzzyVehicleArgs';
import VehicleArgs from '#arguments/VehicleArgs';
import vehicles from '#assets/vehicles';
import Vehicle from '#structures/Vehicle';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import FuzzySearch from '#utils/FuzzySearch';
import type GraphQLSet from '#utils/GraphQLSet';
import type StarWarsApi from '#utils/star-wars';
import Util from '#utils/util';
import type Fuse from 'fuse.js';
import { Args } from 'type-graphql';

export default class VehicleService {
	public getByVehicleName(@Args(() => VehicleArgs) { vehicle }: VehicleArgs): StarWarsApi.Vehicle | undefined {
		return vehicles.get(vehicle);
	}

	// TODO: add parameter to prevent deep-nesting
	// TODO: ensure requestedFields supports deep-nesting
	public mapVehicleDataToVehicleGraphQL(data: StarWarsApi.Vehicle, requestedFields: GraphQLSet<keyof Vehicle>, _isReferencedCall = false): Vehicle {
		const vehicle = new Vehicle();

		addPropertyToClass(vehicle, 'cargoCapacity', data.cargoCapacity, requestedFields);
		addPropertyToClass(vehicle, 'consumables', data.consumables, requestedFields);
		addPropertyToClass(vehicle, 'costInCredits', data.costInCredits, requestedFields);
		addPropertyToClass(vehicle, 'crew', data.crew, requestedFields);
		addPropertyToClass(vehicle, 'length', data.length, requestedFields);
		addPropertyToClass(vehicle, 'manufacturers', data.manufacturers, requestedFields);
		addPropertyToClass(vehicle, 'maxAtmospheringSpeed', data.maxAtmospheringSpeed, requestedFields);
		addPropertyToClass(vehicle, 'model', data.model, requestedFields);
		addPropertyToClass(vehicle, 'name', data.name, requestedFields);
		addPropertyToClass(vehicle, 'passengers', data.passengers, requestedFields);
		addPropertyToClass(vehicle, 'pilots', data.pilots, requestedFields); // TODO: map to actual GraphQL Class
		addPropertyToClass(vehicle, 'vehicleClass', data.vehicleClass, requestedFields);

		return vehicle;
	}

	public findByFuzzy(@Args(() => FuzzyVehicleArgs) { vehicle, offset, reverse, take }: FuzzyVehicleArgs): Fuse.FuseResult<StarWarsApi.Vehicle>[] {
		vehicle = Util.preParseInput(vehicle);

		const fuzzyResult = new FuzzySearch(vehicles, ['name', 'model'], { threshold: 0.3 }).runFuzzy(vehicle);

		if (reverse) {
			fuzzyResult.reverse();
		}

		return fuzzyResult.slice(offset, offset + take);
	}
}
