import GraphQLCollection from '#utils/GraphQLCollection';
import type StarWarsApi from '#utils/star-wars';

/** The Star Wars Starships */
export default new GraphQLCollection<string, StarWarsApi.Starship>([
	[
		'cr90corvette',
		{
			cargoCapacity: 3000000,
			consumables: '1 year',
			costInCredits: 3500000,
			crew: 165,
			films: [4, 6, 3],
			hyperdriveRating: 2,
			length: 150,
			manufacturers: ['Corellian Engineering Corporation'],
			maxAtmospheringSpeed: 950,
			MGLT: 60,
			model: 'CR90 corvette',
			name: 'CR90 corvette',
			passengers: 600,
			pilots: [],
			starshipClass: 'corvette'
		}
	],
	[
		'stardestroyer',
		{
			cargoCapacity: 36000000,
			consumables: '2 years',
			costInCredits: 150000000,
			crew: 47060,
			films: [4, 5, 6],
			hyperdriveRating: 2,
			length: 1600,
			manufacturers: ['Kuat Drive Yards'],
			maxAtmospheringSpeed: 975,
			MGLT: 60,
			model: 'Imperial I-class Star Destroyer',
			name: 'Star Destroyer',
			passengers: null,
			pilots: [],
			starshipClass: 'Star Destroyer'
		}
	],
	[
		'sentinelclasslandingcraft',
		{
			cargoCapacity: 180000,
			consumables: '1 month',
			costInCredits: 240000,
			crew: 5,
			films: [4],
			hyperdriveRating: 1,
			length: 38,
			manufacturers: ['Sienar Fleet Systems', 'Cyngus Spaceworks'],
			maxAtmospheringSpeed: 1000,
			MGLT: 70,
			model: 'Sentinel-class landing craft',
			name: 'Sentinel-class landing craft',
			passengers: 75,
			pilots: [],
			starshipClass: 'landing craft'
		}
	],
	[
		'deathstar',
		{
			cargoCapacity: 1000000000000,
			consumables: '3 years',
			costInCredits: 1000000000000,
			crew: 342953,
			films: [4],
			hyperdriveRating: 4,
			length: 120000,
			manufacturers: ['Imperial Department of Military Research', 'Sienar Fleet Systems'],
			maxAtmospheringSpeed: null,
			MGLT: 10,
			model: 'DS-1 Orbital Battle Station',
			name: 'Death Star',
			passengers: 843342,
			pilots: [],
			starshipClass: 'Deep Space Mobile Battlestation'
		}
	],
	[
		'millenniumfalcon',
		{
			cargoCapacity: 100000,
			consumables: '2 months',
			costInCredits: 100000,
			crew: 4,
			films: [4, 5, 6],
			hyperdriveRating: 0.5,
			length: 34.37,
			manufacturers: ['Corellian Engineering Corporation'],
			maxAtmospheringSpeed: 1050,
			MGLT: 75,
			model: 'YT-1300 light freighter',
			name: 'Millennium Falcon',
			passengers: 6,
			pilots: ['chewbacca', 'hansolo', 'landocalrissian', 'niennunb'],
			starshipClass: 'Light freighter'
		}
	],
	[
		'ywing',
		{
			cargoCapacity: 110,
			consumables: '1 week',
			costInCredits: 134999,
			crew: 2,
			films: [4, 5, 6],
			hyperdriveRating: 1,
			length: 14,
			manufacturers: ['Koensayr Manufacturing'],
			maxAtmospheringSpeed: 1000,
			MGLT: 80,
			model: 'BTL Y-wing',
			name: 'Y-wing',
			passengers: 0,
			pilots: [],
			starshipClass: 'assault starfighter'
		}
	],
	[
		'xwing',
		{
			cargoCapacity: 110,
			consumables: '1 week',
			costInCredits: 149999,
			crew: 1,
			films: [4, 5, 6],
			hyperdriveRating: 1,
			length: 12.5,
			manufacturers: ['Incom Corporation'],
			maxAtmospheringSpeed: 1050,
			MGLT: 100,
			model: 'T-65 X-wing',
			name: 'X-wing',
			passengers: 0,
			pilots: ['lukeskywalker', 'biggsdarklighter', 'wedgeantilles', 'jektonoporkins'],
			starshipClass: 'Starfighter'
		}
	],
	[
		'tieadvancedx1',
		{
			cargoCapacity: 150,
			consumables: '5 days',
			costInCredits: null,
			crew: 1,
			films: [4],
			hyperdriveRating: 1,
			length: 9.2,
			manufacturers: ['Sienar Fleet Systems'],
			maxAtmospheringSpeed: 1200,
			MGLT: 105,
			model: 'Twin Ion Engine Advanced x1',
			name: 'TIE Advanced x1',
			passengers: 0,
			pilots: ['darthvader'],
			starshipClass: 'Starfighter'
		}
	],
	[
		'executor',
		{
			cargoCapacity: 250000000,
			consumables: '6 years',
			costInCredits: 1143350000,
			crew: 279144,
			films: [5, 6],
			hyperdriveRating: 2,
			length: 19000,
			manufacturers: ['Kuat Drive Yards', 'Fondor Shipyards'],
			maxAtmospheringSpeed: null,
			MGLT: 40,
			model: 'Executor-class star dreadnought',
			name: 'Executor',
			passengers: 38000,
			pilots: [],
			starshipClass: 'Star dreadnought'
		}
	],
	[
		'rebeltransport',
		{
			cargoCapacity: 19000000,
			consumables: '6 months',
			costInCredits: null,
			crew: 6,
			films: [5, 6],
			hyperdriveRating: 4,
			length: 90,
			manufacturers: ['Gallofree Yards', 'Inc.'],
			maxAtmospheringSpeed: 650,
			MGLT: 20,
			model: 'GR-75 medium transport',
			name: 'Rebel transport',
			passengers: 90,
			pilots: [],
			starshipClass: 'Medium transport'
		}
	],
	[
		'slave1',
		{
			cargoCapacity: 70000,
			consumables: '1 month',
			costInCredits: null,
			crew: 1,
			films: [5, 2],
			hyperdriveRating: 3,
			length: 21.5,
			manufacturers: ['Kuat Systems Engineering'],
			maxAtmospheringSpeed: 1000,
			MGLT: 70,
			model: 'Firespray-31-class patrol and attack',
			name: 'Slave 1',
			passengers: 6,
			pilots: ['bobafett'],
			starshipClass: 'Patrol craft'
		}
	],
	[
		'imperialshuttle',
		{
			cargoCapacity: 80000,
			consumables: '2 months',
			costInCredits: 240000,
			crew: 6,
			films: [5, 6],
			hyperdriveRating: 1,
			length: 20,
			manufacturers: ['Sienar Fleet Systems'],
			maxAtmospheringSpeed: 850,
			MGLT: 50,
			model: 'Lambda-class T-4a shuttle',
			name: 'Imperial shuttle',
			passengers: 20,
			pilots: ['lukeskywalker', 'chewbacca', 'hansolo'],
			starshipClass: 'Armed government transport'
		}
	],
	[
		'ef76nebulonbescortfrigate',
		{
			cargoCapacity: 6000000,
			consumables: '2 years',
			costInCredits: 8500000,
			crew: 854,
			films: [5, 6],
			hyperdriveRating: 2,
			length: 300,
			manufacturers: ['Kuat Drive Yards'],
			maxAtmospheringSpeed: 800,
			MGLT: 40,
			model: 'EF76 Nebulon-B escort frigate',
			name: 'EF76 Nebulon-B escort frigate',
			passengers: 75,
			pilots: [],
			starshipClass: 'Escort ship'
		}
	],
	[
		'calamaricruiser',
		{
			cargoCapacity: null,
			consumables: '2 years',
			costInCredits: 104000000,
			crew: 5400,
			films: [6],
			hyperdriveRating: 1,
			length: 1200,
			manufacturers: ['Mon Calamari shipyards'],
			maxAtmospheringSpeed: null,
			MGLT: 60,
			model: 'MC80 Liberty type Star Cruiser',
			name: 'Calamari Cruiser',
			passengers: 1200,
			pilots: [],
			starshipClass: 'Star Cruiser'
		}
	],
	[
		'awing',
		{
			cargoCapacity: 40,
			consumables: '1 week',
			costInCredits: 175000,
			crew: 1,
			films: [6],
			hyperdriveRating: 1,
			length: 9.6,
			manufacturers: ['Alliance Underground Engineering', 'Incom Corporation'],
			maxAtmospheringSpeed: 1300,
			MGLT: 120,
			model: 'RZ-1 A-wing Interceptor',
			name: 'A-wing',
			passengers: 0,
			pilots: ['arvelcrynyd'],
			starshipClass: 'Starfighter'
		}
	],
	[
		'bwing',
		{
			cargoCapacity: 45,
			consumables: '1 week',
			costInCredits: 220000,
			crew: 1,
			films: [6],
			hyperdriveRating: 2,
			length: 16.9,
			manufacturers: ['Slayn & Korpil'],
			maxAtmospheringSpeed: 950,
			MGLT: 91,
			model: 'A/SF-01 B-wing starfighter',
			name: 'B-wing',
			passengers: 0,
			pilots: [],
			starshipClass: 'Assault Starfighter'
		}
	],
	[
		'republiccruiser',
		{
			cargoCapacity: null,
			consumables: null,
			costInCredits: null,
			crew: 9,
			films: [1],
			hyperdriveRating: 2,
			length: 115,
			manufacturers: ['Corellian Engineering Corporation'],
			maxAtmospheringSpeed: 900,
			MGLT: null,
			model: 'Consular-class cruiser',
			name: 'Republic Cruiser',
			passengers: 16,
			pilots: [],
			starshipClass: 'Space cruiser'
		}
	],
	[
		'droidcontrolship',
		{
			cargoCapacity: 4000000000,
			consumables: '500 days',
			costInCredits: null,
			crew: 175,
			films: [1, 2, 3],
			hyperdriveRating: 2,
			length: 3170,
			manufacturers: ['Hoersch-Kessel Drive', 'Inc.'],
			maxAtmospheringSpeed: null,
			MGLT: null,
			model: 'Lucrehulk-class Droid Control Ship',
			name: 'Droid control ship',
			passengers: 139000,
			pilots: [],
			starshipClass: 'Droid control ship'
		}
	],
	[
		'naboofighter',
		{
			cargoCapacity: 65,
			consumables: '7 days',
			costInCredits: 200000,
			crew: 1,
			films: [1, 2],
			hyperdriveRating: 1,
			length: 11,
			manufacturers: ['Theed Palace Space Vessel Engineering Corps'],
			maxAtmospheringSpeed: 1100,
			MGLT: null,
			model: 'N-1 starfighter',
			name: 'Naboo fighter',
			passengers: 0,
			pilots: ['anakinskywalker', 'padm├®amidala', 'gregartypho'],
			starshipClass: 'Starfighter'
		}
	],
	[
		'nabooroyalstarship',
		{
			cargoCapacity: null,
			consumables: null,
			costInCredits: null,
			crew: 8,
			films: [1],
			hyperdriveRating: 1.8,
			length: 76,
			manufacturers: ['Theed Palace Space Vessel Engineering Corps', 'Nubia Star Drives'],
			maxAtmospheringSpeed: 920,
			MGLT: null,
			model: 'J-type 327 Nubian royal starship',
			name: 'Naboo Royal Starship',
			passengers: null,
			pilots: ['ricoli├®'],
			starshipClass: 'yacht'
		}
	],
	[
		'scimitar',
		{
			cargoCapacity: 2500000,
			consumables: '30 days',
			costInCredits: 55000000,
			crew: 1,
			films: [1],
			hyperdriveRating: 1.5,
			length: 26.5,
			manufacturers: ['Republic Sienar Systems'],
			maxAtmospheringSpeed: 1180,
			MGLT: null,
			model: 'Star Courier',
			name: 'Scimitar',
			passengers: 6,
			pilots: ['darthmaul'],
			starshipClass: 'Space Transport'
		}
	],
	[
		'jtypediplomaticbarge',
		{
			cargoCapacity: null,
			consumables: '1 year',
			costInCredits: 2000000,
			crew: 5,
			films: [2],
			hyperdriveRating: 0.7,
			length: 39,
			manufacturers: ['Theed Palace Space Vessel Engineering Corps', 'Nubia Star Drives'],
			maxAtmospheringSpeed: 2000,
			MGLT: null,
			model: 'J-type diplomatic barge',
			name: 'J-type diplomatic barge',
			passengers: 10,
			pilots: [],
			starshipClass: 'Diplomatic barge'
		}
	],
	[
		'aa9coruscantfreighter',
		{
			cargoCapacity: null,
			consumables: null,
			costInCredits: null,
			crew: null,
			films: [2],
			hyperdriveRating: null,
			length: 390,
			manufacturers: ['Botajef Shipyards'],
			maxAtmospheringSpeed: null,
			MGLT: null,
			model: 'Botajef AA-9 Freighter-Liner',
			name: 'AA-9 Coruscant freighter',
			passengers: 30000,
			pilots: [],
			starshipClass: 'freighter'
		}
	],
	[
		'jedistarfighter',
		{
			cargoCapacity: 60,
			consumables: '7 days',
			costInCredits: 180000,
			crew: 1,
			films: [2, 3],
			hyperdriveRating: 1,
			length: 8,
			manufacturers: ['Kuat Systems Engineering'],
			maxAtmospheringSpeed: 1150,
			MGLT: null,
			model: 'Delta-7 Aethersprite-class interceptor',
			name: 'Jedi starfighter',
			passengers: 0,
			pilots: ['obiwankenobi', 'plokoon'],
			starshipClass: 'Starfighter'
		}
	],
	[
		'htypenubianyacht',
		{
			cargoCapacity: null,
			consumables: null,
			costInCredits: null,
			crew: 4,
			films: [2],
			hyperdriveRating: 0.9,
			length: 47.9,
			manufacturers: ['Theed Palace Space Vessel Engineering Corps'],
			maxAtmospheringSpeed: 8000,
			MGLT: null,
			model: 'H-type Nubian yacht',
			name: 'H-type Nubian yacht',
			passengers: null,
			pilots: ['padm├®amidala'],
			starshipClass: 'yacht'
		}
	],
	[
		'republicassaultship',
		{
			cargoCapacity: 11250000,
			consumables: '2 years',
			costInCredits: null,
			crew: 700,
			films: [2],
			hyperdriveRating: 0.6,
			length: 752,
			manufacturers: ['Rothana Heavy Engineering'],
			maxAtmospheringSpeed: null,
			MGLT: null,
			model: 'Acclamator I-class assault ship',
			name: 'Republic Assault ship',
			passengers: 16000,
			pilots: [],
			starshipClass: 'assault ship'
		}
	],
	[
		'solarsailer',
		{
			cargoCapacity: 240,
			consumables: '7 days',
			costInCredits: 35700,
			crew: 3,
			films: [2],
			hyperdriveRating: 1.5,
			length: 15.2,
			manufacturers: ['Huppla Pasa Tisc Shipwrights Collective'],
			maxAtmospheringSpeed: 1600,
			MGLT: null,
			model: 'Punworcca 116-class interstellar sloop',
			name: 'Solar Sailer',
			passengers: 11,
			pilots: [],
			starshipClass: 'yacht'
		}
	],
	[
		'tradefederationcruiser',
		{
			cargoCapacity: 50000000,
			consumables: '4 years',
			costInCredits: 125000000,
			crew: 600,
			films: [3],
			hyperdriveRating: 1.5,
			length: 1088,
			manufacturers: ['Rendili StarDrive', 'Free Dac Volunteers Engineering corps.'],
			maxAtmospheringSpeed: 1050,
			MGLT: null,
			model: 'Providence-class carrier/destroyer',
			name: 'Trade Federation cruiser',
			passengers: 48247,
			pilots: ['obiwankenobi', 'anakinskywalker'],
			starshipClass: 'capital ship'
		}
	],
	[
		'thetaclasst2cshuttle',
		{
			cargoCapacity: 50000,
			consumables: '56 days',
			costInCredits: 1000000,
			crew: 5,
			films: [3],
			hyperdriveRating: 1,
			length: 18.5,
			manufacturers: ['Cygnus Spaceworks'],
			maxAtmospheringSpeed: 2000,
			MGLT: null,
			model: 'Theta-class T-2c shuttle',
			name: 'Theta-class T-2c shuttle',
			passengers: 16,
			pilots: [],
			starshipClass: 'transport'
		}
	],
	[
		'republicattackcruiser',
		{
			cargoCapacity: 20000000,
			consumables: '2 years',
			costInCredits: 59000000,
			crew: 7400,
			films: [3],
			hyperdriveRating: 1,
			length: 1137,
			manufacturers: ['Kuat Drive Yards', 'Allanteen Six shipyards'],
			maxAtmospheringSpeed: 975,
			MGLT: null,
			model: 'Senator-class Star Destroyer',
			name: 'Republic attack cruiser',
			passengers: 2000,
			pilots: [],
			starshipClass: 'star destroyer'
		}
	],
	[
		'naboostarskiff',
		{
			cargoCapacity: null,
			consumables: null,
			costInCredits: null,
			crew: 3,
			films: [3],
			hyperdriveRating: 0.5,
			length: 29.2,
			manufacturers: ['Theed Palace Space Vessel Engineering Corps/Nubia Star Drives', 'Incorporated'],
			maxAtmospheringSpeed: 1050,
			MGLT: null,
			model: 'J-type star skiff',
			name: 'Naboo star skiff',
			passengers: 3,
			pilots: ['obiwankenobi', 'padm├®amidala'],
			starshipClass: 'yacht'
		}
	],
	[
		'jediinterceptor',
		{
			cargoCapacity: 60,
			consumables: '2 days',
			costInCredits: 320000,
			crew: 1,
			films: [3],
			hyperdriveRating: 1,
			length: 5.47,
			manufacturers: ['Kuat Systems Engineering'],
			maxAtmospheringSpeed: 1500,
			MGLT: null,
			model: 'Eta-2 Actis-class light interceptor',
			name: 'Jedi Interceptor',
			passengers: 0,
			pilots: ['obiwankenobi', 'anakinskywalker'],
			starshipClass: 'starfighter'
		}
	],
	[
		'arc170',
		{
			cargoCapacity: 110,
			consumables: '5 days',
			costInCredits: 155000,
			crew: 3,
			films: [3],
			hyperdriveRating: 1,
			length: 14.5,
			manufacturers: ['Incom Corporation', 'Subpro Corporation'],
			maxAtmospheringSpeed: 1000,
			MGLT: 100,
			model: 'Aggressive Reconnaissance-170 starfighte',
			name: 'arc-170',
			passengers: 0,
			pilots: [],
			starshipClass: 'starfighter'
		}
	],
	[
		'bankingclanfrigte',
		{
			cargoCapacity: 40000000,
			consumables: '2 years',
			costInCredits: 57000000,
			crew: 200,
			films: [3],
			hyperdriveRating: 1,
			length: 825,
			manufacturers: ['Hoersch-Kessel Drive', 'Inc', 'Gwori Revolutionary Industries'],
			maxAtmospheringSpeed: null,
			MGLT: null,
			model: 'Munificent-class star frigate',
			name: 'Banking clan frigte',
			passengers: null,
			pilots: [],
			starshipClass: 'cruiser'
		}
	],
	[
		'belbullab22starfighter',
		{
			cargoCapacity: 140,
			consumables: '7 days',
			costInCredits: 168000,
			crew: 1,
			films: [3],
			hyperdriveRating: 6,
			length: 6.71,
			manufacturers: ['Feethan Ottraw Scalable Assemblies'],
			maxAtmospheringSpeed: 1100,
			MGLT: null,
			model: 'Belbullab-22 starfighter',
			name: 'Belbullab-22 starfighter',
			passengers: 0,
			pilots: ['obiwankenobi', 'grievous'],
			starshipClass: 'starfighter'
		}
	],
	[
		'vwing',
		{
			cargoCapacity: 60,
			consumables: '15 hours',
			costInCredits: 102500,
			crew: 1,
			films: [3],
			hyperdriveRating: 1,
			length: 7.9,
			manufacturers: ['Kuat Systems Engineering'],
			maxAtmospheringSpeed: 1050,
			MGLT: null,
			model: 'Alpha-3 Nimbus-class V-wing starfighter',
			name: 'V-wing',
			passengers: 0,
			pilots: [],
			starshipClass: 'starfighter'
		}
	]
]);
