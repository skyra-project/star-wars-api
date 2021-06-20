import Person from '#structures/Person';
import Planet from '#structures/Planet';
import Species from '#structures/Species';
import Starship from '#structures/Starship';
import Vehicle from '#structures/Vehicle';
import { Field, GraphQLISODateTime, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A Star Wars film' })
export default class Film {
	@Field(() => [Person], { description: 'The characters that appeared in this film' })
	public characters!: Person[];

	@Field(() => String, { description: 'The director of this film' })
	public director!: string;

	@Field(() => Int, { description: 'The episode number of this film' })
	public episodeId!: number;

	@Field(() => String, { description: 'The opening crawl text for this film' })
	public openingCrawl!: string;

	@Field(() => [Planet], { description: 'The planets that appeared in this film' })
	public planets!: Planet[];

	@Field(() => [String], { description: 'The producers of this film' })
	public producers!: string[];

	@Field(() => GraphQLISODateTime, { description: 'The date this film released' })
	public releaseDate!: Date;

	@Field(() => [Species], { description: 'The species that appeared in this film' })
	public species!: Species[];

	@Field(() => [Starship], { description: 'The starships that appeared in this film' })
	public starships!: Starship[];

	@Field(() => String, { description: 'The title of this film' })
	public title!: string;

	@Field(() => [Vehicle], { description: 'The vehicle that appeared in this film' })
	public vehicles!: Vehicle[];
}
