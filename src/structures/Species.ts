import GraphQLLong from '#scalars/GraphQLLong';
import Film from '#structures/Film';
import Person from '#structures/Person';
import Planet from '#structures/Planet';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A species that appeared in Star Wars' })
export default class Species {
	@Field(() => Int, { nullable: true, description: 'The average heigh of this species, if specified' })
	public averageHeight?: number | null;

	@Field(() => GraphQLLong, { nullable: true, description: 'The average lifespan of this species, if specified' })
	public averageLifespan?: number | null;

	@Field(() => String, { nullable: true, description: 'The classification of this species, such as "mammal" or "reptile"' })
	public classification?: string | null;

	@Field(() => String, { description: 'The designation of this species, such as "sentient"' })
	public designation!: string;

	@Field(() => [String], { nullable: true, description: "A list of common eye colours for this species, or null if the species doesn't have eyes" })
	public eyeColors?: string[] | null;

	@Field(() => [Film], { description: 'The films this species appeared in' })
	public films!: Film[];

	@Field(() => [String], {
		nullable: true,
		description: "A list of common hair colours for this species, or null if the species doesn't have hair"
	})
	public hairColors?: string[] | null;

	@Field(() => Planet, { nullable: true, description: 'The planet this species originates from, or null if unknown' })
	public homeworld?: Planet | null;

	@Field(() => String, { nullable: true, description: 'The language commonly spoken by this species' })
	public language?: string | null;

	@Field(() => String, { description: 'The name of this species' })
	public name!: string;

	@Field(() => [Person], { description: 'The people who are part of this species' })
	public people!: Person[];

	@Field(() => [String], {
		nullable: true,
		description: "A list of common skin colours for this species, or null if the species doesn't have skin"
	})
	public skinColors?: string[] | null;
}
