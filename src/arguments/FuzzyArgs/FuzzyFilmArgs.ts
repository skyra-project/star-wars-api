import BaseFuzzyArgs from '#arguments/FuzzyArgs/Base';
import { IsString } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export default class FuzzyFilmArgs extends BaseFuzzyArgs {
	@Field(() => String, { description: 'The film to fuzzily search' })
	@IsString()
	public film!: string;
}
