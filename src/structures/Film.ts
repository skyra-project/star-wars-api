import { Field, GraphQLISODateTime, ObjectType } from 'type-graphql';
import Person from './Person';
import Planet from './Planet';
import Species from './Species';
import Starship from './Starship';
import Vehicle from './Vehicle';

@ObjectType({ description: 'A Star Wars film' })
export default class Film {
	@Field(() => [Person], { description: 'The characters that appeared in this film' })
	public characters!: Person[];

	@Field(() => String, { description: 'The director of this film' })
	public director!: string;

	@Field(() => String, { description: 'The episode number of this film' })
	public episodeId!: string;

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
