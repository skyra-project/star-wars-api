import { getFuzzyPersonName, getFuzzyPersonWithNested } from '#test-utils/queries/people';
import { gCall } from '#test-utils/testUtils';

describe('getFuzzyPerson', () => {
	describe('Name only requests', () => {
		test('GIVEN a valid name THEN returns Person', async () => {
			const { data } = await gCall<'getFuzzyPerson'>({
				source: getFuzzyPersonName,
				variableValues: { person: 'luke' }
			});

			expect(data.getFuzzyPerson).toContainAllValues([{ name: 'Luke Skywalker' }]);
		});

		test('GIVEN a valid name query AND multiple results request THEN returns Person[]', async () => {
			const { data } = await gCall<'getFuzzyPerson'>({
				source: getFuzzyPersonName,
				variableValues: { person: 'l', take: 2 }
			});

			expect(data.getFuzzyPerson).toContainAllValues([{ name: 'Lobot' }, { name: 'Luke Skywalker' }]);
		});

		test('GIVEN a valid name query AND multiple results AND reverse request THEN returns Person[]', async () => {
			const { data } = await gCall<'getFuzzyPerson'>({
				source: getFuzzyPersonName,
				variableValues: { person: 'l', take: 2, reverse: true }
			});

			expect(data.getFuzzyPerson).toContainAllValues([{ name: 'Beru Whitesun Lars' }, { name: 'Jabba Desilijic Tiure' }]);
		});
	});

	describe('Full data requests', () => {
		test('GIVEN a valid name THEN returns Person', async () => {
			const { data } = await gCall<'getFuzzyPerson'>({
				source: getFuzzyPersonWithNested,
				variableValues: { person: 'lukeskywalker' }
			});

			expect(data.getFuzzyPerson).toContainAllValues([
				{
					birthYear: '19BBY',
					eyeColors: ['blue'],
					films: [
						{ title: 'A New Hope' },
						{ title: 'The Empire Strikes Back' },
						{ title: 'Return of the Jedi' },
						{ title: 'Revenge of the Sith' }
					],
					gender: 'male',
					hairColors: ['blond'],
					height: 172,
					homeworld: { name: 'Tatooine' },
					mass: 77,
					name: 'Luke Skywalker',
					skinColors: ['fair'],
					species: [{ name: 'Human' }],
					starships: [{ name: 'X-wing' }, { name: 'Imperial shuttle' }],
					vehicles: [{ name: 'Snowspeeder' }, { name: 'Imperial Speeder Bike' }]
				}
			]);
		});

		test('GIVEN a valid title query AND multiple results request THEN returns Person[]', async () => {
			const { data } = await gCall<'getFuzzyPerson'>({
				source: getFuzzyPersonWithNested,
				variableValues: { person: 'l', take: 2 }
			});

			expect(data.getFuzzyPerson).toContainAllValues([
				{
					birthYear: '37BBY',
					eyeColors: ['blue'],
					films: [{ title: 'The Empire Strikes Back' }],
					gender: 'male',
					hairColors: ['none'],
					height: 175,
					homeworld: { name: 'Bespin' },
					mass: 79,
					name: 'Lobot',
					skinColors: ['light'],
					species: [{ name: 'Human' }],
					starships: [],
					vehicles: []
				},
				{
					birthYear: '19BBY',
					eyeColors: ['blue'],
					films: [
						{ title: 'A New Hope' },
						{ title: 'The Empire Strikes Back' },
						{ title: 'Return of the Jedi' },
						{ title: 'Revenge of the Sith' }
					],
					gender: 'male',
					hairColors: ['blond'],
					height: 172,
					homeworld: { name: 'Tatooine' },
					mass: 77,
					name: 'Luke Skywalker',
					skinColors: ['fair'],
					species: [{ name: 'Human' }],
					starships: [{ name: 'X-wing' }, { name: 'Imperial shuttle' }],
					vehicles: [{ name: 'Snowspeeder' }, { name: 'Imperial Speeder Bike' }]
				}
			]);
		});
	});

	describe('Error Requests', () => {
		test('GIVEN an invalid person THEN returns error', async () => {
			const data = await gCall({
				source: getFuzzyPersonName,
				variableValues: { person: 'totally_invalid_person', take: 2 }
			});

			expect(data.errors).toHaveLength(1);
			expect(data.errors[0].message).toBe('No people found for: totally_invalid_person');
		});
	});
});
