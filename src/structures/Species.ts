import { Field, Int, ObjectType } from 'type-graphql';
import Film from './Film';
import Person from './Person';
import Planet from './Planet';

@ObjectType({ description: 'A species that appeared in Star Wars' })
export default class Species {
	@Field(() => Int, { nullable: true, description: 'The average heigh of this species, if specified' })
	public averageHeight?: number;

	@Field(() => Int, { nullable: true, description: 'The average lifespan of this species, if specified' })
	public averageLifespan?: number;

	@Field(() => String, { nullable: true, description: 'The classification of this species, such as "mammal" or "reptile"' })
	public classification?: string;

	@Field(() => String, { description: 'The designation of this species, such as "sentient"' })
	public designation!: string;

	@Field(() => [String], { nullable: true, description: "A list of common eye colours for this species, or null if the species doesn't have eyes" })
	public eyeColors?: string[];

	@Field(() => [Film], { description: 'The films this species appeared in' })
	public films!: Film[];

	@Field(() => [String], {
		nullable: true,
		description: "A list of common hair colours for this species, or null if the species doesn't have hair"
	})
	public hairColors?: string[];

	@Field(() => Planet, { nullable: true, description: 'The planet this species originates from, or null if unknown' })
	public homeworld?: Planet;

	@Field(() => String, { nullable: true, description: 'The language commonly spoken by this species' })
	public language?: string;

	@Field(() => String, { description: 'The name of this species' })
	public name!: string;

	@Field(() => [Person], { description: 'The people who are part of this species' })
	public people!: Person[];

	@Field(() => [String], {
		nullable: true,
		description: "A list of common skin colours for this species, or null if the species doesn't have skin"
	})
	public skinColors?: string[];
}
