import speciesData from '#assets/species';
import { ArgsType, Field } from 'type-graphql';

export const species = speciesData.enumObject();

@ArgsType()
export default class SpeciesArgs {
	@Field(() => String, { description: 'The species to look up' })
	public species!: string;
}
