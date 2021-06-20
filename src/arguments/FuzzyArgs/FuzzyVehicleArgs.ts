import BaseFuzzyArgs from '#arguments/FuzzyArgs/Base';
import { IsString } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export default class FuzzyVehicleArgs extends BaseFuzzyArgs {
	@Field(() => String, { description: 'The vehicle to fuzzily search' })
	@IsString()
	public vehicle!: string;
}
