import { getFuzzyFilmTitle, getFuzzyFilmWithNested } from '#test-utils/queries/films';
import { gCall } from '#test-utils/testUtils';

describe('getFuzzyFilm', () => {
	describe('Title only requests', () => {
		test('GIVEN a valid episode number THEN returns Film', async () => {
			const { data } = await gCall<'getFuzzyFilm'>({
				source: getFuzzyFilmTitle,
				variableValues: { film: '1' }
			});

			expect(data.getFuzzyFilm).toContainAllValues([{ title: 'The Phantom Menace' }]);
		});

		test('GIVEN a valid title query AND multiple results request THEN returns Film[]', async () => {
			const { data } = await gCall<'getFuzzyFilm'>({
				source: getFuzzyFilmTitle,
				variableValues: { film: 'a', take: 2 }
			});

			expect(data.getFuzzyFilm).toContainAllValues([{ title: 'A New Hope' }, { title: 'Attack of the Clones' }]);
		});
	});

	describe('Full data requests', () => {
		test('GIVEN a valid episode number THEN returns Film', async () => {
			const { data } = await gCall<'getFuzzyFilm'>({
				source: getFuzzyFilmWithNested,
				variableValues: { film: '1' }
			});

			(await import('child_process')).spawn('clip').stdin.end(
				(await import('util')).inspect(Object.values(data.getFuzzyFilm), {
					breakLength: Infinity,
					compact: true,
					depth: Infinity,
					maxArrayLength: Infinity,
					showHidden: false
				})
			);

			expect(data.getFuzzyFilm).toContainAllValues([
				{
					title: 'The Phantom Menace',
					characters: [
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
					],
					planets: [{ name: 'Tatooine' }, { name: 'Naboo' }, { name: 'Coruscant' }],
					species: [
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
					],
					starships: [
						{ name: 'Republic Cruiser' },
						{ name: 'Droid control ship' },
						{ name: 'Naboo fighter' },
						{ name: 'Naboo Royal Starship' },
						{ name: 'Scimitar' }
					],
					vehicles: [
						{ name: 'Vulture Droid' },
						{ name: 'Multi-Troop Transport' },
						{ name: 'Armored Assault Tank' },
						{ name: 'Single Trooper Aerial Platform' },
						{ name: 'C-9979 landing craft' },
						{ name: 'Tribubble bongo' },
						{ name: 'Sith speeder' }
					]
				}
			]);
		});

		test('GIVEN a valid title query AND multiple results request THEN returns Film[]', async () => {
			const { data } = await gCall<'getFuzzyFilm'>({
				source: getFuzzyFilmWithNested,
				variableValues: { film: 'a', take: 2 }
			});

			expect(data.getFuzzyFilm).toContainAllValues([
				{
					title: 'A New Hope',
					characters: [
						{ name: 'Luke Skywalker' },
						{ name: 'C-3PO' },
						{ name: 'R2-D2' },
						{ name: 'Darth Vader' },
						{ name: 'Leia Organa' },
						{ name: 'Owen Lars' },
						{ name: 'Beru Whitesun lars' },
						{ name: 'R5-D4' },
						{ name: 'Biggs Darklighter' },
						{ name: 'Obi-Wan Kenobi' },
						{ name: 'Wilhuff Tarkin' },
						{ name: 'Chewbacca' },
						{ name: 'Han Solo' },
						{ name: 'Greedo' },
						{ name: 'Jabba Desilijic Tiure' },
						{ name: 'Wedge Antilles' },
						{ name: 'Jek Tono Porkins' },
						{ name: 'Raymus Antilles' }
					],
					planets: [{ name: 'Tatooine' }, { name: 'Alderaan' }, { name: 'Yavin IV' }],
					species: [{ name: 'Human' }, { name: 'Droid' }, { name: 'Wookie' }, { name: 'Rodian' }, { name: 'Hutt' }],
					starships: [
						{ name: 'CR90 corvette' },
						{ name: 'Star Destroyer' },
						{ name: 'Sentinel-class landing craft' },
						{ name: 'Death Star' },
						{ name: 'Millennium Falcon' },
						{ name: 'Y-wing' },
						{ name: 'X-wing' },
						{ name: 'TIE Advanced x1' }
					],
					vehicles: [{ name: 'Sand Crawler' }, { name: 'T-16 skyhopper' }, { name: 'X-34 landspeeder' }, { name: 'TIE/LN starfighter' }]
				},
				{
					title: 'Attack of the Clones',
					characters: [
						{ name: 'C-3PO' },
						{ name: 'R2-D2' },
						{ name: 'Owen Lars' },
						{ name: 'Beru Whitesun lars' },
						{ name: 'Obi-Wan Kenobi' },
						{ name: 'Anakin Skywalker' },
						{ name: 'Yoda' },
						{ name: 'Palpatine' },
						{ name: 'Boba Fett' },
						{ name: 'Nute Gunray' },
						{ name: 'Padmé Amidala' },
						{ name: 'Jar Jar Binks' },
						{ name: 'Watto' },
						{ name: 'Shmi Skywalker' },
						{ name: 'Ayla Secura' },
						{ name: 'Mace Windu' },
						{ name: 'Ki-Adi-Mundi' },
						{ name: 'Kit Fisto' },
						{ name: 'Plo Koon' },
						{ name: 'Mas Amedda' },
						{ name: 'Gregar Typho' },
						{ name: 'Cordé' },
						{ name: 'Cliegg Lars' },
						{ name: 'Poggle the Lesser' },
						{ name: 'Luminara Unduli' },
						{ name: 'Barriss Offee' },
						{ name: 'Dormé' },
						{ name: 'Dooku' },
						{ name: 'Bail Prestor Organa' },
						{ name: 'Jango Fett' },
						{ name: 'Zam Wesell' },
						{ name: 'Dexter Jettster' },
						{ name: 'Lama Su' },
						{ name: 'Taun We' },
						{ name: 'Jocasta Nu' },
						{ name: 'R4-P17' },
						{ name: 'Wat Tambor' },
						{ name: 'San Hill' },
						{ name: 'Shaak Ti' },
						{ name: 'Sly Moore' }
					],
					planets: [{ name: 'Tatooine' }, { name: 'Naboo' }, { name: 'Coruscant' }, { name: 'Kamino' }, { name: 'Geonosis' }],
					species: [
						{ name: 'Human' },
						{ name: 'Droid' },
						{ name: "Yoda's species" },
						{ name: 'Gungan' },
						{ name: 'Toydarian' },
						{ name: "Twi'lek" },
						{ name: 'Geonosian' },
						{ name: 'Mirialan' },
						{ name: 'Clawdite' },
						{ name: 'Besalisk' },
						{ name: 'Kaminoan' },
						{ name: 'Skakoan' },
						{ name: 'Muun' },
						{ name: 'Togruta' }
					],
					starships: [
						{ name: 'Slave 1' },
						{ name: 'Droid control ship' },
						{ name: 'Naboo fighter' },
						{ name: 'J-type diplomatic barge' },
						{ name: 'AA-9 Coruscant freighter' },
						{ name: 'Jedi starfighter' },
						{ name: 'H-type Nubian yacht' },
						{ name: 'Republic Assault ship' },
						{ name: 'Solar Sailer' }
					],
					vehicles: [
						{ name: 'Sand Crawler' },
						{ name: 'Zephyr-G swoop bike' },
						{ name: 'Koro-2 Exodrive airspeeder' },
						{ name: 'XJ-6 airspeeder' },
						{ name: 'LAAT/i' },
						{ name: 'LAAT/c' },
						{ name: 'AT-TE' },
						{ name: 'SPHA' },
						{ name: 'Flitknot speeder' },
						{ name: 'Neimoidian shuttle' },
						{ name: 'Geonosian starfighter' }
					]
				}
			]);
		});
	});

	describe('Error Requests', () => {
		test('GIVEN an invalid film THEN returns error', async () => {
			const data = await gCall({
				source: getFuzzyFilmTitle,
				variableValues: { film: 'totally_invalid_film', take: 2 }
			});

			expect(data.errors).toHaveLength(1);
			expect(data.errors[0].message).toBe('No films found for: totally_invalid_film');
		});
	});
});
