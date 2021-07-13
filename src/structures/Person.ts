import Film from '#structures/Film';
import Planet from '#structures/Planet';
import Species from '#structures/Species';
import Starship from '#structures/Starship';
import Vehicle from '#structures/Vehicle';
import { Field, Float, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A character that appeared in Star Wars' })
export default class Person {
	@Field(() => String, { nullable: true, description: 'The year this character was released' })
	public birthYear?: string | null;

	@Field(() => [String], { nullable: true, description: 'The eye colours of this character' })
	public eyeColors?: string[] | null;

	@Field(() => [Film], { description: 'The films this character appeared in' })
	public films!: Film[];

	@Field(() => String, { nullable: true, description: 'The gender of this character, one of "male", "female", "hermaphrodite" or null' })
	public gender?: 'male' | 'female' | 'hermaphrodite' | null;

	@Field(() => [String], { nullable: true, description: "The colours of this person's hair" })
	public hairColors?: string[] | null;

	@Field(() => Int, { nullable: true, description: 'The height of this person in centimetres' })
	public height?: number | null;

	@Field(() => Planet, { nullable: true, description: 'The planet that this person was born on' })
	public homeworld?: Planet | null;

	@Field(() => Float, { nullable: true, description: 'The mass of this person in kilograms when applying standard gravity' })
	public mass?: number | null;

	@Field(() => String, { description: 'The name of this person' })
	public name!: string;

	@Field(() => [String], { nullable: true, description: 'The colours of the skin of this person' })
	public skinColors?: string[] | null;

	@Field(() => [Species], { description: 'The species of this person. Some characters are a mix of multiple species.' })
	public species!: Species[];

	@Field(() => [Starship], { description: 'The starships this character has flown or boarded' })
	public starships!: Starship[];

	@Field(() => [Vehicle], { description: 'The vehicles this character has controlled' })
	public vehicles!: Vehicle[];
}
