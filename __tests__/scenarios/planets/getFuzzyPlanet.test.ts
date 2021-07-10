import { getFuzzyPlanetName, getFuzzyPlanetWithNested } from '#test-utils/queries/planets';
import { gCall } from '#test-utils/testUtils';

describe('getFuzzyPlanet', () => {
	describe('Name only requests', () => {
		test('GIVEN a valid name THEN returns Planet', async () => {
			const { data } = await gCall<'getFuzzyPlanet'>({
				source: getFuzzyPlanetName,
				variableValues: { planet: 'alderaan' }
			});

			expect(data.getFuzzyPlanet).toContainAllValues([{ name: 'Alderaan' }]);
		});

		test('GIVEN a valid name query AND multiple results request THEN returns Planet[]', async () => {
			const { data } = await gCall<'getFuzzyPlanet'>({
				source: getFuzzyPlanetName,
				variableValues: { planet: 'a', take: 2 }
			});

			expect(data.getFuzzyPlanet).toContainAllValues([{ name: 'Alderaan' }, { name: 'Aleen Minor' }]);
		});

		test('GIVEN a valid name query AND multiple results AND reverse request THEN returns Planet[]', async () => {
			const { data } = await gCall<'getFuzzyPlanet'>({
				source: getFuzzyPlanetName,
				variableValues: { planet: 'a', take: 2, reverse: true }
			});

			expect(data.getFuzzyPlanet).toContainAllValues([{ name: 'Concord Dawn' }, { name: 'Polis Massa' }]);
		});
	});

	describe('Full data requests', () => {
		test('GIVEN a valid name THEN returns Planet', async () => {
			const { data } = await gCall<'getFuzzyPlanet'>({
				source: getFuzzyPlanetWithNested,
				variableValues: { planet: 'alderaan' }
			});

			expect(data.getFuzzyPlanet).toContainAllValues([
				{
					climates: ['temperate'],
					diameter: 12500,
					films: [{ title: 'A New Hope' }, { title: 'Revenge of the Sith' }],
					gravity: 1,
					name: 'Alderaan',
					orbitalPeriod: 364,
					population: 2000000000,
					residents: [{ name: 'Leia Organa' }, { name: 'Bail Prestor Organa' }, { name: 'Raymus Antilles' }],
					rotationPeriod: 24,
					surfaceWater: 40,
					terrains: ['grasslands', 'mountains']
				}
			]);
		});

		test('GIVEN a valid title query AND multiple results request THEN returns Planet[]', async () => {
			const { data } = await gCall<'getFuzzyPlanet'>({
				source: getFuzzyPlanetWithNested,
				variableValues: { planet: 'a', take: 2 }
			});

			expect(data.getFuzzyPlanet).toContainAllValues([
				{
					climates: ['temperate'],
					diameter: 12500,
					films: [{ title: 'A New Hope' }, { title: 'Revenge of the Sith' }],
					gravity: 1,
					name: 'Alderaan',
					orbitalPeriod: 364,
					population: 2000000000,
					residents: [{ name: 'Leia Organa' }, { name: 'Bail Prestor Organa' }, { name: 'Raymus Antilles' }],
					rotationPeriod: 24,
					surfaceWater: 40,
					terrains: ['grasslands', 'mountains']
				},
				{
					climates: null,
					diameter: null,
					films: [],
					gravity: null,
					name: 'Aleen Minor',
					orbitalPeriod: null,
					population: null,
					residents: [{ name: 'Ratts Tyerel' }],
					rotationPeriod: null,
					surfaceWater: null,
					terrains: null
				}
			]);
		});
	});

	describe('Error Requests', () => {
		test('GIVEN an invalid planet THEN returns error', async () => {
			const data = await gCall({
				source: getFuzzyPlanetName,
				variableValues: { planet: 'totally_invalid_planet', take: 2 }
			});

			expect(data.errors).toHaveLength(1);
			expect(data.errors[0].message).toBe('No planets found for: totally_invalid_planet');
		});
	});
});
