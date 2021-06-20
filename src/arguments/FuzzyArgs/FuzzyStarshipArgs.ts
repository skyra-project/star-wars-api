import BaseFuzzyArgs from '#arguments/FuzzyArgs/Base';
import { IsString } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export default class FuzzyStarshipArgs extends BaseFuzzyArgs {
	@Field(() => String, { description: 'The starship to fuzzily search' })
	@IsString()
	public starship!: string;
}
