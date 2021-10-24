import { getFuzzyStarshipName, getFuzzyStarshipWithNested } from '#test-utils/queries/starships';
import { gCall } from '#test-utils/testUtils';

describe('getFuzzyStarship', () => {
	describe('Name only requests', () => {
		test('GIVEN a valid name THEN returns Starship', async () => {
			const { data } = await gCall<'getFuzzyStarship'>({
				source: getFuzzyStarshipName,
				variableValues: { starship: 'c' }
			});

			expect(data.getFuzzyStarship).toContainAllValues([{ name: 'CR90 corvette' }]);
		});

		test('GIVEN a valid name query AND multiple results request THEN returns Starship[]', async () => {
			const { data } = await gCall<'getFuzzyStarship'>({
				source: getFuzzyStarshipName,
				variableValues: { starship: 'h', take: 2 }
			});

			expect(data.getFuzzyStarship).toContainAllValues([{ name: 'H-type Nubian yacht' }, { name: 'Theta-class T-2c shuttle' }]);
		});

		test('GIVEN a valid name query AND multiple results AND reverse request THEN returns Starship[]', async () => {
			const { data } = await gCall<'getFuzzyStarship'>({
				source: getFuzzyStarshipName,
				variableValues: { starship: 'h', take: 2, reverse: true }
			});

			expect(data.getFuzzyStarship).toContainAllValues([{ name: 'Executor' }, { name: 'Jedi Interceptor' }]);
		});
	});

	describe('Full data requests', () => {
		test('GIVEN a valid name THEN returns Starship', async () => {
			const { data } = await gCall<'getFuzzyStarship'>({
				source: getFuzzyStarshipWithNested,
				variableValues: { starship: 'd' }
			});

			expect(data.getFuzzyStarship).toContainAllValues([
				{
					MGLT: 10,
					cargoCapacity: 1000000000000,
					consumables: 94672800000,
					costInCredits: 1000000000000,
					crew: 342953,
					films: [{ title: 'A New Hope' }],
					hyperdriveRating: 4,
					length: 120000,
					manufacturers: ['Imperial Department of Military Research', 'Sienar Fleet Systems'],
					maxAtmospheringSpeed: null,
					model: 'DS-1 Orbital Battle Station',
					name: 'Death Star',
					passengers: 843342,
					pilots: [],
					starshipClass: 'Deep Space Mobile Battlestation'
				}
			]);
		});

		test('GIVEN a valid title query AND multiple results request THEN returns Starship[]', async () => {
			const { data } = await gCall<'getFuzzyStarship'>({
				source: getFuzzyStarshipWithNested,
				variableValues: { starship: 'd', take: 2 }
			});

			expect(data.getFuzzyStarship).toContainAllValues([
				{
					MGLT: 10,
					cargoCapacity: 1000000000000,
					consumables: 94672800000,
					costInCredits: 1000000000000,
					crew: 342953,
					films: [{ title: 'A New Hope' }],
					hyperdriveRating: 4,
					length: 120000,
					manufacturers: ['Imperial Department of Military Research', 'Sienar Fleet Systems'],
					maxAtmospheringSpeed: null,
					model: 'DS-1 Orbital Battle Station',
					name: 'Death Star',
					passengers: 843342,
					pilots: [],
					starshipClass: 'Deep Space Mobile Battlestation'
				},
				{
					MGLT: null,
					cargoCapacity: 60,
					consumables: 604800000,
					costInCredits: 180000,
					crew: 1,
					films: [{ title: 'Attack of the Clones' }, { title: 'Revenge of the Sith' }],
					hyperdriveRating: 1,
					length: 8,
					manufacturers: ['Kuat Systems Engineering'],
					maxAtmospheringSpeed: 1150,
					model: 'Delta-7 Aethersprite-class interceptor',
					name: 'Jedi starfighter',
					passengers: 0,
					pilots: [{ name: 'Obi-Wan Kenobi' }, { name: 'Plo Koon' }],
					starshipClass: 'Starfighter'
				}
			]);
		});
	});

	describe('Error Requests', () => {
		test('GIVEN an invalid starship THEN returns error', async () => {
			const data = await gCall({
				source: getFuzzyStarshipName,
				variableValues: { starship: 'totally_invalid_starship', take: 2 }
			});

			expect(data.errors).toHaveLength(1);
			expect(data.errors[0].message).toBe('No starships found for: totally_invalid_starship');
		});
	});
});
