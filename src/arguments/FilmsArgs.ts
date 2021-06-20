import filmData from '#assets/films';
import { IsIn, IsNumber } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

export const films = filmData.enumObject();

@ArgsType()
export default class FilmArgs {
	@Field(() => Int, { description: 'The film to look up, referenced by episode number' })
	@IsNumber()
	@IsIn([1, 2, 3, 4, 5, 6])
	public film!: number;
}
