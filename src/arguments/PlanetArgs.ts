import planetData from '#assets/planets';
import { ArgsType, Field } from 'type-graphql';

export const planets = planetData.enumObject();

@ArgsType()
export default class PlanetArgs {
	@Field(() => String, { description: 'The planet to look up' })
	public planet!: string;
}
