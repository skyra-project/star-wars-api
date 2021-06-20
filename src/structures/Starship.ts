import Film from '#structures/Film';
import Person from '#structures/Person';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A starship that appears in Star Wars' })
export default class Starship {
	@Field(() => Int, { nullable: true, description: 'The maximum cargo capacity of this starship in kilograms' })
	public cargoCapacity?: number;

	@Field(() => String, {
		nullable: true,
		description: 'The maximum length of time that this starship can provide consumables for its entire crew without having to resupply'
	})
	public consumables?: string;

	@Field(() => Int, { nullable: true, description: 'The cost of this starship, new, in galactic credits' })
	public costInCredits?: number;

	@Field(() => Int, { nullable: true, description: 'The number of personnel needed to run or pilot this starship' })
	public crew?: number;

	@Field(() => [Film], { description: 'The films this starship appeared in' })
	public films!: Film[];

	@Field(() => Int, { nullable: true, description: 'The class of hyperdrive this starship has' })
	public hyperdriveRating?: number;

	@Field(() => Int, { description: 'The length of this starship in meters' })
	public length!: number;

	@Field(() => [String], { description: 'An array of manufacturers of this starship' })
	public manufacturers!: string[];

	@Field(() => Int, {
		nullable: true,
		description: 'The maximum speed of this starship in the atmosphere, or null if this ship is incapable of atmospheric flight'
	})
	public maxAtmospheringSpeed?: number;

	@Field(() => Int, {
		nullable: true,
		description:
			'The maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to the Astronomical Unit (AU), which is the distance between the human sun (Sol) and primary planet (Earth)'
	})
	public MGLT?: number;

	@Field(() => String, { description: 'The model of this starship' })
	public model!: string;

	@Field(() => String, { description: 'The name of this starship' })
	public name!: string;

	@Field(() => Int, { nullable: true, description: 'The number of non-essential people this starship can transport' })
	public passengers?: number;

	@Field(() => [Person], { description: 'The people who have piloted this starship' })
	public pilots!: Person[];

	@Field(() => String, { description: 'The class of this starship' })
	public starshipClass!: string;
}
