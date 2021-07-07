import FuzzyVehicleArgs from '#arguments/FuzzyArgs/FuzzyVehicleArgs';
import VehicleArgs from '#arguments/VehicleArgs';
import VehicleService from '#services/VehicleService';
import Vehicle from '#structures/Vehicle';
import { getRequestedFields } from '#utils/getRequestedFields';
import GraphQLSet from '#utils/GraphQLSet';
import { Args, Query, Resolver } from 'type-graphql';

@Resolver(Vehicle)
export default class VehicleResolver {
	private vehicleService: VehicleService;

	public constructor() {
		this.vehicleService = new VehicleService();
	}

	@Query(() => Vehicle, {
		description: 'Gets details on a Star Wars vehicle, using the name of that vehicle'
	})
	public getVehicle(@Args() args: VehicleArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof Vehicle>): Vehicle {
		const vehicleData = this.vehicleService.getByVehicleName(args);

		if (!vehicleData) {
			throw new Error(`No vehicle found for ${args.vehicle}`);
		}

		const graphqlObject = this.vehicleService.mapVehicleDataToVehicleGraphQL(vehicleData, requestedFields);

		if (!graphqlObject) {
			throw new Error(`Failed to get data for vehicle: ${args.vehicle}`);
		}

		return graphqlObject;
	}

	@Query(() => [Vehicle], {
		description: [
			"Gets details on a Star Wars vehicle, using a fuzzy search on that vehicle' name",
			'This can be used to find multiple results based on the query',
			'By default only 1 result is returned. You can provide the arguments "take", "offset", and "reverse" to modify this behaviour.'
		].join('\n')
	})
	public getFuzzyVehicle(@Args() args: FuzzyVehicleArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof Vehicle>): Vehicle[] {
		let data = this.vehicleService.getByVehicleName(args);

		if (!data) {
			const fuzzyEntry = this.vehicleService.findByFuzzy(args);

			if (fuzzyEntry === undefined || !fuzzyEntry.length) {
				throw new Error(`Failed to get data for vehicle: ${args.vehicle}`);
			}

			// TODO: Actually return multiple results by looping over this
			data = this.vehicleService.getByVehicleName({ vehicle: fuzzyEntry[0].item.name });

			if (!data) {
				throw new Error(`No vehicle found for: ${args.vehicle}`);
			}
		}

		const graphqlObject = this.vehicleService.mapVehicleDataToVehicleGraphQL(data, requestedFields);

		if (!graphqlObject) {
			throw new Error(`Failed to get data for vehicle: ${args.vehicle}`);
		}

		// TODO: Actually return multiple results by looping over this
		return [graphqlObject];
	}
}
