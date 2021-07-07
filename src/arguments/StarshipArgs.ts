import starshipsData from '#assets/starships';
import { IsString } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

export const starships = starshipsData.enumObject();

@ArgsType()
export default class StarshipArgs {
	@Field(() => String, { description: 'The starship to look up' })
	@IsString()
	public starship!: string;
}
