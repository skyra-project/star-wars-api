import personData from '#assets/people';
import { IsString } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

export const people = personData.enumObject();

@ArgsType()
export default class PersonArgs {
	@Field(() => people, { description: 'The person to look up' })
	@IsString()
	public person!: string;
}
