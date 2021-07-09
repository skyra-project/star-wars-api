import { getPersonName, getPersonWithNested } from '#test-utils/queries/people';
import { gCall } from '#test-utils/testUtils';

describe('getPerson', () => {
	describe('Name only requests', () => {
		test('GIVEN a valid name THEN returns Person', async () => {
			const { data } = await gCall<'getPerson'>({
				source: getPersonName,
				variableValues: { person: 'lukeskywalker' }
			});

			expect(data.getPerson.name).toEqual('Luke Skywalker');
		});
	});

	describe('Full data requests', () => {
		test('GIVEN valid name AND nested data request THEN returns Person WITH nested data', async () => {
			const { data } = await gCall<'getPerson'>({
				source: getPersonWithNested,
				variableValues: { person: 'lukeskywalker' }
			});

			expect(data.getPerson).toContainAllEntries([
				['birthYear', '19BBY'],
				['eyeColors', ['blue']],
				[
					'films',
					[{ title: 'A New Hope' }, { title: 'The Empire Strikes Back' }, { title: 'Return of the Jedi' }, { title: 'Revenge of the Sith' }]
				],
				['gender', 'male'],
				['hairColors', ['blond']],
				['height', 172],
				['homeworld', { name: 'Tatooine' }],
				['mass', 77],
				['name', 'Luke Skywalker'],
				['skinColors', ['fair']],
				['species', []],
				['starships', [{ name: 'X-wing' }, { name: 'Imperial shuttle' }]],
				['vehicles', [{ name: 'Snowspeeder' }, { name: 'Imperial Speeder Bike' }]]
			]);
		});
	});

	describe('Error Requests', () => {
		test('GIVEN an invalid person THEN returns error', async () => {
			const data = await gCall({
				source: getPersonName,
				variableValues: { person: 'totally_invalid_character' }
			});

			expect(data.errors).toHaveLength(1);
			expect(data.errors[0].message).toBe(
				'Variable "$person" got invalid value "totally_invalid_character"; Value "totally_invalid_character" does not exist in "StarWarsPeople" enum.'
			);
		});
	});
});
