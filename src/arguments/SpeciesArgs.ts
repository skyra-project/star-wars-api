import speciesData from '#assets/species';
import { IsString } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

export const species = speciesData.enumObject();

@ArgsType()
export default class SpeciesArgs {
	@Field(() => species, { description: 'The species to look up' })
	@IsString()
	public species!: string;
}
