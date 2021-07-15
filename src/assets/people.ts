import GraphQLCollection from '#utils/GraphQLCollection';
import type StarWarsApi from '#utils/star-wars';

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
			homeworld: 'tatooine',
			mass: 77,
			name: 'Luke Skywalker',
			skinColors: ['fair'],
			species: ['human'],
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
			homeworld: 'tatooine',
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
			homeworld: 'naboo',
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
			homeworld: 'tatooine',
			mass: 136,
			name: 'Darth Vader',
			skinColors: ['white'],
			species: ['human'],
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
			homeworld: 'alderaan',
			mass: 49,
			name: 'Leia Organa',
			skinColors: ['light'],
			species: ['human'],
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
			homeworld: 'tatooine',
			mass: 120,
			name: 'Owen Lars',
			skinColors: ['light'],
			species: ['human'],
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
			homeworld: 'tatooine',
			mass: 75,
			name: 'Beru Whitesun Lars',
			skinColors: ['light'],
			species: ['human'],
			starships: [],
			vehicles: []
		}
	],
	[
		'r5d4',
		{
			birthYear: null,
			eyeColors: ['red'],
			films: [4],
			gender: null,
			hairColors: null,
			height: 97,
			homeworld: 'tatooine',
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
			homeworld: 'tatooine',
			mass: 84,
			name: 'Biggs Darklighter',
			skinColors: ['light'],
			species: ['human'],
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
			homeworld: 'stewjon',
			mass: 77,
			name: 'Obi-Wan Kenobi',
			skinColors: ['fair'],
			species: ['human'],
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
			homeworld: 'tatooine',
			mass: 84,
			name: 'Anakin Skywalker',
			skinColors: ['fair'],
			species: ['human'],
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
			homeworld: 'eriadu',
			mass: null,
			name: 'Wilhuff Tarkin',
			skinColors: ['fair'],
			species: ['human'],
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
			homeworld: 'kashyyyk',
			mass: 112,
			name: 'Chewbacca',
			skinColors: null,
			species: ['wookiee'],
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
			homeworld: 'corellia',
			mass: 80,
			name: 'Han Solo',
			skinColors: ['fair'],
			species: ['human'],
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
			homeworld: 'rodia',
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
			homeworld: 'nal hutta',
			mass: 1358,
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
			homeworld: 'corellia',
			mass: 77,
			name: 'Wedge Antilles',
			skinColors: ['fair'],
			species: ['human'],
			starships: ['xwing'],
			vehicles: ['snowspeeder']
		}
	],
	[
		'jektonoporkins',
		{
			birthYear: null,
			eyeColors: ['blue'],
			films: [4],
			gender: 'male',
			hairColors: ['brown'],
			height: 180,
			homeworld: 'bestine iv',
			mass: 110,
			name: 'Jek Tono Porkins',
			skinColors: ['fair'],
			species: ['human'],
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
			homeworld: 'naboo',
			mass: 75,
			name: 'Palpatine',
			skinColors: ['pale'],
			species: ['human'],
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
			homeworld: 'kamino',
			mass: 78.2,
			name: 'Boba Fett',
			skinColors: ['fair'],
			species: ['human'],
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
			homeworld: 'trandosha',
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
			homeworld: 'socorro',
			mass: 79,
			name: 'Lando Calrissian',
			skinColors: ['dark'],
			species: ['human'],
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
			homeworld: 'bespin',
			mass: 79,
			name: 'Lobot',
			skinColors: ['light'],
			species: ['human'],
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
			homeworld: 'mon cala',
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
			homeworld: 'chandrila',
			mass: null,
			name: 'Mon Mothma',
			skinColors: ['fair'],
			species: ['human'],
			starships: [],
			vehicles: []
		}
	],
	[
		'arvelcrynyd',
		{
			birthYear: null,
			eyeColors: ['brown'],
			films: [6],
			gender: 'male',
			hairColors: ['brown'],
			height: null,
			homeworld: null,
			mass: null,
			name: 'Arvel Crynyd',
			skinColors: ['fair'],
			species: ['human'],
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
			homeworld: 'endor',
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
			birthYear: null,
			eyeColors: ['black'],
			films: [6],
			gender: 'male',
			hairColors: ['none'],
			height: 160,
			homeworld: 'sullust',
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
			species: ['human'],
			starships: [],
			vehicles: ['tribubblebongo']
		}
	],
	[
		'nutegunray',
		{
			birthYear: null,
			eyeColors: ['red'],
			films: [1, 2, 3],
			gender: 'male',
			hairColors: ['none'],
			height: 191,
			homeworld: 'cato neimoidia',
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
			homeworld: 'coruscant',
			mass: null,
			name: 'Finis Valorum',
			skinColors: ['fair'],
			species: ['human'],
			starships: [],
			vehicles: []
		}
	],
	[
		'padmeamidala',
		{
			birthYear: '46BBY',
			eyeColors: ['brown'],
			films: [1, 2, 3],
			gender: 'female',
			hairColors: ['brown'],
			height: 185,
			homeworld: 'naboo',
			mass: 45,
			name: 'Padmé Amidala',
			skinColors: ['light'],
			species: ['human'],
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
			homeworld: 'naboo',
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
			birthYear: null,
			eyeColors: ['orange'],
			films: [1],
			gender: 'male',
			hairColors: ['none'],
			height: 224,
			homeworld: 'naboo',
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
			birthYear: null,
			eyeColors: ['orange'],
			films: [1],
			gender: 'male',
			hairColors: ['none'],
			height: 206,
			homeworld: 'naboo',
			mass: null,
			name: 'Rugor Nass',
			skinColors: ['green'],
			species: ['gungan'],
			starships: [],
			vehicles: []
		}
	],
	[
		'ricolie',
		{
			birthYear: null,
			eyeColors: ['blue'],
			films: [1],
			gender: 'male',
			hairColors: ['brown'],
			height: 183,
			homeworld: 'naboo',
			mass: null,
			name: 'Ric Olié',
			skinColors: ['fair'],
			species: ['human'],
			starships: ['nabooroyalstarship'],
			vehicles: []
		}
	],
	[
		'watto',
		{
			birthYear: null,
			eyeColors: ['yellow'],
			films: [1, 2],
			gender: 'male',
			hairColors: ['black'],
			height: 137,
			homeworld: 'toydaria',
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
			birthYear: null,
			eyeColors: ['orange'],
			films: [1],
			gender: 'male',
			hairColors: ['none'],
			height: 112,
			homeworld: 'malastare',
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
			homeworld: 'naboo',
			mass: null,
			name: 'Quarsh Panaka',
			skinColors: ['dark'],
			species: ['human'],
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
			homeworld: 'tatooine',
			mass: null,
			name: 'Shmi Skywalker',
			skinColors: ['fair'],
			species: ['human'],
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
			homeworld: 'dathomir',
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
			birthYear: null,
			eyeColors: ['pink'],
			films: [6],
			gender: 'male',
			hairColors: ['none'],
			height: 180,
			homeworld: 'ryloth',
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
			homeworld: 'ryloth',
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
			birthYear: null,
			eyeColors: null,
			films: [1],
			gender: 'male',
			hairColors: ['none'],
			height: 79,
			homeworld: 'aleen minor',
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
			birthYear: null,
			eyeColors: ['yellow'],
			films: [1],
			gender: 'male',
			hairColors: ['none'],
			height: 94,
			homeworld: 'vulpter',
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
			birthYear: null,
			eyeColors: ['black'],
			films: [1],
			gender: 'male',
			hairColors: ['none'],
			height: 122,
			homeworld: 'troiken',
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
			birthYear: null,
			eyeColors: ['orange'],
			films: [1],
			gender: 'male',
			hairColors: ['none'],
			height: 163,
			homeworld: 'tund',
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
			homeworld: 'haruun kal',
			mass: 84,
			name: 'Mace Windu',
			skinColors: ['dark'],
			species: ['human'],
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
			homeworld: 'cerea',
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
			birthYear: null,
			eyeColors: ['black'],
			films: [1, 2, 3],
			gender: 'male',
			hairColors: ['none'],
			height: 196,
			homeworld: 'glee anselm',
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
			birthYear: null,
			eyeColors: ['brown'],
			films: [1, 3],
			gender: 'male',
			hairColors: ['black'],
			height: 171,
			homeworld: 'iridonia',
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
			birthYear: null,
			eyeColors: ['blue'],
			films: [1, 3],
			gender: 'female',
			hairColors: ['none'],
			height: 184,
			homeworld: 'coruscant',
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
			birthYear: null,
			eyeColors: ['orange'],
			films: [1, 3],
			gender: 'male',
			hairColors: ['none'],
			height: 188,
			homeworld: 'iktotch',
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
			birthYear: null,
			eyeColors: ['yellow'],
			films: [1],
			gender: 'male',
			hairColors: ['none'],
			height: 264,
			homeworld: 'quermia',
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
			homeworld: 'dorin',
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
			birthYear: null,
			eyeColors: ['blue'],
			films: [1, 2],
			gender: 'male',
			hairColors: ['none'],
			height: 196,
			homeworld: 'champala',
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
			birthYear: null,
			eyeColors: ['brown'],
			films: [2],
			gender: 'male',
			hairColors: ['black'],
			height: 185,
			homeworld: 'naboo',
			mass: 85,
			name: 'Gregar Typho',
			skinColors: ['dark'],
			species: ['human'],
			starships: ['naboofighter'],
			vehicles: []
		}
	],
	[
		'corde',
		{
			birthYear: null,
			eyeColors: ['brown'],
			films: [2],
			gender: 'female',
			hairColors: ['brown'],
			height: 157,
			homeworld: 'naboo',
			mass: null,
			name: 'Cordé',
			skinColors: ['light'],
			species: ['human'],
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
			homeworld: 'tatooine',
			mass: null,
			name: 'Cliegg Lars',
			skinColors: ['fair'],
			species: ['human'],
			starships: [],
			vehicles: []
		}
	],
	[
		'pogglethelesser',
		{
			birthYear: null,
			eyeColors: ['yellow'],
			films: [2, 3],
			gender: 'male',
			hairColors: ['none'],
			height: 183,
			homeworld: 'geonosis',
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
			homeworld: 'mirial',
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
			homeworld: 'mirial',
			mass: 50,
			name: 'Barriss Offee',
			skinColors: ['yellow'],
			species: ['mirialan'],
			starships: [],
			vehicles: []
		}
	],
	[
		'dorme',
		{
			birthYear: null,
			eyeColors: ['brown'],
			films: [2],
			gender: 'female',
			hairColors: ['brown'],
			height: 165,
			homeworld: 'naboo',
			mass: null,
			name: 'Dormé',
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
			homeworld: 'serenno',
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
			homeworld: 'alderaan',
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
			homeworld: 'concord dawn',
			mass: 79,
			name: 'Jango Fett',
			skinColors: ['tan'],
			species: ['human'],
			starships: [],
			vehicles: []
		}
	],
	[
		'zamwesell',
		{
			birthYear: null,
			eyeColors: ['yellow'],
			films: [2],
			gender: 'female',
			hairColors: ['blonde'],
			height: 168,
			homeworld: 'zolan',
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
			birthYear: null,
			eyeColors: ['yellow'],
			films: [2],
			gender: 'male',
			hairColors: ['none'],
			height: 198,
			homeworld: 'ojom',
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
			birthYear: null,
			eyeColors: ['black'],
			films: [2],
			gender: 'male',
			hairColors: ['none'],
			height: 229,
			homeworld: 'kamino',
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
			birthYear: null,
			eyeColors: ['black'],
			films: [2],
			gender: 'female',
			hairColors: ['none'],
			height: 213,
			homeworld: 'kamino',
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
			birthYear: null,
			eyeColors: ['blue'],
			films: [2],
			gender: 'female',
			hairColors: ['white'],
			height: 167,
			homeworld: 'coruscant',
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
			birthYear: null,
			eyeColors: ['red', 'blue'],
			films: [2, 3],
			gender: 'female',
			hairColors: ['none'],
			height: 96,
			homeworld: null,
			mass: null,
			name: 'R4-P17',
			skinColors: ['silver', 'red'],
			species: ['droid'],
			starships: [],
			vehicles: []
		}
	],
	[
		'wattambor',
		{
			birthYear: null,
			eyeColors: null,
			films: [2],
			gender: 'male',
			hairColors: ['none'],
			height: 193,
			homeworld: 'skako',
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
			birthYear: null,
			eyeColors: ['gold'],
			films: [2],
			gender: 'male',
			hairColors: ['none'],
			height: 191,
			homeworld: 'muunilinst',
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
			birthYear: null,
			eyeColors: ['black'],
			films: [2, 3],
			gender: 'female',
			hairColors: ['none'],
			height: 178,
			homeworld: 'shili',
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
			birthYear: null,
			eyeColors: ['green', 'yellow'],
			films: [3],
			gender: 'male',
			hairColors: ['none'],
			height: 216,
			homeworld: 'kalee',
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
			birthYear: null,
			eyeColors: ['blue'],
			films: [3],
			gender: 'male',
			hairColors: ['brown'],
			height: 234,
			homeworld: 'kashyyyk',
			mass: 136,
			name: 'Tarfful',
			skinColors: ['brown'],
			species: ['wookiee'],
			starships: [],
			vehicles: []
		}
	],
	[
		'raymusantilles',
		{
			birthYear: null,
			eyeColors: ['brown'],
			films: [4, 3],
			gender: 'male',
			hairColors: ['brown'],
			height: 188,
			homeworld: 'alderaan',
			mass: 79,
			name: 'Raymus Antilles',
			skinColors: ['light'],
			species: ['human'],
			starships: [],
			vehicles: []
		}
	],
	[
		'slymoore',
		{
			birthYear: null,
			eyeColors: ['white'],
			films: [2, 3],
			gender: 'female',
			hairColors: ['none'],
			height: 178,
			homeworld: 'umbara',
			mass: 48,
			name: 'Sly Moore',
			skinColors: ['pale'],
			species: ['umbaran'],
			starships: [],
			vehicles: []
		}
	],
	[
		'tionmedon',
		{
			birthYear: null,
			eyeColors: ['black'],
			films: [3],
			gender: 'male',
			hairColors: ['none'],
			height: 206,
			homeworld: 'utapau',
			mass: 80,
			name: 'Tion Medon',
			skinColors: ['grey'],
			species: ['pauan'],
			starships: [],
			vehicles: []
		}
	]
]);
