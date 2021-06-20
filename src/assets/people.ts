import GraphQLCollection from '#utils/GraphQLCollection';
import type { StarWarsApi } from '#utils/star-wars';

/** The Star Wars People */
export default new GraphQLCollection<string, StarWarsApi.Person>([
	[
		'lukeskywalker',
		{
			birthYear: '19BBY',
			eyeColors: ['blue'],
			films: [4, 5, 6, 3],
			gender: 'male',
			hairColors: ['blond'],
			height: 172,
			homeworld: 'Tatooine',
			mass: 77,
			name: 'Luke Skywalker',
			skinColors: ['fair'],
			species: [],
			starships: ['xwing', 'imperialshuttle'],
			vehicles: ['snowspeeder', 'imperialspeederbike']
		}
	],
	[
		'c3po',
		{
			birthYear: '112BBY',
			eyeColors: ['yellow'],
			films: [4, 5, 6, 1, 2, 3],
			gender: null,
			hairColors: null,
			height: 167,
			homeworld: 'Tatooine',
			mass: 75,
			name: 'C-3PO',
			skinColors: ['gold'],
			species: ['droid'],
			starships: [],
			vehicles: []
		}
	],
	[
		'r2d2',
		{
			birthYear: '33BBY',
			eyeColors: ['red'],
			films: [4, 5, 6, 1, 2, 3],
			gender: null,
			hairColors: null,
			height: 96,
			homeworld: 'Naboo',
			mass: 32,
			name: 'R2-D2',
			skinColors: ['white', 'blue'],
			species: ['droid'],
			starships: [],
			vehicles: []
		}
	],
	[
		'darthvader',
		{
			birthYear: '41.9BBY',
			eyeColors: ['yellow'],
			films: [4, 5, 6, 3],
			gender: 'male',
			hairColors: ['none'],
			height: 202,
			homeworld: 'Tatooine',
			mass: 136,
			name: 'Darth Vader',
			skinColors: ['white'],
			species: [],
			starships: ['tieadvancedx1'],
			vehicles: []
		}
	],
	[
		'leiaorgana',
		{
			birthYear: '19BBY',
			eyeColors: ['brown'],
			films: [4, 5, 6, 3],
			gender: 'female',
			hairColors: ['brown'],
			height: 150,
			homeworld: 'Alderaan',
			mass: 49,
			name: 'Leia Organa',
			skinColors: ['light'],
			species: [],
			starships: [],
			vehicles: ['imperialspeederbike']
		}
	],
	[
		'owenlars',
		{
			birthYear: '52BBY',
			eyeColors: ['blue'],
			films: [4, 2, 3],
			gender: 'male',
			hairColors: ['brown', 'grey'],
			height: 178,
			homeworld: 'Tatooine',
			mass: 120,
			name: 'Owen Lars',
			skinColors: ['light'],
			species: [],
			starships: [],
			vehicles: []
		}
	],
	[
		'beruwhitesunlars',
		{
			birthYear: '47BBY',
			eyeColors: ['blue'],
			films: [4, 2, 3],
			gender: 'female',
			hairColors: ['brown'],
			height: 165,
			homeworld: 'Tatooine',
			mass: 75,
			name: 'Beru Whitesun lars',
			skinColors: ['light'],
			species: [],
			starships: [],
			vehicles: []
		}
	],
	[
		'r5d4',
		{
			birthYear: 'unknown',
			eyeColors: ['red'],
			films: [4],
			gender: null,
			hairColors: null,
			height: 97,
			homeworld: 'Tatooine',
			mass: 32,
			name: 'R5-D4',
			skinColors: ['white', 'red'],
			species: ['droid'],
			starships: [],
			vehicles: []
		}
	],
	[
		'biggsdarklighter',
		{
			birthYear: '24BBY',
			eyeColors: ['brown'],
			films: [4],
			gender: 'male',
			hairColors: ['black'],
			height: 183,
			homeworld: 'Tatooine',
			mass: 84,
			name: 'Biggs Darklighter',
			skinColors: ['light'],
			species: [],
			starships: ['xwing'],
			vehicles: []
		}
	],
	[
		'obiwankenobi',
		{
			birthYear: '57BBY',
			eyeColors: ['blue-gray'],
			films: [4, 5, 6, 1, 2, 3],
			gender: 'male',
			hairColors: ['auburn', 'white'],
			height: 182,
			homeworld: 'Stewjon',
			mass: 77,
			name: 'Obi-Wan Kenobi',
			skinColors: ['fair'],
			species: [],
			starships: ['jedistarfighter', 'tradefederationcruiser', 'naboostarskiff', 'jediinterceptor', 'belbullab22starfighter'],
			vehicles: ['tribubblebongo']
		}
	],
	[
		'anakinskywalker',
		{
			birthYear: '41.9BBY',
			eyeColors: ['blue'],
			films: [1, 2, 3],
			gender: 'male',
			hairColors: ['blond'],
			height: 188,
			homeworld: 'Tatooine',
			mass: 84,
			name: 'Anakin Skywalker',
			skinColors: ['fair'],
			species: [],
			starships: ['naboofighter', 'tradefederationcruiser', 'jediinterceptor'],
			vehicles: ['zephyrgswoopbike', 'xj6airspeeder']
		}
	],
	[
		'wilhufftarkin',
		{
			birthYear: '64BBY',
			eyeColors: ['blue'],
			films: [4, 3],
			gender: 'male',
			hairColors: ['auburn', 'grey'],
			height: 180,
			homeworld: 'Eriadu',
			mass: null,
			name: 'Wilhuff Tarkin',
			skinColors: ['fair'],
			species: [],
			starships: [],
			vehicles: []
		}
	],
	[
		'chewbacca',
		{
			birthYear: '200BBY',
			eyeColors: ['blue'],
			films: [4, 5, 6, 3],
			gender: 'male',
			hairColors: ['brown'],
			height: 228,
			homeworld: 'Kashyyyk',
			mass: 112,
			name: 'Chewbacca',
			skinColors: null,
			species: ['wookie'],
			starships: ['millenniumfalcon', 'imperialshuttle'],
			vehicles: ['atst']
		}
	],
	[
		'hansolo',
		{
			birthYear: '29BBY',
			eyeColors: ['brown'],
			films: [4, 5, 6],
			gender: 'male',
			hairColors: ['brown'],
			height: 180,
			homeworld: 'Corellia',
			mass: 80,
			name: 'Han Solo',
			skinColors: ['fair'],
			species: [],
			starships: ['millenniumfalcon', 'imperialshuttle'],
			vehicles: []
		}
	],
	[
		'greedo',
		{
			birthYear: '44BBY',
			eyeColors: ['black'],
			films: [4],
			gender: 'male',
			hairColors: null,
			height: 173,
			homeworld: 'Rodia',
			mass: 74,
			name: 'Greedo',
			skinColors: ['green'],
			species: ['rodian'],
			starships: [],
			vehicles: []
		}
	],
	[
		'jabbadesilijictiure',
		{
			birthYear: '600BBY',
			eyeColors: ['orange'],
			films: [4, 6, 1],
			gender: 'hermaphrodite',
			hairColors: null,
			height: 175,
			homeworld: 'Nal Hutta',
			mass: NaN,
			name: 'Jabba Desilijic Tiure',
			skinColors: ['green-tan', 'brown'],
			species: ['hutt'],
			starships: [],
			vehicles: []
		}
	],
	[
		'wedgeantilles',
		{
			birthYear: '21BBY',
			eyeColors: ['hazel'],
			films: [4, 5, 6],
			gender: 'male',
			hairColors: ['brown'],
			height: 170,
			homeworld: 'Corellia',
			mass: 77,
			name: 'Wedge Antilles',
			skinColors: ['fair'],
			species: [],
			starships: ['xwing'],
			vehicles: ['snowspeeder']
		}
	],
	[
		'jektonoporkins',
		{
			birthYear: 'unknown',
			eyeColors: ['blue'],
			films: [4],
			gender: 'male',
			hairColors: ['brown'],
			height: 180,
			homeworld: 'Bestine IV',
			mass: 110,
			name: 'Jek Tono Porkins',
			skinColors: ['fair'],
			species: [],
			starships: ['xwing'],
			vehicles: []
		}
	],
	[
		'yoda',
		{
			birthYear: '896BBY',
			eyeColors: ['brown'],
			films: [5, 6, 1, 2, 3],
			gender: 'male',
			hairColors: ['white'],
			height: 66,
			homeworld: null,
			mass: 17,
			name: 'Yoda',
			skinColors: ['green'],
			species: ['yodasspecies'],
			starships: [],
			vehicles: []
		}
	],
	[
		'palpatine',
		{
			birthYear: '82BBY',
			eyeColors: ['yellow'],
			films: [5, 6, 1, 2, 3],
			gender: 'male',
			hairColors: ['grey'],
			height: 170,
			homeworld: 'Naboo',
			mass: 75,
			name: 'Palpatine',
			skinColors: ['pale'],
			species: [],
			starships: [],
			vehicles: []
		}
	],
	[
		'bobafett',
		{
			birthYear: '31.5BBY',
			eyeColors: ['brown'],
			films: [5, 6, 2],
			gender: 'male',
			hairColors: ['black'],
			height: 183,
			homeworld: 'Kamino',
			mass: 78.2,
			name: 'Boba Fett',
			skinColors: ['fair'],
			species: [],
			starships: ['slave1'],
			vehicles: []
		}
	],
	[
		'ig88',
		{
			birthYear: '15BBY',
			eyeColors: ['red'],
			films: [5],
			gender: null,
			hairColors: ['none'],
			height: 200,
			homeworld: null,
			mass: 140,
			name: 'IG-88',
			skinColors: ['metal'],
			species: ['droid'],
			starships: [],
			vehicles: []
		}
	],
	[
		'bossk',
		{
			birthYear: '53BBY',
			eyeColors: ['red'],
			films: [5],
			gender: 'male',
			hairColors: ['none'],
			height: 190,
			homeworld: 'Trandosha',
			mass: 113,
			name: 'Bossk',
			skinColors: ['green'],
			species: ['trandoshan'],
			starships: [],
			vehicles: []
		}
	],
	[
		'landocalrissian',
		{
			birthYear: '31BBY',
			eyeColors: ['brown'],
			films: [5, 6],
			gender: 'male',
			hairColors: ['black'],
			height: 177,
			homeworld: 'Socorro',
			mass: 79,
			name: 'Lando Calrissian',
			skinColors: ['dark'],
			species: [],
			starships: ['millenniumfalcon'],
			vehicles: []
		}
	],
	[
		'lobot',
		{
			birthYear: '37BBY',
			eyeColors: ['blue'],
			films: [5],
			gender: 'male',
			hairColors: ['none'],
			height: 175,
			homeworld: 'Bespin',
			mass: 79,
			name: 'Lobot',
			skinColors: ['light'],
			species: [],
			starships: [],
			vehicles: []
		}
	],
	[
		'ackbar',
		{
			birthYear: '41BBY',
			eyeColors: ['orange'],
			films: [6],
			gender: 'male',
			hairColors: ['none'],
			height: 180,
			homeworld: 'Mon Cala',
			mass: 83,
			name: 'Ackbar',
			skinColors: ['brown mottle'],
			species: ['moncalamari'],
			starships: [],
			vehicles: []
		}
	],
	[
		'monmothma',
		{
			birthYear: '48BBY',
			eyeColors: ['blue'],
			films: [6],
			gender: 'female',
			hairColors: ['auburn'],
			height: 150,
			homeworld: 'Chandrila',
			mass: null,
			name: 'Mon Mothma',
			skinColors: ['fair'],
			species: [],
			starships: [],
			vehicles: []
		}
	],
	[
		'arvelcrynyd',
		{
			birthYear: 'unknown',
			eyeColors: ['brown'],
			films: [6],
			gender: 'male',
			hairColors: ['brown'],
			height: null,
			homeworld: null,
			mass: null,
			name: 'Arvel Crynyd',
			skinColors: ['fair'],
			species: [],
			starships: ['awing'],
			vehicles: []
		}
	],
	[
		'wicketsystriwarrick',
		{
			birthYear: '8BBY',
			eyeColors: ['brown'],
			films: [6],
			gender: 'male',
			hairColors: ['brown'],
			height: 88,
			homeworld: 'Endor',
			mass: 20,
			name: 'Wicket Systri Warrick',
			skinColors: ['brown'],
			species: ['ewok'],
			starships: [],
			vehicles: []
		}
	],
	[
		'niennunb',
		{
			birthYear: 'unknown',
			eyeColors: ['black'],
			films: [6],
			gender: 'male',
			hairColors: ['none'],
			height: 160,
			homeworld: 'Sullust',
			mass: 68,
			name: 'Nien Nunb',
			skinColors: ['grey'],
			species: ['sullustan'],
			starships: ['millenniumfalcon'],
			vehicles: []
		}
	],
	[
		'quigonjinn',
		{
			birthYear: '92BBY',
			eyeColors: ['blue'],
			films: [1],
			gender: 'male',
			hairColors: ['brown'],
			height: 193,
			homeworld: null,
			mass: 89,
			name: 'Qui-Gon Jinn',
			skinColors: ['fair'],
			species: [],
			starships: [],
			vehicles: ['tribubblebongo']
		}
	],
	[
		'nutegunray',
		{
			birthYear: 'unknown',
			eyeColors: ['red'],
			films: [1, 2, 3],
			gender: 'male',
			hairColors: ['none'],
			height: 191,
			homeworld: 'Cato Neimoidia',
			mass: 90,
			name: 'Nute Gunray',
			skinColors: ['mottled green'],
			species: ['neimodian'],
			starships: [],
			vehicles: []
		}
	],
	[
		'finisvalorum',
		{
			birthYear: '91BBY',
			eyeColors: ['blue'],
			films: [1],
			gender: 'male',
			hairColors: ['blond'],
			height: 170,
			homeworld: 'Coruscant',
			mass: null,
			name: 'Finis Valorum',
			skinColors: ['fair'],
			species: [],
			starships: [],
			vehicles: []
		}
	],
	[
		'padm├®amidala',
		{
			birthYear: '46BBY',
			eyeColors: ['brown'],
			films: [1, 2, 3],
			gender: 'female',
			hairColors: ['brown'],
			height: 185,
			homeworld: 'Naboo',
			mass: 45,
			name: 'Padm├® Amidala',
			skinColors: ['light'],
			species: [],
			starships: ['naboofighter', 'htypenubianyacht', 'naboostarskiff'],
			vehicles: []
		}
	],
	[
		'jarjarbinks',
		{
			birthYear: '52BBY',
			eyeColors: ['orange'],
			films: [1, 2],
			gender: 'male',
			hairColors: ['none'],
			height: 196,
			homeworld: 'Naboo',
			mass: 66,
			name: 'Jar Jar Binks',
			skinColors: ['orange'],
			species: ['gungan'],
			starships: [],
			vehicles: []
		}
	],
	[
		'roostarpals',
		{
			birthYear: 'unknown',
			eyeColors: ['orange'],
			films: [1],
			gender: 'male',
			hairColors: ['none'],
			height: 224,
			homeworld: 'Naboo',
			mass: 82,
			name: 'Roos Tarpals',
			skinColors: ['grey'],
			species: ['gungan'],
			starships: [],
			vehicles: []
		}
	],
	[
		'rugornass',
		{
			birthYear: 'unknown',
			eyeColors: ['orange'],
			films: [1],
			gender: 'male',
			hairColors: ['none'],
			height: 206,
			homeworld: 'Naboo',
			mass: null,
			name: 'Rugor Nass',
			skinColors: ['green'],
			species: ['gungan'],
			starships: [],
			vehicles: []
		}
	],
	[
		'ricoli├®',
		{
			birthYear: 'unknown',
			eyeColors: ['blue'],
			films: [1],
			gender: 'male',
			hairColors: ['brown'],
			height: 183,
			homeworld: 'Naboo',
			mass: null,
			name: 'Ric Oli├®',
			skinColors: ['fair'],
			species: [],
			starships: ['nabooroyalstarship'],
			vehicles: []
		}
	],
	[
		'watto',
		{
			birthYear: 'unknown',
			eyeColors: ['yellow'],
			films: [1, 2],
			gender: 'male',
			hairColors: ['black'],
			height: 137,
			homeworld: 'Toydaria',
			mass: null,
			name: 'Watto',
			skinColors: ['blue', 'grey'],
			species: ['toydarian'],
			starships: [],
			vehicles: []
		}
	],
	[
		'sebulba',
		{
			birthYear: 'unknown',
			eyeColors: ['orange'],
			films: [1],
			gender: 'male',
			hairColors: ['none'],
			height: 112,
			homeworld: 'Malastare',
			mass: 40,
			name: 'Sebulba',
			skinColors: ['grey', 'red'],
			species: ['dug'],
			starships: [],
			vehicles: []
		}
	],
	[
		'quarshpanaka',
		{
			birthYear: '62BBY',
			eyeColors: ['brown'],
			films: [1],
			gender: 'male',
			hairColors: ['black'],
			height: 183,
			homeworld: 'Naboo',
			mass: null,
			name: 'Quarsh Panaka',
			skinColors: ['dark'],
			species: [],
			starships: [],
			vehicles: []
		}
	],
	[
		'shmiskywalker',
		{
			birthYear: '72BBY',
			eyeColors: ['brown'],
			films: [1, 2],
			gender: 'female',
			hairColors: ['black'],
			height: 163,
			homeworld: 'Tatooine',
			mass: null,
			name: 'Shmi Skywalker',
			skinColors: ['fair'],
			species: [],
			starships: [],
			vehicles: []
		}
	],
	[
		'darthmaul',
		{
			birthYear: '54BBY',
			eyeColors: ['yellow'],
			films: [1],
			gender: 'male',
			hairColors: ['none'],
			height: 175,
			homeworld: 'Dathomir',
			mass: 80,
			name: 'Darth Maul',
			skinColors: ['red'],
			species: ['zabrak'],
			starships: ['scimitar'],
			vehicles: ['sithspeeder']
		}
	],
	[
		'bibfortuna',
		{
			birthYear: 'unknown',
			eyeColors: ['pink'],
			films: [6],
			gender: 'male',
			hairColors: ['none'],
			height: 180,
			homeworld: 'Ryloth',
			mass: null,
			name: 'Bib Fortuna',
			skinColors: ['pale'],
			species: ['twilek'],
			starships: [],
			vehicles: []
		}
	],
	[
		'aylasecura',
		{
			birthYear: '48BBY',
			eyeColors: ['hazel'],
			films: [1, 2, 3],
			gender: 'female',
			hairColors: ['none'],
			height: 178,
			homeworld: 'Ryloth',
			mass: 55,
			name: 'Ayla Secura',
			skinColors: ['blue'],
			species: ['twilek'],
			starships: [],
			vehicles: []
		}
	],
	[
		'rattstyerel',
		{
			birthYear: 'unknown',
			eyeColors: null,
			films: [1],
			gender: 'male',
			hairColors: ['none'],
			height: 79,
			homeworld: 'Aleen Minor',
			mass: 15,
			name: 'Ratts Tyerel',
			skinColors: ['grey', 'blue'],
			species: ['aleena'],
			starships: [],
			vehicles: []
		}
	],
	[
		'dudbolt',
		{
			birthYear: 'unknown',
			eyeColors: ['yellow'],
			films: [1],
			gender: 'male',
			hairColors: ['none'],
			height: 94,
			homeworld: 'Vulpter',
			mass: 45,
			name: 'Dud Bolt',
			skinColors: ['blue', 'grey'],
			species: ['vulptereen'],
			starships: [],
			vehicles: []
		}
	],
	[
		'gasgano',
		{
			birthYear: 'unknown',
			eyeColors: ['black'],
			films: [1],
			gender: 'male',
			hairColors: ['none'],
			height: 122,
			homeworld: 'Troiken',
			mass: null,
			name: 'Gasgano',
			skinColors: ['white', 'blue'],
			species: ['xexto'],
			starships: [],
			vehicles: []
		}
	],
	[
		'benquadinaros',
		{
			birthYear: 'unknown',
			eyeColors: ['orange'],
			films: [1],
			gender: 'male',
			hairColors: ['none'],
			height: 163,
			homeworld: 'Tund',
			mass: 65,
			name: 'Ben Quadinaros',
			skinColors: ['grey', 'green', 'yellow'],
			species: ['toong'],
			starships: [],
			vehicles: []
		}
	],
	[
		'macewindu',
		{
			birthYear: '72BBY',
			eyeColors: ['brown'],
			films: [1, 2, 3],
			gender: 'male',
			hairColors: ['none'],
			height: 188,
			homeworld: 'Haruun Kal',
			mass: 84,
			name: 'Mace Windu',
			skinColors: ['dark'],
			species: [],
			starships: [],
			vehicles: []
		}
	],
	[
		'kiadimundi',
		{
			birthYear: '92BBY',
			eyeColors: ['yellow'],
			films: [1, 2, 3],
			gender: 'male',
			hairColors: ['white'],
			height: 198,
			homeworld: 'Cerea',
			mass: 82,
			name: 'Ki-Adi-Mundi',
			skinColors: ['pale'],
			species: ['cerean'],
			starships: [],
			vehicles: []
		}
	],
	[
		'kitfisto',
		{
			birthYear: 'unknown',
			eyeColors: ['black'],
			films: [1, 2, 3],
			gender: 'male',
			hairColors: ['none'],
			height: 196,
			homeworld: 'Glee Anselm',
			mass: 87,
			name: 'Kit Fisto',
			skinColors: ['green'],
			species: ['nautolan'],
			starships: [],
			vehicles: []
		}
	],
	[
		'eethkoth',
		{
			birthYear: 'unknown',
			eyeColors: ['brown'],
			films: [1, 3],
			gender: 'male',
			hairColors: ['black'],
			height: 171,
			homeworld: 'Iridonia',
			mass: null,
			name: 'Eeth Koth',
			skinColors: ['brown'],
			species: ['zabrak'],
			starships: [],
			vehicles: []
		}
	],
	[
		'adigallia',
		{
			birthYear: 'unknown',
			eyeColors: ['blue'],
			films: [1, 3],
			gender: 'female',
			hairColors: ['none'],
			height: 184,
			homeworld: 'Coruscant',
			mass: 50,
			name: 'Adi Gallia',
			skinColors: ['dark'],
			species: ['tholothian'],
			starships: [],
			vehicles: []
		}
	],
	[
		'saeseetiin',
		{
			birthYear: 'unknown',
			eyeColors: ['orange'],
			films: [1, 3],
			gender: 'male',
			hairColors: ['none'],
			height: 188,
			homeworld: 'Iktotch',
			mass: null,
			name: 'Saesee Tiin',
			skinColors: ['pale'],
			species: ['iktotchi'],
			starships: [],
			vehicles: []
		}
	],
	[
		'yaraelpoof',
		{
			birthYear: 'unknown',
			eyeColors: ['yellow'],
			films: [1],
			gender: 'male',
			hairColors: ['none'],
			height: 264,
			homeworld: 'Quermia',
			mass: null,
			name: 'Yarael Poof',
			skinColors: ['white'],
			species: ['quermian'],
			starships: [],
			vehicles: []
		}
	],
	[
		'plokoon',
		{
			birthYear: '22BBY',
			eyeColors: ['black'],
			films: [1, 2, 3],
			gender: 'male',
			hairColors: ['none'],
			height: 188,
			homeworld: 'Dorin',
			mass: 80,
			name: 'Plo Koon',
			skinColors: ['orange'],
			species: ['keldor'],
			starships: ['jedistarfighter'],
			vehicles: []
		}
	],
	[
		'masamedda',
		{
			birthYear: 'unknown',
			eyeColors: ['blue'],
			films: [1, 2],
			gender: 'male',
			hairColors: ['none'],
			height: 196,
			homeworld: 'Champala',
			mass: null,
			name: 'Mas Amedda',
			skinColors: ['blue'],
			species: ['chagrian'],
			starships: [],
			vehicles: []
		}
	],
	[
		'gregartypho',
		{
			birthYear: 'unknown',
			eyeColors: ['brown'],
			films: [2],
			gender: 'male',
			hairColors: ['black'],
			height: 185,
			homeworld: 'Naboo',
			mass: 85,
			name: 'Gregar Typho',
			skinColors: ['dark'],
			species: [],
			starships: ['naboofighter'],
			vehicles: []
		}
	],
	[
		'cord├®',
		{
			birthYear: 'unknown',
			eyeColors: ['brown'],
			films: [2],
			gender: 'female',
			hairColors: ['brown'],
			height: 157,
			homeworld: 'Naboo',
			mass: null,
			name: 'Cord├®',
			skinColors: ['light'],
			species: [],
			starships: [],
			vehicles: []
		}
	],
	[
		'cliegglars',
		{
			birthYear: '82BBY',
			eyeColors: ['blue'],
			films: [2],
			gender: 'male',
			hairColors: ['brown'],
			height: 183,
			homeworld: 'Tatooine',
			mass: null,
			name: 'Cliegg Lars',
			skinColors: ['fair'],
			species: [],
			starships: [],
			vehicles: []
		}
	],
	[
		'pogglethelesser',
		{
			birthYear: 'unknown',
			eyeColors: ['yellow'],
			films: [2, 3],
			gender: 'male',
			hairColors: ['none'],
			height: 183,
			homeworld: 'Geonosis',
			mass: 80,
			name: 'Poggle the Lesser',
			skinColors: ['green'],
			species: ['geonosian'],
			starships: [],
			vehicles: []
		}
	],
	[
		'luminaraunduli',
		{
			birthYear: '58BBY',
			eyeColors: ['blue'],
			films: [2, 3],
			gender: 'female',
			hairColors: ['black'],
			height: 170,
			homeworld: 'Mirial',
			mass: 56.2,
			name: 'Luminara Unduli',
			skinColors: ['yellow'],
			species: ['mirialan'],
			starships: [],
			vehicles: []
		}
	],
	[
		'barrissoffee',
		{
			birthYear: '40BBY',
			eyeColors: ['blue'],
			films: [2],
			gender: 'female',
			hairColors: ['black'],
			height: 166,
			homeworld: 'Mirial',
			mass: 50,
			name: 'Barriss Offee',
			skinColors: ['yellow'],
			species: ['mirialan'],
			starships: [],
			vehicles: []
		}
	],
	[
		'dorm├®',
		{
			birthYear: 'unknown',
			eyeColors: ['brown'],
			films: [2],
			gender: 'female',
			hairColors: ['brown'],
			height: 165,
			homeworld: 'Naboo',
			mass: null,
			name: 'Dorm├®',
			skinColors: ['light'],
			species: ['human'],
			starships: [],
			vehicles: []
		}
	],
	[
		'dooku',
		{
			birthYear: '102BBY',
			eyeColors: ['brown'],
			films: [2, 3],
			gender: 'male',
			hairColors: ['white'],
			height: 193,
			homeworld: 'Serenno',
			mass: 80,
			name: 'Dooku',
			skinColors: ['fair'],
			species: ['human'],
			starships: [],
			vehicles: ['flitknotspeeder']
		}
	],
	[
		'bailprestororgana',
		{
			birthYear: '67BBY',
			eyeColors: ['brown'],
			films: [2, 3],
			gender: 'male',
			hairColors: ['black'],
			height: 191,
			homeworld: 'Alderaan',
			mass: null,
			name: 'Bail Prestor Organa',
			skinColors: ['tan'],
			species: ['human'],
			starships: [],
			vehicles: []
		}
	],
	[
		'jangofett',
		{
			birthYear: '66BBY',
			eyeColors: ['brown'],
			films: [2],
			gender: 'male',
			hairColors: ['black'],
			height: 183,
			homeworld: 'Concord Dawn',
			mass: 79,
			name: 'Jango Fett',
			skinColors: ['tan'],
			species: [],
			starships: [],
			vehicles: []
		}
	],
	[
		'zamwesell',
		{
			birthYear: 'unknown',
			eyeColors: ['yellow'],
			films: [2],
			gender: 'female',
			hairColors: ['blonde'],
			height: 168,
			homeworld: 'Zolan',
			mass: 55,
			name: 'Zam Wesell',
			skinColors: ['fair', 'green', 'yellow'],
			species: ['clawdite'],
			starships: [],
			vehicles: ['koro2exodriveairspeeder']
		}
	],
	[
		'dexterjettster',
		{
			birthYear: 'unknown',
			eyeColors: ['yellow'],
			films: [2],
			gender: 'male',
			hairColors: ['none'],
			height: 198,
			homeworld: 'Ojom',
			mass: 102,
			name: 'Dexter Jettster',
			skinColors: ['brown'],
			species: ['besalisk'],
			starships: [],
			vehicles: []
		}
	],
	[
		'lamasu',
		{
			birthYear: 'unknown',
			eyeColors: ['black'],
			films: [2],
			gender: 'male',
			hairColors: ['none'],
			height: 229,
			homeworld: 'Kamino',
			mass: 88,
			name: 'Lama Su',
			skinColors: ['grey'],
			species: ['kaminoan'],
			starships: [],
			vehicles: []
		}
	],
	[
		'taunwe',
		{
			birthYear: 'unknown',
			eyeColors: ['black'],
			films: [2],
			gender: 'female',
			hairColors: ['none'],
			height: 213,
			homeworld: 'Kamino',
			mass: null,
			name: 'Taun We',
			skinColors: ['grey'],
			species: ['kaminoan'],
			starships: [],
			vehicles: []
		}
	],
	[
		'jocastanu',
		{
			birthYear: 'unknown',
			eyeColors: ['blue'],
			films: [2],
			gender: 'female',
			hairColors: ['white'],
			height: 167,
			homeworld: 'Coruscant',
			mass: null,
			name: 'Jocasta Nu',
			skinColors: ['fair'],
			species: ['human'],
			starships: [],
			vehicles: []
		}
	],
	[
		'r4p17',
		{
			birthYear: 'unknown',
			eyeColors: ['red', 'blue'],
			films: [2, 3],
			gender: 'female',
			hairColors: ['none'],
			height: 96,
			homeworld: null,
			mass: null,
			name: 'R4-P17',
			skinColors: ['silver', 'red'],
			species: [],
			starships: [],
			vehicles: []
		}
	],
	[
		'wattambor',
		{
			birthYear: 'unknown',
			eyeColors: null,
			films: [2],
			gender: 'male',
			hairColors: ['none'],
			height: 193,
			homeworld: 'Skako',
			mass: 48,
			name: 'Wat Tambor',
			skinColors: ['green', 'grey'],
			species: ['skakoan'],
			starships: [],
			vehicles: []
		}
	],
	[
		'sanhill',
		{
			birthYear: 'unknown',
			eyeColors: ['gold'],
			films: [2],
			gender: 'male',
			hairColors: ['none'],
			height: 191,
			homeworld: 'Muunilinst',
			mass: null,
			name: 'San Hill',
			skinColors: ['grey'],
			species: ['muun'],
			starships: [],
			vehicles: []
		}
	],
	[
		'shaakti',
		{
			birthYear: 'unknown',
			eyeColors: ['black'],
			films: [2, 3],
			gender: 'female',
			hairColors: ['none'],
			height: 178,
			homeworld: 'Shili',
			mass: 57,
			name: 'Shaak Ti',
			skinColors: ['red', 'blue', 'white'],
			species: ['togruta'],
			starships: [],
			vehicles: []
		}
	],
	[
		'grievous',
		{
			birthYear: 'unknown',
			eyeColors: ['green', 'yellow'],
			films: [3],
			gender: 'male',
			hairColors: ['none'],
			height: 216,
			homeworld: 'Kalee',
			mass: 159,
			name: 'Grievous',
			skinColors: ['brown', 'white'],
			species: ['kaleesh'],
			starships: ['belbullab22starfighter'],
			vehicles: ['tsmeu6personalwheelbike']
		}
	],
	[
		'tarfful',
		{
			birthYear: 'unknown',
			eyeColors: ['blue'],
			films: [3],
			gender: 'male',
			hairColors: ['brown'],
			height: 234,
			homeworld: 'Kashyyyk',
			mass: 136,
			name: 'Tarfful',
			skinColors: ['brown'],
			species: ['wookie'],
			starships: [],
			vehicles: []
		}
	],
	[
		'raymusantilles',
		{
			birthYear: 'unknown',
			eyeColors: ['brown'],
			films: [4, 3],
			gender: 'male',
			hairColors: ['brown'],
			height: 188,
			homeworld: 'Alderaan',
			mass: 79,
			name: 'Raymus Antilles',
			skinColors: ['light'],
			species: [],
			starships: [],
			vehicles: []
		}
	],
	[
		'slymoore',
		{
			birthYear: 'unknown',
			eyeColors: ['white'],
			films: [2, 3],
			gender: 'female',
			hairColors: ['none'],
			height: 178,
			homeworld: 'Umbara',
			mass: 48,
			name: 'Sly Moore',
			skinColors: ['pale'],
			species: [],
			starships: [],
			vehicles: []
		}
	],
	[
		'tionmedon',
		{
			birthYear: 'unknown',
			eyeColors: ['black'],
			films: [3],
			gender: 'male',
			hairColors: ['none'],
			height: 206,
			homeworld: 'Utapau',
			mass: 80,
			name: 'Tion Medon',
			skinColors: ['grey'],
			species: ['pauan'],
			starships: [],
			vehicles: []
		}
	]
]);
