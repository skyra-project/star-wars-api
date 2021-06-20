import { Field, Int, ObjectType } from 'type-graphql';
import Film from './Film';
import Planet from './Planet';
import Species from './Species';
import Starship from './Starship';
import Vehicle from './Vehicle';

@ObjectType({ description: 'A character that appears in Star Wars' })
export default class Person {
	@Field(() => String, { description: 'The year this character was released' })
	public birthYear!: string;

	@Field(() => [String], { description: 'The eye colours of this character' })
	public eyeColors!: string[];

	@Field(() => [Film], { description: 'The films this character appears in' })
	public films!: Film[];

	@Field(() => String, { nullable: true, description: 'The gender of this character, one of "male", "female" or null' })
	public gender?: 'male' | 'female' | null;

	@Field(() => [String], { description: "The colours of this person's hair" })
	public hairColors!: string[];

	@Field(() => Int, { description: 'The height of this person in centimetres' })
	public height!: number;

	@Field(() => Planet, { description: 'The planet that this person was born on' })
	public homeworld!: Planet;

	@Field(() => Int, { description: 'The mass of this person in kilograms when applying standard gravity' })
	public mass!: number;

	@Field(() => String, { description: 'The name of this person' })
	public name!: string;

	@Field(() => [String], { description: 'The colours of the skin of this person' })
	public skinColors!: string[];

	@Field(() => [Species], { description: 'The species of this person. Some characters are a mix of multiple species.' })
	public species!: Species[];

	@Field(() => [Starship], { description: 'The starships this character has flown or boarded' })
	public starships!: Starship[];

	@Field(() => [Vehicle], { description: 'The vehicles this character has controlled' })
	public vehicles!: Vehicle[];
}
