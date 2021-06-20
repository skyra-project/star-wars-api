import planetData from '#assets/planets';
import { IsString } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

export const planets = planetData.enumObject();

@ArgsType()
export default class PlanetArgs {
	@Field(() => String, { description: 'The planet to look up' })
	@IsString()
	public planet!: string;
}
