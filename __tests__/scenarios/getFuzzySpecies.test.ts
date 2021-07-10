import { getFuzzySpeciesName, getFuzzySpeciesWithNested } from '#test-utils/queries/species';
import { gCall } from '#test-utils/testUtils';

describe('getFuzzySpecies', () => {
	describe('Name only requests', () => {
		test('GIVEN a valid name THEN returns Species', async () => {
			const { data } = await gCall<'getFuzzySpecies'>({
				source: getFuzzySpeciesName,
				variableValues: { species: 'human' }
			});

			expect(data.getFuzzySpecies).toContainAllValues([{ name: 'Human' }]);
		});

		test('GIVEN a valid name query AND multiple results request THEN returns Species[]', async () => {
			const { data } = await gCall<'getFuzzySpecies'>({
				source: getFuzzySpeciesName,
				variableValues: { species: 'h', take: 2 }
			});

			expect(data.getFuzzySpecies).toContainAllValues([{ name: 'Human' }, { name: 'Hutt' }]);
		});

		test('GIVEN a valid name query AND multiple results AND reverse request THEN returns Species[]', async () => {
			const { data } = await gCall<'getFuzzySpecies'>({
				source: getFuzzySpeciesName,
				variableValues: { species: 'h', take: 2, reverse: true }
			});

			expect(data.getFuzzySpecies).toContainAllValues([{ name: 'Trandoshan' }, { name: 'Kaleesh' }]);
		});
	});

	describe('Full data requests', () => {
		test('GIVEN a valid name THEN returns Species', async () => {
			const { data } = await gCall<'getFuzzySpecies'>({
				source: getFuzzySpeciesWithNested,
				variableValues: { species: 'human' }
			});

			expect(data.getFuzzySpecies).toContainAllValues([
				{
					averageHeight: 180,
					averageLifespan: 120,
					classification: 'mammal',
					designation: 'sentient',
					eyeColors: ['brown', 'blue', 'green', 'hazel', 'grey', 'amber'],
					films: [
						{ title: 'A New Hope' },
						{ title: 'The Empire Strikes Back' },
						{ title: 'Return of the Jedi' },
						{ title: 'The Phantom Menace' },
						{ title: 'Attack of the Clones' },
						{ title: 'Revenge of the Sith' }
					],
					hairColors: ['blonde', 'brown', 'black', 'red'],
					homeworld: { name: 'Coruscant' },
					language: 'Galactic Basic',
					name: 'Human',
					people: [{ name: 'Dormé' }, { name: 'Dooku' }, { name: 'Bail Prestor Organa' }, { name: 'Jocasta Nu' }],
					skinColors: ['caucasian', 'black', 'asian', 'hispanic']
				}
			]);
		});

		test('GIVEN a valid title query AND multiple results request THEN returns Species[]', async () => {
			const { data } = await gCall<'getFuzzySpecies'>({
				source: getFuzzySpeciesWithNested,
				variableValues: { species: 'd', take: 2 }
			});

			expect(data.getFuzzySpecies).toContainAllValues([
				{
					averageHeight: null,
					averageLifespan: null,
					classification: 'artificial',
					designation: 'sentient',
					eyeColors: null,
					films: [
						{ title: 'A New Hope' },
						{ title: 'The Empire Strikes Back' },
						{ title: 'Return of the Jedi' },
						{ title: 'The Phantom Menace' },
						{ title: 'Attack of the Clones' },
						{ title: 'Revenge of the Sith' }
					],
					hairColors: null,
					homeworld: null,
					language: null,
					name: 'Droid',
					people: [{ name: 'C-3PO' }, { name: 'R2-D2' }, { name: 'R5-D4' }, { name: 'IG-88' }],
					skinColors: null
				},
				{
					averageHeight: 100,
					averageLifespan: null,
					classification: 'mammal',
					designation: 'sentient',
					eyeColors: ['yellow', 'blue'],
					films: [{ title: 'The Phantom Menace' }],
					hairColors: ['none'],
					homeworld: { name: 'Malastare' },
					language: 'Dugese',
					name: 'Dug',
					people: [{ name: 'Sebulba' }],
					skinColors: ['brown', 'purple', 'grey', 'red']
				}
			]);
		});
	});

	describe('Error Requests', () => {
		test('GIVEN an invalid species THEN returns error', async () => {
			const data = await gCall({
				source: getFuzzySpeciesName,
				variableValues: { species: 'totally_invalid_species', take: 2 }
			});

			expect(data.errors).toHaveLength(1);
			expect(data.errors[0].message).toBe('No species found for: totally_invalid_species');
		});
	});
});
