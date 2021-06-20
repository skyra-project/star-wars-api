import Film from '#structures/Film';
import Person from '#structures/Person';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A planet that appeared in Star Wars' })
export default class Planet {
	@Field(() => [String], { nullable: true, description: 'The climates of this planet' })
	public climates?: string[];

	@Field(() => Int, { nullable: true, description: 'The diameter of this planet in kilometres' })
	public diameter?: number;

	@Field(() => [Film], { description: 'The films in which this planet was featured' })
	public films!: Film[];

	@Field(() => Int, {
		nullable: true,
		description:
			'A number denoting the gravity of this planet, were "1" is standard gravity, "2" is twice standard gravity and "0.5" is half standard gravity. This is null for planets for which the gravity is unknown.'
	})
	public gravity?: number;

	@Field(() => String, { description: 'The name of this planet' })
	public name!: string;

	@Field(() => Int, {
		nullable: true,
		description:
			'The number of standard hours this planet takes to orbit around the nearest star. Nullable if the orbital period is unknown for this planet'
	})
	public orbitalPeriod!: number;

	@Field(() => Int, {
		nullable: true,
		description: 'The average population of sentient beings inhabiting this planet. Null if population is unknown.'
	})
	public population?: number;

	@Field(() => [Person], { description: 'The people who inhabit this planet' })
	public residents!: Person[];

	@Field(() => Int, {
		nullable: true,
		description:
			'The number of standard hours this planet takes to rotate around its own axis. Nullable if the rotation period is unknown for this planet'
	})
	public rotationPeriod!: number;

	@Field(() => Int, {
		nullable: true,
		description: 'The percentage of the planet that is naturally occurring water or bodies of water. Null if this is unknown for this planet.'
	})
	public surfaceWater?: number;

	@Field(() => [String], { nullable: true, description: 'The types of terrain of this planet' })
	public terrains?: string[];
}
