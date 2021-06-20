import GraphQLCollection from '#utils/GraphQLCollection';
import type { StarWarsApi } from '#utils/star-wars';

/** The Star Wars Species */
export default new GraphQLCollection<string, StarWarsApi.Species>([
	[
		'human',
		{
			averageHeight: 180,
			averageLifespan: 120,
			classification: 'mammal',
			designation: 'sentient',
			eyeColors: ['brown', 'blue', 'green', 'hazel', 'grey', 'amber'],
			films: [4, 5, 6, 1, 2, 3],
			hairColors: ['blonde', 'brown', 'black', 'red'],
			homeworld: 'Coruscant',
			language: 'Galactic Basic',
			name: 'Human',
			people: ['dorm├®', 'dooku', 'bailprestororgana', 'jocastanu'],
			skinColors: ['caucasian', 'black', 'asian', 'hispanic']
		}
	],
	[
		'droid',
		{
			averageHeight: null,
			averageLifespan: Infinity,
			classification: 'artificial',
			designation: 'sentient',
			eyeColors: null,
			films: [4, 5, 6, 1, 2, 3],
			hairColors: null,
			homeworld: null,
			language: null,
			name: 'Droid',
			people: ['c3po', 'r2d2', 'r5d4', 'ig88'],
			skinColors: null
		}
	],
	[
		'wookie',
		{
			averageHeight: 210,
			averageLifespan: 400,
			classification: 'mammal',
			designation: 'sentient',
			eyeColors: ['blue', 'green', 'yellow', 'brown', 'golden', 'red'],
			films: [4, 5, 6, 3],
			hairColors: ['black', 'brown'],
			homeworld: 'Kashyyyk',
			language: 'Shyriiwook',
			name: 'Wookie',
			people: ['chewbacca', 'tarfful'],
			skinColors: ['gray']
		}
	],
	[
		'rodian',
		{
			averageHeight: 170,
			averageLifespan: null,
			classification: 'sentient',
			designation: 'reptilian',
			eyeColors: ['black'],
			films: [4],
			hairColors: null,
			homeworld: 'Rodia',
			language: 'Galatic Basic',
			name: 'Rodian',
			people: ['greedo'],
			skinColors: ['green', 'blue']
		}
	],
	[
		'hutt',
		{
			averageHeight: 300,
			averageLifespan: 1000,
			classification: 'gastropod',
			designation: 'sentient',
			eyeColors: ['yellow', 'red'],
			films: [4, 6],
			hairColors: null,
			homeworld: 'Nal Hutta',
			language: 'Huttese',
			name: 'Hutt',
			people: ['jabbadesilijictiure'],
			skinColors: ['green', 'brown', 'tan']
		}
	],
	[
		'yodasspecies',
		{
			averageHeight: 66,
			averageLifespan: 900,
			classification: 'mammal',
			designation: 'sentient',
			eyeColors: ['brown', 'green', 'yellow'],
			films: [5, 6, 1, 2, 3],
			hairColors: ['brown', 'white'],
			homeworld: 'unknown',
			language: 'Galactic basic',
			name: "Yoda's species",
			people: ['yoda'],
			skinColors: ['green', 'yellow']
		}
	],
	[
		'trandoshan',
		{
			averageHeight: 200,
			averageLifespan: null,
			classification: 'reptile',
			designation: 'sentient',
			eyeColors: ['yellow', 'orange'],
			films: [5],
			hairColors: ['none'],
			homeworld: 'Trandosha',
			language: 'Dosh',
			name: 'Trandoshan',
			people: ['bossk'],
			skinColors: ['brown', 'green']
		}
	],
	[
		'moncalamari',
		{
			averageHeight: 160,
			averageLifespan: null,
			classification: 'amphibian',
			designation: 'sentient',
			eyeColors: ['yellow'],
			films: [6],
			hairColors: ['none'],
			homeworld: 'Mon Cala',
			language: 'Mon Calamarian',
			name: 'Mon Calamari',
			people: ['ackbar'],
			skinColors: ['red', 'blue', 'brown', 'magenta']
		}
	],
	[
		'ewok',
		{
			averageHeight: 100,
			averageLifespan: null,
			classification: 'mammal',
			designation: 'sentient',
			eyeColors: ['orange', 'brown'],
			films: [6],
			hairColors: ['white', 'brown', 'black'],
			homeworld: 'Endor',
			language: 'Ewokese',
			name: 'Ewok',
			people: ['wicketsystriwarrick'],
			skinColors: ['brown']
		}
	],
	[
		'sullustan',
		{
			averageHeight: 180,
			averageLifespan: null,
			classification: 'mammal',
			designation: 'sentient',
			eyeColors: ['black'],
			films: [6],
			hairColors: ['none'],
			homeworld: 'Sullust',
			language: 'Sullutese',
			name: 'Sullustan',
			people: ['niennunb'],
			skinColors: ['pale']
		}
	],
	[
		'neimodian',
		{
			averageHeight: 180,
			averageLifespan: null,
			classification: null,
			designation: 'sentient',
			eyeColors: ['red', 'pink'],
			films: [1],
			hairColors: ['none'],
			homeworld: 'Cato Neimoidia',
			language: 'Neimoidia',
			name: 'Neimodian',
			people: ['nutegunray'],
			skinColors: ['grey', 'green']
		}
	],
	[
		'gungan',
		{
			averageHeight: 190,
			averageLifespan: null,
			classification: 'amphibian',
			designation: 'sentient',
			eyeColors: ['orange'],
			films: [1, 2],
			hairColors: ['none'],
			homeworld: 'Naboo',
			language: 'Gungan basic',
			name: 'Gungan',
			people: ['jarjarbinks', 'roostarpals', 'rugornass'],
			skinColors: ['brown', 'green']
		}
	],
	[
		'toydarian',
		{
			averageHeight: 120,
			averageLifespan: 91,
			classification: 'mammal',
			designation: 'sentient',
			eyeColors: ['yellow'],
			films: [1, 2],
			hairColors: ['none'],
			homeworld: 'Toydaria',
			language: 'Toydarian',
			name: 'Toydarian',
			people: ['watto'],
			skinColors: ['blue', 'green', 'grey']
		}
	],
	[
		'dug',
		{
			averageHeight: 100,
			averageLifespan: null,
			classification: 'mammal',
			designation: 'sentient',
			eyeColors: ['yellow', 'blue'],
			films: [1],
			hairColors: ['none'],
			homeworld: 'Malastare',
			language: 'Dugese',
			name: 'Dug',
			people: ['sebulba'],
			skinColors: ['brown', 'purple', 'grey', 'red']
		}
	],
	[
		'twilek',
		{
			averageHeight: 200,
			averageLifespan: null,
			classification: 'mammals',
			designation: 'sentient',
			eyeColors: ['blue', 'brown', 'orange', 'pink'],
			films: [6, 1, 2, 3],
			hairColors: ['none'],
			homeworld: 'Ryloth',
			language: "Twi'leki",
			name: "Twi'lek",
			people: ['bibfortuna', 'aylasecura'],
			skinColors: ['orange', 'yellow', 'blue', 'green', 'pink', 'purple', 'tan']
		}
	],
	[
		'aleena',
		{
			averageHeight: 80,
			averageLifespan: 79,
			classification: 'reptile',
			designation: 'sentient',
			eyeColors: null,
			films: [1],
			hairColors: ['none'],
			homeworld: 'Aleen Minor',
			language: 'Aleena',
			name: 'Aleena',
			people: ['rattstyerel'],
			skinColors: ['blue', 'gray']
		}
	],
	[
		'vulptereen',
		{
			averageHeight: 100,
			averageLifespan: null,
			classification: null,
			designation: 'sentient',
			eyeColors: ['yellow'],
			films: [1],
			hairColors: ['none'],
			homeworld: 'Vulpter',
			language: 'vulpterish',
			name: 'Vulptereen',
			people: ['dudbolt'],
			skinColors: ['grey']
		}
	],
	[
		'xexto',
		{
			averageHeight: 125,
			averageLifespan: null,
			classification: null,
			designation: 'sentient',
			eyeColors: ['black'],
			films: [1],
			hairColors: ['none'],
			homeworld: 'Troiken',
			language: 'Xextese',
			name: 'Xexto',
			people: ['gasgano'],
			skinColors: ['grey', 'yellow', 'purple']
		}
	],
	[
		'toong',
		{
			averageHeight: 200,
			averageLifespan: null,
			classification: null,
			designation: 'sentient',
			eyeColors: ['orange'],
			films: [1, 3],
			hairColors: ['none'],
			homeworld: 'Tund',
			language: 'Tundan',
			name: 'Toong',
			people: ['benquadinaros'],
			skinColors: ['grey', 'green', 'yellow']
		}
	],
	[
		'cerean',
		{
			averageHeight: 200,
			averageLifespan: null,
			classification: 'mammal',
			designation: 'sentient',
			eyeColors: ['hazel'],
			films: [1, 3],
			hairColors: ['red', 'blond', 'black', 'white'],
			homeworld: 'Cerea',
			language: 'Cerean',
			name: 'Cerean',
			people: ['kiadimundi'],
			skinColors: ['pale pink']
		}
	],
	[
		'nautolan',
		{
			averageHeight: 180,
			averageLifespan: 70,
			classification: 'amphibian',
			designation: 'sentient',
			eyeColors: ['black'],
			films: [1],
			hairColors: ['none'],
			homeworld: 'Glee Anselm',
			language: 'Nautila',
			name: 'Nautolan',
			people: ['kitfisto'],
			skinColors: ['green', 'blue', 'brown', 'red']
		}
	],
	[
		'zabrak',
		{
			averageHeight: 180,
			averageLifespan: null,
			classification: 'mammal',
			designation: 'sentient',
			eyeColors: ['brown', 'orange'],
			films: [1],
			hairColors: ['black'],
			homeworld: 'Iridonia',
			language: 'Zabraki',
			name: 'Zabrak',
			people: ['darthmaul', 'eethkoth'],
			skinColors: ['pale', 'brown', 'red', 'orange', 'yellow']
		}
	],
	[
		'tholothian',
		{
			averageHeight: null,
			averageLifespan: null,
			classification: 'mammal',
			designation: 'sentient',
			eyeColors: ['blue', 'indigo'],
			films: [1, 3],
			hairColors: ['unknown'],
			homeworld: 'Tholoth',
			language: null,
			name: 'Tholothian',
			people: ['adigallia'],
			skinColors: ['dark']
		}
	],
	[
		'iktotchi',
		{
			averageHeight: 180,
			averageLifespan: null,
			classification: null,
			designation: 'sentient',
			eyeColors: ['orange'],
			films: [1, 3],
			hairColors: ['none'],
			homeworld: 'Iktotch',
			language: 'Iktotchese',
			name: 'Iktotchi',
			people: ['saeseetiin'],
			skinColors: ['pink']
		}
	],
	[
		'quermian',
		{
			averageHeight: 240,
			averageLifespan: 86,
			classification: 'mammal',
			designation: 'sentient',
			eyeColors: ['yellow'],
			films: [1, 3],
			hairColors: ['none'],
			homeworld: 'Quermia',
			language: 'Quermian',
			name: 'Quermian',
			people: ['yaraelpoof'],
			skinColors: ['white']
		}
	],
	[
		'keldor',
		{
			averageHeight: 180,
			averageLifespan: 70,
			classification: null,
			designation: 'sentient',
			eyeColors: ['black', 'silver'],
			films: [1, 3],
			hairColors: ['none'],
			homeworld: 'Dorin',
			language: 'Kel Dor',
			name: 'Kel Dor',
			people: ['plokoon'],
			skinColors: ['peach', 'orange', 'red']
		}
	],
	[
		'chagrian',
		{
			averageHeight: 190,
			averageLifespan: null,
			classification: 'amphibian',
			designation: 'sentient',
			eyeColors: ['blue'],
			films: [1, 3],
			hairColors: ['none'],
			homeworld: 'Champala',
			language: 'Chagria',
			name: 'Chagrian',
			people: ['masamedda'],
			skinColors: ['blue']
		}
	],
	[
		'geonosian',
		{
			averageHeight: 178,
			averageLifespan: null,
			classification: 'insectoid',
			designation: 'sentient',
			eyeColors: ['green', 'hazel'],
			films: [2, 3],
			hairColors: ['none'],
			homeworld: 'Geonosis',
			language: 'Geonosian',
			name: 'Geonosian',
			people: ['pogglethelesser'],
			skinColors: ['green', 'brown']
		}
	],
	[
		'mirialan',
		{
			averageHeight: 180,
			averageLifespan: null,
			classification: 'mammal',
			designation: 'sentient',
			eyeColors: ['blue', 'green', 'red', 'yellow', 'brown', 'orange'],
			films: [2, 3],
			hairColors: ['black', 'brown'],
			homeworld: 'Mirial',
			language: 'Mirialan',
			name: 'Mirialan',
			people: ['luminaraunduli', 'barrissoffee'],
			skinColors: ['yellow', 'green']
		}
	],
	[
		'clawdite',
		{
			averageHeight: 180,
			averageLifespan: 70,
			classification: 'reptilian',
			designation: 'sentient',
			eyeColors: ['yellow'],
			films: [2, 3],
			hairColors: ['none'],
			homeworld: 'Zolan',
			language: 'Clawdite',
			name: 'Clawdite',
			people: ['zamwesell'],
			skinColors: ['green', 'yellow']
		}
	],
	[
		'besalisk',
		{
			averageHeight: 178,
			averageLifespan: 75,
			classification: 'amphibian',
			designation: 'sentient',
			eyeColors: ['yellow'],
			films: [2],
			hairColors: ['none'],
			homeworld: 'Ojom',
			language: 'besalisk',
			name: 'Besalisk',
			people: ['dexterjettster'],
			skinColors: ['brown']
		}
	],
	[
		'kaminoan',
		{
			averageHeight: 220,
			averageLifespan: 80,
			classification: 'amphibian',
			designation: 'sentient',
			eyeColors: ['black'],
			films: [2],
			hairColors: ['none'],
			homeworld: 'Kamino',
			language: 'Kaminoan',
			name: 'Kaminoan',
			people: ['lamasu', 'taunwe'],
			skinColors: ['grey', 'blue']
		}
	],
	[
		'skakoan',
		{
			averageHeight: null,
			averageLifespan: null,
			classification: 'mammal',
			designation: 'sentient',
			eyeColors: null,
			films: [2, 3],
			hairColors: ['none'],
			homeworld: 'Skako',
			language: 'Skakoan',
			name: 'Skakoan',
			people: ['wattambor'],
			skinColors: ['grey', 'green']
		}
	],
	[
		'muun',
		{
			averageHeight: 190,
			averageLifespan: 100,
			classification: 'mammal',
			designation: 'sentient',
			eyeColors: ['black'],
			films: [2, 3],
			hairColors: ['none'],
			homeworld: 'Muunilinst',
			language: 'Muun',
			name: 'Muun',
			people: ['sanhill'],
			skinColors: ['grey', 'white']
		}
	],
	[
		'togruta',
		{
			averageHeight: 180,
			averageLifespan: 94,
			classification: 'mammal',
			designation: 'sentient',
			eyeColors: ['red', 'orange', 'yellow', 'green', 'blue', 'black'],
			films: [2, 3],
			hairColors: ['none'],
			homeworld: 'Shili',
			language: 'Togruti',
			name: 'Togruta',
			people: ['shaakti'],
			skinColors: ['red', 'white', 'orange', 'yellow', 'green', 'blue']
		}
	],
	[
		'kaleesh',
		{
			averageHeight: 170,
			averageLifespan: 80,
			classification: 'reptile',
			designation: 'sentient',
			eyeColors: ['yellow'],
			films: [3],
			hairColors: ['none'],
			homeworld: 'Kalee',
			language: 'Kaleesh',
			name: 'Kaleesh',
			people: ['grievous'],
			skinColors: ['brown', 'orange', 'tan']
		}
	],
	[
		'pauan',
		{
			averageHeight: 190,
			averageLifespan: 700,
			classification: 'mammal',
			designation: 'sentient',
			eyeColors: ['black'],
			films: [3],
			hairColors: ['none'],
			homeworld: 'Utapau',
			language: 'Utapese',
			name: "Pau'an",
			people: ['tionmedon'],
			skinColors: ['grey']
		}
	]
]);
