import FuzzyPersonArgs from '#arguments/FuzzyArgs/FuzzyPersonArgs';
import PersonArgs from '#arguments/PersonArgs';
import PersonService from '#services/PersonService';
import Person from '#structures/Person';
import { getRequestedFields } from '#utils/getRequestedFields';
import GraphQLSet from '#utils/GraphQLSet';
import { Args, Query, Resolver } from 'type-graphql';

@Resolver(Person)
export default class PersonResolver {
	private personService: PersonService;

	public constructor() {
		this.personService = new PersonService();
	}

	@Query(() => Person, {
		description: 'Gets details on a Star Wars person, using the name of that person'
	})
	public getPerson(@Args() args: PersonArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof Person>): Person {
		const personData = this.personService.getByPersonName(args);

		if (!personData) {
			throw new Error(`No person found for ${args.person}`);
		}

		const graphqlObject = this.personService.mapPersonDataToPersonGraphQL(personData, requestedFields);

		if (!graphqlObject) {
			throw new Error(`Failed to get data for person: ${args.person}`);
		}

		return graphqlObject;
	}

	@Query(() => [Person], {
		description: [
			"Gets details on a Star Wars person, using a fuzzy search on that person's name",
			'This can be used to find multiple results based on the query',
			'By default only 1 result is returned. You can provide the arguments "take", "offset", and "reverse" to modify this behaviour.'
		].join('\n')
	})
	public getFuzzyPerson(@Args() args: FuzzyPersonArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof Person>): Person[] {
		let data = this.personService.getByPersonName(args);

		if (!data) {
			const fuzzyEntry = this.personService.findByFuzzy(args);

			if (fuzzyEntry === undefined || !fuzzyEntry.length) {
				throw new Error(`Failed to get data for person: ${args.person}`);
			}

			// TODO: Actually return multiple results by looping over this
			data = this.personService.getByPersonName({ person: fuzzyEntry[0].item.name });

			if (!data) {
				throw new Error(`No person found for: ${args.person}`);
			}
		}

		const graphqlObject = this.personService.mapPersonDataToPersonGraphQL(data, requestedFields);

		if (!graphqlObject) {
			throw new Error(`Failed to get data for person: ${args.person}`);
		}

		// TODO: Actually return multiple results by looping over this
		return [graphqlObject];
	}
}
