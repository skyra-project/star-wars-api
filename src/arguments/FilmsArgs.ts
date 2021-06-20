import filmData from '#assets/films';
import { ArgsType, Field } from 'type-graphql';

export const films = filmData.enumObject();

@ArgsType()
export default class FilmArgs {
	@Field(() => String, { description: 'The film to look up' })
	public film!: string;
}
