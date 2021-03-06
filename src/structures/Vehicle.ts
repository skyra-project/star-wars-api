import Film from '#structures/Film';
import Person from '#structures/Person';
import { Field, Float, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A vehicle that appeared in Star Wars' })
export default class Vehicle {
	@Field(() => Int, {
		nullable: true,
		description: 'The maximum cargo capacity of this vehicle in kilograms'
	})
	public cargoCapacity?: number | null;

	@Field(() => Float, {
		nullable: true,
		description:
			'The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. Provided in amount of milliseconds.'
	})
	public consumables?: number | null;

	@Field(() => Int, { nullable: true, description: 'The cost of this vehicle, new, in galactic credits' })
	public costInCredits?: number | null;

	@Field(() => Int, { description: 'The number of personnel needed to run or pilot this vehicle' })
	public crew!: number;

	@Field(() => [Film], { description: 'The films this vehicle appeared in' })
	public films!: Film[];

	@Field(() => Float, { nullable: true, description: 'The length of this vehicle in meters' })
	public length?: number | null;

	@Field(() => [String], { nullable: true, description: 'An array of manufacturers of this vehicle' })
	public manufacturers?: string[] | null;

	@Field(() => Int, {
		nullable: true,
		description: 'The maximum speed of this vehicle in the atmosphere, or null if this ship is incapable of atmospheric flight'
	})
	public maxAtmospheringSpeed?: number | null;

	@Field(() => String, { description: 'The model of this vehicle' })
	public model!: string;

	@Field(() => String, { description: 'The name of this vehicle' })
	public name!: string;

	@Field(() => Int, { nullable: true, description: 'The number of non-essential people this vehicle can transport' })
	public passengers?: number | null;

	@Field(() => [Person], { description: 'The people who have piloted this vehicle' })
	public pilots!: Person[];

	@Field(() => String, { description: 'The class of this vehicle' })
	public vehicleClass!: string;
}
