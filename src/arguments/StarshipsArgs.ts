import starshipsData from '#assets/starships';
import { ArgsType, Field } from 'type-graphql';

export const starships = starshipsData.enumObject();

@ArgsType()
export default class StarShipArgs {
	@Field(() => String, { description: 'The starship to look up' })
	public starship!: string;
}
