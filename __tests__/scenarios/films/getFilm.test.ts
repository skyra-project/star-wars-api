import { getFilmTitle, getFilmWithNested } from '#test-utils/queries/films';
import { gCall } from '#test-utils/testUtils';

describe('getFilm', () => {
	describe('Title only requests', () => {
		test('GIVEN a valid episode number THEN returns Film', async () => {
			const data = await gCall<'getFilm'>({
				source: getFilmTitle,
				variableValues: { film: 1 }
			});

			expect(data.data.getFilm).toContainAllEntries([['title', 'The Phantom Menace']]);
		});
	});

	describe('Full data requests', () => {
		test('GIVEN valid episode number AND nested data request THEN returns Film WITH nested data', async () => {
			const { data } = await gCall<'getFilm'>({
				source: getFilmWithNested,
				variableValues: { film: 1 }
			});

			expect(data.getFilm).toContainAllEntries([
				['title', 'The Phantom Menace'],
				[
					'characters',
					[
						{ name: 'C-3PO' },
						{ name: 'R2-D2' },
						{ name: 'Obi-Wan Kenobi' },
						{ name: 'Anakin Skywalker' },
						{ name: 'Jabba Desilijic Tiure' },
						{ name: 'Yoda' },
						{ name: 'Palpatine' },
						{ name: 'Qui-Gon Jinn' },
						{ name: 'Nute Gunray' },
						{ name: 'Finis Valorum' },
						{ name: 'Padmé Amidala' },
						{ name: 'Jar Jar Binks' },
						{ name: 'Roos Tarpals' },
						{ name: 'Rugor Nass' },
						{ name: 'Ric Olié' },
						{ name: 'Watto' },
						{ name: 'Sebulba' },
						{ name: 'Quarsh Panaka' },
						{ name: 'Shmi Skywalker' },
						{ name: 'Darth Maul' },
						{ name: 'Ayla Secura' },
						{ name: 'Ratts Tyerel' },
						{ name: 'Dud Bolt' },
						{ name: 'Gasgano' },
						{ name: 'Ben Quadinaros' },
						{ name: 'Mace Windu' },
						{ name: 'Ki-Adi-Mundi' },
						{ name: 'Kit Fisto' },
						{ name: 'Eeth Koth' },
						{ name: 'Adi Gallia' },
						{ name: 'Saesee Tiin' },
						{ name: 'Yarael Poof' },
						{ name: 'Plo Koon' },
						{ name: 'Mas Amedda' }
					]
				],
				['planets', [{ name: 'Tatooine' }, { name: 'Naboo' }, { name: 'Coruscant' }]],
				[
					'species',
					[
						{ name: 'Human' },
						{ name: 'Droid' },
						{ name: "Yoda's species" },
						{ name: 'Neimodian' },
						{ name: 'Gungan' },
						{ name: 'Toydarian' },
						{ name: 'Dug' },
						{ name: "Twi'lek" },
						{ name: 'Aleena' },
						{ name: 'Vulptereen' },
						{ name: 'Xexto' },
						{ name: 'Toong' },
						{ name: 'Cerean' },
						{ name: 'Nautolan' },
						{ name: 'Zabrak' },
						{ name: 'Tholothian' },
						{ name: 'Iktotchi' },
						{ name: 'Quermian' },
						{ name: 'Kel Dor' },
						{ name: 'Chagrian' }
					]
				],
				[
					'starships',
					[
						{ name: 'Republic Cruiser' },
						{ name: 'Droid control ship' },
						{ name: 'Naboo fighter' },
						{ name: 'Naboo Royal Starship' },
						{ name: 'Scimitar' }
					]
				],
				[
					'vehicles',
					[
						{ name: 'Vulture Droid' },
						{ name: 'Multi-Troop Transport' },
						{ name: 'Armored Assault Tank' },
						{ name: 'Single Trooper Aerial Platform' },
						{ name: 'C-9979 landing craft' },
						{ name: 'Tribubble bongo' },
						{ name: 'Sith speeder' }
					]
				]
			]);
		});
	});

	describe('Error Requests', () => {
		test('GIVEN an invalid film THEN returns error', async () => {
			const data = await gCall({
				source: getFilmTitle,
				variableValues: { film: 'totally_invalid_film' }
			});

			expect(data.errors).toHaveLength(1);
			expect(data.errors[0].message).toBe(
				'Variable "$film" got invalid value "totally_invalid_film"; Float cannot represent non numeric value: "totally_invalid_film"'
			);
		});
	});
});
