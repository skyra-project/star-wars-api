import BaseFuzzyArgs from '#arguments/FuzzyArgs/Base';
import { IsString } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export default class FuzzySpeciesArgs extends BaseFuzzyArgs {
	@Field(() => String, { description: 'The species to fuzzily search' })
	@IsString()
	public species!: string;
}
