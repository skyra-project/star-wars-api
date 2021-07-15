import GraphQLCollection from '#utils/GraphQLCollection';
import type StarWarsApi from '#utils/star-wars';

/** The Star Wars Planets */
export default new GraphQLCollection<string, StarWarsApi.Planet>([
	[
		'tatooine',
		{
			climate: ['arid'],
			diameter: 10465,
			films: [4, 6, 1, 2, 3],
			gravity: 1,
			name: 'Tatooine',
			orbitalPeriod: '304',
			population: 200000,
			residents: [
				'lukeskywalker',
				'c3po',
				'darthvader',
				'owenlars',
				'beruwhitesunlars',
				'r5d4',
				'biggsdarklighter',
				'anakinskywalker',
				'shmiskywalker',
				'cliegglars'
			],
			rotationPeriod: '23',
			surfaceWater: '1',
			terrains: ['desert']
		}
	],
	[
		'alderaan',
		{
			climate: ['temperate'],
			diameter: 12500,
			films: [4, 3],
			gravity: 1,
			name: 'Alderaan',
			orbitalPeriod: '364',
			population: 2000000000,
			residents: ['leiaorgana', 'bailprestororgana', 'raymusantilles'],
			rotationPeriod: '24',
			surfaceWater: '40',
			terrains: ['grasslands', 'mountains']
		}
	],
	[
		'yaviniv',
		{
			climate: ['temperate', 'tropical'],
			diameter: 10200,
			films: [4],
			gravity: 1,
			name: 'Yavin IV',
			orbitalPeriod: '4818',
			population: 1000,
			residents: [],
			rotationPeriod: '24',
			surfaceWater: '8',
			terrains: ['jungle', 'rainforests']
		}
	],
	[
		'hoth',
		{
			climate: ['frozen'],
			diameter: 7200,
			films: [5],
			gravity: 1.1,
			name: 'Hoth',
			orbitalPeriod: '549',
			population: null,
			residents: [],
			rotationPeriod: '23',
			surfaceWater: '100',
			terrains: ['tundra', 'ice caves', 'mountain ranges']
		}
	],
	[
		'dagobah',
		{
			climate: ['murky'],
			diameter: 8900,
			films: [5, 6, 3],
			gravity: null,
			name: 'Dagobah',
			orbitalPeriod: '341',
			population: null,
			residents: [],
			rotationPeriod: '23',
			surfaceWater: '8',
			terrains: ['swamp', 'jungles']
		}
	],
	[
		'bespin',
		{
			climate: ['temperate'],
			diameter: 118000,
			films: [5],
			gravity: 1,
			name: 'Bespin',
			orbitalPeriod: '5110',
			population: 6000000,
			residents: ['lobot'],
			rotationPeriod: '12',
			surfaceWater: '0',
			terrains: ['gas giant']
		}
	],
	[
		'endor',
		{
			climate: ['temperate'],
			diameter: 4900,
			films: [6],
			gravity: 0.85,
			name: 'Endor',
			orbitalPeriod: '402',
			population: 30000000,
			residents: ['wicketsystriwarrick'],
			rotationPeriod: '18',
			surfaceWater: '8',
			terrains: ['forests', 'mountains', 'lakes']
		}
	],
	[
		'naboo',
		{
			climate: ['temperate'],
			diameter: 12120,
			films: [6, 1, 2, 3],
			gravity: 1,
			name: 'Naboo',
			orbitalPeriod: '312',
			population: 4500000000,
			residents: [
				'r2d2',
				'palpatine',
				'padmeamidala',
				'jarjarbinks',
				'roostarpals',
				'rugornass',
				'ricolie',
				'quarshpanaka',
				'gregartypho',
				'corde',
				'dorme'
			],
			rotationPeriod: '26',
			surfaceWater: '12',
			terrains: ['grassy hills', 'swamps', 'forests', 'mountains']
		}
	],
	[
		'coruscant',
		{
			climate: ['temperate'],
			diameter: 12240,
			films: [6, 1, 2, 3],
			gravity: 1,
			name: 'Coruscant',
			orbitalPeriod: '368',
			population: 1000000000000,
			residents: ['finisvalorum', 'adigallia', 'jocastanu'],
			rotationPeriod: '24',
			surfaceWater: null,
			terrains: ['cityscape', 'mountains']
		}
	],
	[
		'kamino',
		{
			climate: ['temperate'],
			diameter: 19720,
			films: [2],
			gravity: 1,
			name: 'Kamino',
			orbitalPeriod: '463',
			population: 1000000000,
			residents: ['bobafett', 'lamasu', 'taunwe'],
			rotationPeriod: '27',
			surfaceWater: '100',
			terrains: ['ocean']
		}
	],
	[
		'geonosis',
		{
			climate: ['temperate', 'arid'],
			diameter: 11370,
			films: [2],
			gravity: 0.9,
			name: 'Geonosis',
			orbitalPeriod: '256',
			population: 100000000000,
			residents: ['pogglethelesser'],
			rotationPeriod: '30',
			surfaceWater: '5',
			terrains: ['rock', 'desert', 'mountain', 'barren']
		}
	],
	[
		'utapau',
		{
			climate: ['temperate', 'arid', 'windy'],
			diameter: 12900,
			films: [3],
			gravity: 1,
			name: 'Utapau',
			orbitalPeriod: '351',
			population: 95000000,
			residents: ['tionmedon'],
			rotationPeriod: '27',
			surfaceWater: '0.9',
			terrains: ['scrublands', 'savanna', 'canyons', 'sinkholes']
		}
	],
	[
		'mustafar',
		{
			climate: ['hot'],
			diameter: 4200,
			films: [3],
			gravity: 1,
			name: 'Mustafar',
			orbitalPeriod: '412',
			population: 20000,
			residents: [],
			rotationPeriod: '36',
			surfaceWater: '0',
			terrains: ['volcanoes', 'lava rivers', 'mountains', 'caves']
		}
	],
	[
		'kashyyyk',
		{
			climate: ['tropical'],
			diameter: 12765,
			films: [3],
			gravity: 1,
			name: 'Kashyyyk',
			orbitalPeriod: '381',
			population: 45000000,
			residents: ['chewbacca', 'tarfful'],
			rotationPeriod: '26',
			surfaceWater: '60',
			terrains: ['jungle', 'forests', 'lakes', 'rivers']
		}
	],
	[
		'polismassa',
		{
			climate: ['artificial temperate '],
			diameter: 0,
			films: [3],
			gravity: 0.56,
			name: 'Polis Massa',
			orbitalPeriod: '590',
			population: 1000000,
			residents: [],
			rotationPeriod: '24',
			surfaceWater: '0',
			terrains: ['airless asteroid']
		}
	],
	[
		'mygeeto',
		{
			climate: ['frigid'],
			diameter: 10088,
			films: [3],
			gravity: 1,
			name: 'Mygeeto',
			orbitalPeriod: '167',
			population: 19000000,
			residents: [],
			rotationPeriod: '12',
			surfaceWater: null,
			terrains: ['glaciers', 'mountains', 'ice canyons']
		}
	],
	[
		'felucia',
		{
			climate: ['hot', 'humid'],
			diameter: 9100,
			films: [3],
			gravity: 0.75,
			name: 'Felucia',
			orbitalPeriod: '231',
			population: 8500000,
			residents: [],
			rotationPeriod: '34',
			surfaceWater: null,
			terrains: ['fungus forests']
		}
	],
	[
		'catoneimoidia',
		{
			climate: ['temperate', 'moist'],
			diameter: 0,
			films: [3],
			gravity: 1,
			name: 'Cato Neimoidia',
			orbitalPeriod: '278',
			population: 10000000,
			residents: ['nutegunray'],
			rotationPeriod: '25',
			surfaceWater: null,
			terrains: ['mountains', 'fields', 'forests', 'rock arches']
		}
	],
	[
		'saleucami',
		{
			climate: ['hot'],
			diameter: 14920,
			films: [3],
			gravity: null,
			name: 'Saleucami',
			orbitalPeriod: '392',
			population: 1400000000,
			residents: [],
			rotationPeriod: '26',
			surfaceWater: null,
			terrains: ['caves', 'desert', 'mountains', 'volcanoes']
		}
	],
	[
		'stewjon',
		{
			climate: ['temperate'],
			diameter: 0,
			films: [],
			gravity: 1,
			name: 'Stewjon',
			orbitalPeriod: null,
			population: null,
			residents: ['obiwankenobi'],
			rotationPeriod: null,
			surfaceWater: null,
			terrains: ['grass']
		}
	],
	[
		'eriadu',
		{
			climate: ['polluted'],
			diameter: 13490,
			films: [],
			gravity: 1,
			name: 'Eriadu',
			orbitalPeriod: '360',
			population: 22000000000,
			residents: ['wilhufftarkin'],
			rotationPeriod: '24',
			surfaceWater: null,
			terrains: ['cityscape']
		}
	],
	[
		'corellia',
		{
			climate: ['temperate'],
			diameter: 11000,
			films: [],
			gravity: 1,
			name: 'Corellia',
			orbitalPeriod: '329',
			population: 3000000000,
			residents: ['hansolo', 'wedgeantilles'],
			rotationPeriod: '25',
			surfaceWater: '70',
			terrains: ['plains', 'urban', 'hills', 'forests']
		}
	],
	[
		'rodia',
		{
			climate: ['hot'],
			diameter: 7549,
			films: [],
			gravity: 1,
			name: 'Rodia',
			orbitalPeriod: '305',
			population: 1300000000,
			residents: ['greedo'],
			rotationPeriod: '29',
			surfaceWater: '60',
			terrains: ['jungles', 'oceans', 'urban', 'swamps']
		}
	],
	[
		'nalhutta',
		{
			climate: ['temperate'],
			diameter: 12150,
			films: [],
			gravity: 1,
			name: 'Nal Hutta',
			orbitalPeriod: '413',
			population: 7000000000,
			residents: ['jabbadesilijictiure'],
			rotationPeriod: '87',
			surfaceWater: null,
			terrains: ['urban', 'oceans', 'swamps', 'bogs']
		}
	],
	[
		'dantooine',
		{
			climate: ['temperate'],
			diameter: 9830,
			films: [],
			gravity: 1,
			name: 'Dantooine',
			orbitalPeriod: '378',
			population: 1000,
			residents: [],
			rotationPeriod: '25',
			surfaceWater: null,
			terrains: ['oceans', 'savannas', 'mountains', 'grasslands']
		}
	],
	[
		'bestineiv',
		{
			climate: ['temperate'],
			diameter: 6400,
			films: [],
			gravity: null,
			name: 'Bestine IV',
			orbitalPeriod: '680',
			population: 62000000,
			residents: ['jektonoporkins'],
			rotationPeriod: '26',
			surfaceWater: '98',
			terrains: ['rocky islands', 'oceans']
		}
	],
	[
		'ordmantell',
		{
			climate: ['temperate'],
			diameter: 14050,
			films: [5],
			gravity: 1,
			name: 'Ord Mantell',
			orbitalPeriod: '334',
			population: 4000000000,
			residents: [],
			rotationPeriod: '26',
			surfaceWater: '10',
			terrains: ['plains', 'seas', 'mesas']
		}
	],
	[
		'trandosha',
		{
			climate: ['arid'],
			diameter: 0,
			films: [],
			gravity: 0.62,
			name: 'Trandosha',
			orbitalPeriod: '371',
			population: 42000000,
			residents: ['bossk'],
			rotationPeriod: '25',
			surfaceWater: null,
			terrains: ['mountains', 'seas', 'grasslands', 'deserts']
		}
	],
	[
		'socorro',
		{
			climate: ['arid'],
			diameter: 0,
			films: [],
			gravity: 1,
			name: 'Socorro',
			orbitalPeriod: '326',
			population: 300000000,
			residents: ['landocalrissian'],
			rotationPeriod: '20',
			surfaceWater: null,
			terrains: ['deserts', 'mountains']
		}
	],
	[
		'moncala',
		{
			climate: ['temperate'],
			diameter: 11030,
			films: [],
			gravity: 1,
			name: 'Mon Cala',
			orbitalPeriod: '398',
			population: 27000000000,
			residents: ['ackbar'],
			rotationPeriod: '21',
			surfaceWater: '100',
			terrains: ['oceans', 'reefs', 'islands']
		}
	],
	[
		'chandrila',
		{
			climate: ['temperate'],
			diameter: 13500,
			films: [],
			gravity: 1,
			name: 'Chandrila',
			orbitalPeriod: '368',
			population: 1200000000,
			residents: ['monmothma'],
			rotationPeriod: '20',
			surfaceWater: '40',
			terrains: ['plains', 'forests']
		}
	],
	[
		'sullust',
		{
			climate: ['superheated'],
			diameter: 12780,
			films: [],
			gravity: 1,
			name: 'Sullust',
			orbitalPeriod: '263',
			population: 18500000000,
			residents: ['niennunb'],
			rotationPeriod: '20',
			surfaceWater: '5',
			terrains: ['mountains', 'volcanoes', 'rocky deserts']
		}
	],
	[
		'toydaria',
		{
			climate: ['temperate'],
			diameter: 7900,
			films: [],
			gravity: 1,
			name: 'Toydaria',
			orbitalPeriod: '184',
			population: 11000000,
			residents: ['watto'],
			rotationPeriod: '21',
			surfaceWater: null,
			terrains: ['swamps', 'lakes']
		}
	],
	[
		'malastare',
		{
			climate: ['arid', 'temperate', 'tropical'],
			diameter: 18880,
			films: [],
			gravity: 1.56,
			name: 'Malastare',
			orbitalPeriod: '201',
			population: 2000000000,
			residents: ['sebulba'],
			rotationPeriod: '26',
			surfaceWater: null,
			terrains: ['swamps', 'deserts', 'jungles', 'mountains']
		}
	],
	[
		'dathomir',
		{
			climate: ['temperate'],
			diameter: 10480,
			films: [],
			gravity: 0.9,
			name: 'Dathomir',
			orbitalPeriod: '491',
			population: 5200,
			residents: ['darthmaul'],
			rotationPeriod: '24',
			surfaceWater: null,
			terrains: ['forests', 'deserts', 'savannas']
		}
	],
	[
		'ryloth',
		{
			climate: ['temperate', 'arid', 'subartic'],
			diameter: 10600,
			films: [],
			gravity: 1,
			name: 'Ryloth',
			orbitalPeriod: '305',
			population: 1500000000,
			residents: ['bibfortuna', 'aylasecura'],
			rotationPeriod: '30',
			surfaceWater: '5',
			terrains: ['mountains', 'valleys', 'deserts', 'tundra']
		}
	],
	[
		'aleenminor',
		{
			climate: ['harsh'],
			diameter: null,
			films: [],
			gravity: null,
			name: 'Aleen Minor',
			orbitalPeriod: null,
			population: null,
			residents: ['rattstyerel'],
			rotationPeriod: null,
			surfaceWater: null,
			terrains: ['lush']
		}
	],
	[
		'vulpter',
		{
			climate: ['temperate', 'artic'],
			diameter: 14900,
			films: [],
			gravity: 1,
			name: 'Vulpter',
			orbitalPeriod: '391',
			population: 421000000,
			residents: ['dudbolt'],
			rotationPeriod: '22',
			surfaceWater: null,
			terrains: ['urban', 'barren']
		}
	],
	[
		'troiken',
		{
			climate: null,
			diameter: null,
			films: [],
			gravity: null,
			name: 'Troiken',
			orbitalPeriod: null,
			population: null,
			residents: ['gasgano'],
			rotationPeriod: null,
			surfaceWater: null,
			terrains: ['desert', 'tundra', 'rainforests', 'mountains']
		}
	],
	[
		'tund',
		{
			climate: null,
			diameter: 12190,
			films: [],
			gravity: null,
			name: 'Tund',
			orbitalPeriod: '1770',
			population: 0,
			residents: ['benquadinaros'],
			rotationPeriod: '48',
			surfaceWater: null,
			terrains: ['barren', 'ash']
		}
	],
	[
		'haruunkal',
		{
			climate: ['temperate'],
			diameter: 10120,
			films: [],
			gravity: 0.98,
			name: 'Haruun Kal',
			orbitalPeriod: '383',
			population: 705300,
			residents: ['macewindu'],
			rotationPeriod: '25',
			surfaceWater: null,
			terrains: ['toxic cloudsea', 'plateaus', 'volcanoes']
		}
	],
	[
		'cerea',
		{
			climate: ['temperate'],
			diameter: null,
			films: [],
			gravity: 1,
			name: 'Cerea',
			orbitalPeriod: '386',
			population: 450000000,
			residents: ['kiadimundi'],
			rotationPeriod: '27',
			surfaceWater: '20',
			terrains: ['verdant']
		}
	],
	[
		'gleeanselm',
		{
			climate: ['tropical', 'temperate'],
			diameter: 15600,
			films: [],
			gravity: 1,
			name: 'Glee Anselm',
			orbitalPeriod: '206',
			population: 500000000,
			residents: ['kitfisto'],
			rotationPeriod: '33',
			surfaceWater: '80',
			terrains: ['lakes', 'islands', 'swamps', 'seas']
		}
	],
	[
		'iridonia',
		{
			climate: null,
			diameter: null,
			films: [],
			gravity: null,
			name: 'Iridonia',
			orbitalPeriod: '413',
			population: null,
			residents: ['eethkoth'],
			rotationPeriod: '29',
			surfaceWater: null,
			terrains: ['rocky canyons', 'acid pools']
		}
	],
	[
		'tholoth',
		{
			climate: null,
			diameter: null,
			films: [],
			gravity: null,
			name: 'Tholoth',
			orbitalPeriod: null,
			population: null,
			residents: [],
			rotationPeriod: null,
			surfaceWater: null,
			terrains: null
		}
	],
	[
		'iktotch',
		{
			climate: ['arid', 'rocky', 'windy'],
			diameter: null,
			films: [],
			gravity: 1,
			name: 'Iktotch',
			orbitalPeriod: '481',
			population: null,
			residents: ['saeseetiin'],
			rotationPeriod: '22',
			surfaceWater: null,
			terrains: ['rocky']
		}
	],
	[
		'quermia',
		{
			climate: null,
			diameter: null,
			films: [],
			gravity: null,
			name: 'Quermia',
			orbitalPeriod: null,
			population: null,
			residents: ['yaraelpoof'],
			rotationPeriod: null,
			surfaceWater: null,
			terrains: null
		}
	],
	[
		'dorin',
		{
			climate: ['temperate'],
			diameter: 13400,
			films: [],
			gravity: 1,
			name: 'Dorin',
			orbitalPeriod: '409',
			population: null,
			residents: ['plokoon'],
			rotationPeriod: '22',
			surfaceWater: null,
			terrains: null
		}
	],
	[
		'champala',
		{
			climate: ['temperate'],
			diameter: null,
			films: [],
			gravity: 1,
			name: 'Champala',
			orbitalPeriod: '318',
			population: 3500000000,
			residents: ['masamedda'],
			rotationPeriod: '27',
			surfaceWater: null,
			terrains: ['oceans', 'rainforests', 'plateaus']
		}
	],
	[
		'mirial',
		{
			climate: null,
			diameter: null,
			films: [],
			gravity: null,
			name: 'Mirial',
			orbitalPeriod: null,
			population: null,
			residents: ['luminaraunduli', 'barrissoffee'],
			rotationPeriod: null,
			surfaceWater: null,
			terrains: ['deserts']
		}
	],
	[
		'serenno',
		{
			climate: null,
			diameter: null,
			films: [],
			gravity: null,
			name: 'Serenno',
			orbitalPeriod: null,
			population: null,
			residents: ['dooku'],
			rotationPeriod: null,
			surfaceWater: null,
			terrains: ['rainforests', 'rivers', 'mountains']
		}
	],
	[
		'concorddawn',
		{
			climate: null,
			diameter: null,
			films: [],
			gravity: null,
			name: 'Concord Dawn',
			orbitalPeriod: null,
			population: null,
			residents: ['jangofett'],
			rotationPeriod: null,
			surfaceWater: null,
			terrains: ['jungles', 'forests', 'deserts']
		}
	],
	[
		'zolan',
		{
			climate: null,
			diameter: null,
			films: [],
			gravity: null,
			name: 'Zolan',
			orbitalPeriod: null,
			population: null,
			residents: ['zamwesell'],
			rotationPeriod: null,
			surfaceWater: null,
			terrains: null
		}
	],
	[
		'ojom',
		{
			climate: ['frigid'],
			diameter: null,
			films: [],
			gravity: null,
			name: 'Ojom',
			orbitalPeriod: null,
			population: 500000000,
			residents: ['dexterjettster'],
			rotationPeriod: null,
			surfaceWater: '100',
			terrains: ['oceans', 'glaciers']
		}
	],
	[
		'skako',
		{
			climate: ['temperate'],
			diameter: null,
			films: [],
			gravity: 1,
			name: 'Skako',
			orbitalPeriod: '384',
			population: 500000000000,
			residents: ['wattambor'],
			rotationPeriod: '27',
			surfaceWater: null,
			terrains: ['urban', 'vines']
		}
	],
	[
		'muunilinst',
		{
			climate: ['temperate'],
			diameter: 13800,
			films: [],
			gravity: 1,
			name: 'Muunilinst',
			orbitalPeriod: '412',
			population: 5000000000,
			residents: ['sanhill'],
			rotationPeriod: '28',
			surfaceWater: '25',
			terrains: ['plains', 'forests', 'hills', 'mountains']
		}
	],
	[
		'shili',
		{
			climate: ['temperate'],
			diameter: null,
			films: [],
			gravity: 1,
			name: 'Shili',
			orbitalPeriod: null,
			population: null,
			residents: ['shaakti'],
			rotationPeriod: null,
			surfaceWater: null,
			terrains: ['cities', 'savannahs', 'seas', 'plains']
		}
	],
	[
		'kalee',
		{
			climate: ['arid', 'temperate', 'tropical'],
			diameter: 13850,
			films: [],
			gravity: 1,
			name: 'Kalee',
			orbitalPeriod: '378',
			population: 4000000000,
			residents: ['grievous'],
			rotationPeriod: '23',
			surfaceWater: null,
			terrains: ['rainforests', 'cliffs', 'canyons', 'seas']
		}
	],
	[
		'umbara',
		{
			climate: null,
			diameter: null,
			films: [],
			gravity: null,
			name: 'Umbara',
			orbitalPeriod: null,
			population: null,
			residents: ['slymoore'],
			rotationPeriod: null,
			surfaceWater: null,
			terrains: null
		}
	]
]);
