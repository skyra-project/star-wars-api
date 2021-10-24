import { getSpeciesName, getSpeciesWithNested } from '#test-utils/queries/species';
import { gCall } from '#test-utils/testUtils';

describe('getSpecies', () => {
	describe('Name only requests', () => {
		test('GIVEN a valid name THEN returns Species', async () => {
			const { data } = await gCall<'getSpecies'>({
				source: getSpeciesName,
				variableValues: { species: 'human' }
			});

			expect(data.getSpecies.name).toEqual('Human');
		});
	});

	describe('Full data requests', () => {
		test('GIVEN valid name AND nested data request THEN returns Species WITH nested data', async () => {
			const { data } = await gCall<'getSpecies'>({
				source: getSpeciesWithNested,
				variableValues: { species: 'human' }
			});

			expect(data.getSpecies).toContainAllEntries([
				['averageHeight', 180],
				['averageLifespan', 120],
				['classification', 'mammal'],
				['designation', 'sentient'],
				['eyeColors', ['brown', 'blue', 'green', 'hazel', 'grey', 'amber']],
				[
					'films',
					[
						{ title: 'A New Hope' },
						{ title: 'The Empire Strikes Back' },
						{ title: 'Return of the Jedi' },
						{ title: 'The Phantom Menace' },
						{ title: 'Attack of the Clones' },
						{ title: 'Revenge of the Sith' }
					]
				],
				['hairColors', ['blonde', 'brown', 'black', 'red']],
				['homeworld', { name: 'Coruscant' }],
				['language', 'Galactic Basic'],
				['name', 'Human'],
				['people', [{ name: 'Dormé' }, { name: 'Dooku' }, { name: 'Bail Prestor Organa' }, { name: 'Jocasta Nu' }]],
				['skinColors', ['caucasian', 'black', 'asian', 'hispanic']]
			]);
		});
	});

	describe('Error Requests', () => {
		test('GIVEN an invalid species THEN returns error', async () => {
			const data = await gCall({
				source: getSpeciesName,
				variableValues: { species: 'totally_invalid_species' }
			});

			expect(data.errors).toHaveLength(1);
			expect(data.errors[0].message).toBe(
				'Variable "$species" got invalid value "totally_invalid_species"; Value "totally_invalid_species" does not exist in "StarWarsSpecies" enum.'
			);
		});
	});
});
