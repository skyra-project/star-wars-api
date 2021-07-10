import { getStarshipName, getStarshipWithNested } from '#test-utils/queries/starships';
import { gCall } from '#test-utils/testUtils';

describe('getStarship', () => {
	describe('Name only requests', () => {
		test('GIVEN a valid name THEN returns Starship', async () => {
			const { data } = await gCall<'getStarship'>({
				source: getStarshipName,
				variableValues: { starship: 'cr90corvette' }
			});

			expect(data.getStarship.name).toEqual('CR90 corvette');
		});
	});

	describe('Full data requests', () => {
		test('GIVEN valid name AND nested data request THEN returns Starship WITH nested data', async () => {
			const { data } = await gCall<'getStarship'>({
				source: getStarshipWithNested,
				variableValues: { starship: 'cr90corvette' }
			});

			expect(data.getStarship).toContainAllEntries([
				['cargoCapacity', 3000000],
				['consumables', '1 year'],
				['costInCredits', 3500000],
				['crew', 165],
				['films', [{ title: 'A New Hope' }, { title: 'Return of the Jedi' }, { title: 'Revenge of the Sith' }]],
				['hyperdriveRating', 2],
				['length', 150],
				['manufacturers', ['Corellian Engineering Corporation']],
				['maxAtmospheringSpeed', 950],
				['MGLT', 60],
				['model', 'CR90 corvette'],
				['name', 'CR90 corvette'],
				['passengers', 600],
				['pilots', []],
				['starshipClass', 'corvette']
			]);
		});
	});

	describe('Error Requests', () => {
		test('GIVEN an invalid starship THEN returns error', async () => {
			const data = await gCall({
				source: getStarshipName,
				variableValues: { starship: 'totally_invalid_starship' }
			});

			expect(data.errors).toHaveLength(1);
			expect(data.errors[0].message).toBe(
				'Variable "$starship" got invalid value "totally_invalid_starship"; Value "totally_invalid_starship" does not exist in "StarWarsStarships" enum.'
			);
		});
	});
});
