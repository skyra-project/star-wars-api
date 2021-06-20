import vehiclesData from '#assets/vechicles';
import { ArgsType, Field } from 'type-graphql';

export const vehicles = vehiclesData.enumObject();

@ArgsType()
export default class VehicleArgs {
	@Field(() => String, { description: 'The vehicle to look up' })
	public vehicle!: string;
}
