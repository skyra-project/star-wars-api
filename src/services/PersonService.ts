import FuzzyPersonArgs from '#arguments/FuzzyArgs/FuzzyPersonArgs';
import PersonArgs from '#arguments/PersonArgs';
import people from '#assets/people';
import Person from '#structures/Person';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import FuzzySearch from '#utils/FuzzySearch';
import type GraphQLSet from '#utils/GraphQLSet';
import type StarWarsApi from '#utils/star-wars';
import Util from '#utils/util';
import type Fuse from 'fuse.js';
import { Args } from 'type-graphql';

export default class PersonService {
	public getByPersonName(@Args(() => PersonArgs) { person }: PersonArgs): StarWarsApi.Person | undefined {
		return people.get(person);
	}

	// TODO: add parameter to prevent deep-nesting
	// TODO: ensure requestedFields supports deep-nesting
	public mapPersonDataToPersonGraphQL(data: StarWarsApi.Person, requestedFields: GraphQLSet<keyof Person>): Person {
		// const film = new Film();
		const person = new Person();

		addPropertyToClass(person, 'birthYear', data.birthYear, requestedFields);
		addPropertyToClass(person, 'eyeColors', data.eyeColors, requestedFields);
		addPropertyToClass(person, 'films', data.films, requestedFields); // TODO: map to actual GraphQL Class
		addPropertyToClass(person, 'gender', data.gender, requestedFields);
		addPropertyToClass(person, 'hairColors', data.hairColors, requestedFields);
		addPropertyToClass(person, 'height', data.height, requestedFields);
		addPropertyToClass(person, 'homeworld', data.homeworld, requestedFields); // TODO: map to actual GraphQL Class
		addPropertyToClass(person, 'mass', data.mass, requestedFields);
		addPropertyToClass(person, 'name', data.name, requestedFields);
		addPropertyToClass(person, 'skinColors', data.skinColors, requestedFields);
		addPropertyToClass(person, 'species', data.species, requestedFields); // TODO: map to actual GraphQL Class
		addPropertyToClass(person, 'starships', data.starships, requestedFields); // TODO: map to actual GraphQL Class
		addPropertyToClass(person, 'vehicles', data.vehicles, requestedFields); // TODO: map to actual GraphQL Class

		return person;
	}

	public findByFuzzy(@Args(() => FuzzyPersonArgs) { person, offset, reverse, take }: FuzzyPersonArgs): Fuse.FuseResult<StarWarsApi.Person>[] {
		person = Util.preParseInput(person);

		const fuzzyResult = new FuzzySearch(people, ['name'], { threshold: 0.3 }).runFuzzy(person);

		if (reverse) {
			fuzzyResult.reverse();
		}

		return fuzzyResult.slice(offset, offset + take);
	}
}
