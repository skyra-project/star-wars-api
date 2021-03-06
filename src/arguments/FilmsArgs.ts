import { IsIn, IsNumber } from 'class-validator';
import { ArgsType, Field, Float } from 'type-graphql';

@ArgsType()
export default class FilmArgs {
	@Field(() => Float, { description: 'The film to look up, referenced by episode number' })
	@IsNumber()
	@IsIn([1, 2, 3, 4, 5, 6])
	public film!: number;
}
