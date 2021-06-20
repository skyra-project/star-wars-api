import { Field, ObjectType, Int } from 'type-graphql';
import Person from './Person';

@ObjectType({ description: 'A vehicle that appears in Star Wars' })
export default class Vehicle {
	@Field(() => Int, { description: 'The maximum cargo capacity of this vehicle in kilograms' })
	public cargoCapacity!: number;

	@Field(() => String, {
		description: 'The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply'
	})
	public consumables!: string;

	@Field(() => Int, { description: 'The cost of this vehicle, new, in galactic credits' })
	public costInCredits!: number;

	@Field(() => Int, { description: 'The number of personnel needed to run or pilot this vehicle' })
	public crew!: number;

	@Field(() => Int, { description: 'The length of this vehicle in meters' })
	public length!: number;

	@Field(() => [String], { description: 'An array of manufacturers of this vehicle' })
	public manufacturer!: string[];

	@Field(() => Int, {
		nullable: true,
		description: 'The maximum speed of this vehicle in the atmosphere, or null if this ship is incapable of atmospheric flight'
	})
	public maxAtmospheringSpeed?: number;

	@Field(() => String, { description: 'The model of this vehicle' })
	public model!: string;

	@Field(() => String, { description: 'The name of this vehicle' })
	public name!: string;

	@Field(() => Int, { description: 'The number of non-essential people this vehicle can transport' })
	public passengers!: number;

	@Field(() => [Person], { description: 'The people who have piloted this vehicle' })
	public pilots!: Person[];

	@Field(() => String, { description: 'The class of this vehicle' })
	public vehicleClass!: string;
}
