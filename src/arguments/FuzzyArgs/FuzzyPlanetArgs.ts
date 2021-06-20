import BaseFuzzyArgs from '#arguments/FuzzyArgs/Base';
import { IsString } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export default class FuzzyPlanetArgs extends BaseFuzzyArgs {
	@Field(() => String, { description: 'The planet to fuzzily search' })
	@IsString()
	public planet!: string;
}
