import personData from '#assets/people';
import { ArgsType, Field } from 'type-graphql';

export const people = personData.enumObject();

@ArgsType()
export default class PersonArgs {
	@Field(() => String, { description: 'The person to look up' })
	public person!: string;
}
