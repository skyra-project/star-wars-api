import { getPlanetName, getPlanetWithNested } from '#test-utils/queries/planets';
import { gCall } from '#test-utils/testUtils';

describe('getPlanet', () => {
	describe('Name only requests', () => {
		test('GIVEN a valid name THEN returns Planet', async () => {
			const { data } = await gCall<'getPlanet'>({
				source: getPlanetName,
				variableValues: { planet: 'alderaan' }
			});

			expect(data.getPlanet.name).toEqual('Alderaan');
		});
	});

	describe('Full data requests', () => {
		test('GIVEN valid name AND nested data request THEN returns Planet WITH nested data', async () => {
			const { data } = await gCall<'getPlanet'>({
				source: getPlanetWithNested,
				variableValues: { planet: 'alderaan' }
			});

			expect(data.getPlanet).toStrictEqual({
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
			});
		});
	});

	describe('Error Requests', () => {
		test('GIVEN an invalid planet THEN returns error', async () => {
			const data = await gCall({
				source: getPlanetName,
				variableValues: { planet: 'totally_invalid_planet' }
			});

			expect(data.errors).toHaveLength(1);
			expect(data.errors[0].message).toBe(
				'Variable "$planet" got invalid value "totally_invalid_planet"; Value "totally_invalid_planet" does not exist in "StarWarsPlanets" enum.'
			);
		});
	});
});
