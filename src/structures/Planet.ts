import { Field, Int, ObjectType } from 'type-graphql';
import Film from './Film';
import Person from './Person';

@ObjectType({ description: 'A planet that appears in Star Wars' })
export default class Planet {
	@Field(() => [String], { description: 'The climates of this planet' })
	public climates!: string[];

	@Field(() => Int, { description: 'The diameter of this planet in kilometres' })
	public diameter!: number;

	@Field(() => [Film], { description: 'The films in which this planet was featured' })
	public films!: Film[];

	@Field(() => Int, {
		description:
			'A number denoting the gravity of this planet, were "1" is standard gravity, "2" is twice standard gravity and "0.5" is half standard gravity'
	})
	public gravity!: number;

	@Field(() => String, { description: 'The name of this planet' })
	public name!: string;

	@Field(() => Int, { description: 'The number of standard hours this planet takes to orbit around the nearest star' })
	public orbitalPeriod!: number;

	@Field(() => Int, { description: 'The average population of sentient beings inhabiting this planet' })
	public population!: number;

	@Field(() => [Person], { description: 'The people who inhabit this planet' })
	public residents!: Person[];

	@Field(() => Int, { description: 'The number of standard hours this planet takes to rotate around its own axis' })
	public rotationPeriod!: number;

	@Field(() => Int, { description: 'The percentage of the planet that is naturally occurring water or bodies of water' })
	public surfaceWater!: number;

	@Field(() => [String], { description: 'The types of terrain of this planet' })
	public terrains!: string[];
}
