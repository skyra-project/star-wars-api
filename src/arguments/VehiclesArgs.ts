import vehiclesData from '#assets/vehicles';
import { IsString } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

export const vehicles = vehiclesData.enumObject();

@ArgsType()
export default class VehicleArgs {
	@Field(() => vehicles, { description: 'The vehicle to look up' })
	@IsString()
	public vehicle!: string;
}
