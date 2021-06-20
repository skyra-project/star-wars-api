import BaseFuzzyArgs from '#arguments/FuzzyArgs/Base';
import { IsString } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export default class FuzzyPersonArgs extends BaseFuzzyArgs {
	@Field(() => String, { description: 'The person to fuzzily search' })
	@IsString()
	public person!: string;
}
