import GraphQLCollection from '#utils/GraphQLCollection';
import type StarWarsApi from '#utils/star-wars';

/** The Star Wars films */
export default new GraphQLCollection<number, StarWarsApi.Film>([
	[
		4,
		{
			characters: [
				'lukeskywalker',
				'c3po',
				'r2d2',
				'darthvader',
				'leiaorgana',
				'owenlars',
				'beruwhitesunlars',
				'r5d4',
				'biggsdarklighter',
				'obiwankenobi',
				'wilhufftarkin',
				'chewbacca',
				'hansolo',
				'greedo',
				'jabbadesilijictiure',
				'wedgeantilles',
				'jektonoporkins',
				'raymusantilles'
			],
			director: 'George Lucas',
			episodeId: 4,
			openingCrawl:
				'It is a period of civil war.\n' +
				'Rebel spaceships, striking\n' +
				'from a hidden base, have won\n' +
				'their first victory against\n' +
				'the evil Galactic Empire.\n' +
				'\n' +
				'During the battle, Rebel\n' +
				'spies managed to steal secret\n' +
				"plans to the Empire's\n" +
				'ultimate weapon, the DEATH\n' +
				'STAR, an armored space\n' +
				'station with enough power\n' +
				'to destroy an entire planet.\n' +
				'\n' +
				"Pursued by the Empire's\n" +
				'sinister agents, Princess\n' +
				'Leia races home aboard her\n' +
				'starship, custodian of the\n' +
				'stolen plans that can save her\n' +
				'people and restore\n' +
				'freedom to the galaxy....',
			planets: ['tatooine', 'alderaan', 'yaviniv'],
			producers: ['Gary Kurtz', 'Rick McCallum'],
			releaseDate: '1977-05-25T00:00:00.000Z',
			species: ['human', 'droid', 'wookie', 'rodian', 'hutt'],
			starships: [
				'cr90corvette',
				'stardestroyer',
				'sentinelclasslandingcraft',
				'deathstar',
				'millenniumfalcon',
				'ywing',
				'xwing',
				'tieadvancedx1'
			],
			title: 'A New Hope',
			vehicles: ['sandcrawler', 't16skyhopper', 'x34landspeeder', 'tielnstarfighter']
		}
	],
	[
		5,
		{
			characters: [
				'lukeskywalker',
				'c3po',
				'r2d2',
				'darthvader',
				'leiaorgana',
				'obiwankenobi',
				'chewbacca',
				'hansolo',
				'wedgeantilles',
				'yoda',
				'palpatine',
				'bobafett',
				'ig88',
				'bossk',
				'landocalrissian',
				'lobot'
			],
			director: 'Irvin Kershner',
			episodeId: 5,
			openingCrawl:
				'It is a dark time for the\n' +
				'Rebellion. Although the Death\n' +
				'Star has been destroyed,\n' +
				'Imperial troops have driven the\n' +
				'Rebel forces from their hidden\n' +
				'base and pursued them across\n' +
				'the galaxy.\n' +
				'\n' +
				'Evading the dreaded Imperial\n' +
				'Starfleet, a group of freedom\n' +
				'fighters led by Luke Skywalker\n' +
				'has established a new secret\n' +
				'base on the remote ice world\n' +
				'of Hoth.\n' +
				'\n' +
				'The evil lord Darth Vader,\n' +
				'obsessed with finding young\n' +
				'Skywalker, has dispatched\n' +
				'thousands of remote probes into\n' +
				'the far reaches of space....',
			planets: ['hoth', 'dagobah', 'bespin', 'ordmantell'],
			producers: ['Gary Kurtz', 'Rick McCallum'],
			releaseDate: '1980-05-17T00:00:00.000Z',
			species: ['human', 'droid', 'wookie', 'yodasspecies', 'trandoshan'],
			starships: [
				'stardestroyer',
				'millenniumfalcon',
				'ywing',
				'xwing',
				'executor',
				'rebeltransport',
				'slave1',
				'imperialshuttle',
				'ef76nebulonbescortfrigate'
			],
			title: 'The Empire Strikes Back',
			vehicles: ['tielnstarfighter', 'snowspeeder', 'tiebomber', 'atat', 'atst', 'stormivtwinpodcloudcar']
		}
	],
	[
		6,
		{
			characters: [
				'lukeskywalker',
				'c3po',
				'r2d2',
				'darthvader',
				'leiaorgana',
				'obiwankenobi',
				'chewbacca',
				'hansolo',
				'jabbadesilijictiure',
				'wedgeantilles',
				'yoda',
				'palpatine',
				'bobafett',
				'landocalrissian',
				'ackbar',
				'monmothma',
				'arvelcrynyd',
				'wicketsystriwarrick',
				'niennunb',
				'bibfortuna'
			],
			director: 'Richard Marquand',
			episodeId: 6,
			openingCrawl:
				'Luke Skywalker has returned to\n' +
				'his home planet of Tatooine in\n' +
				'an attempt to rescue his\n' +
				'friend Han Solo from the\n' +
				'clutches of the vile gangster\n' +
				'Jabba the Hutt.\n' +
				'\n' +
				'Little does Luke know that the\n' +
				'GALACTIC EMPIRE has secretly\n' +
				'begun construction on a new\n' +
				'armored space station even\n' +
				'more powerful than the first\n' +
				'dreaded Death Star.\n' +
				'\n' +
				'When completed, this ultimate\n' +
				'weapon will spell certain doom\n' +
				'for the small band of rebels\n' +
				'struggling to restore freedom\n' +
				'to the galaxy...',
			planets: ['tatooine', 'dagobah', 'endor', 'naboo', 'coruscant'],
			producers: ['Howard G. Kazanjian', 'George Lucas', 'Rick McCallum'],
			releaseDate: '1983-05-25T00:00:00.000Z',
			species: ['human', 'droid', 'wookie', 'hutt', 'yodasspecies', 'moncalamari', 'ewok', 'sullustan', 'twilek'],
			starships: [
				'cr90corvette',
				'stardestroyer',
				'millenniumfalcon',
				'ywing',
				'xwing',
				'executor',
				'rebeltransport',
				'imperialshuttle',
				'ef76nebulonbescortfrigate',
				'calamaricruiser',
				'awing',
				'bwing'
			],
			title: 'Return of the Jedi',
			vehicles: ['tielnstarfighter', 'tiebomber', 'atat', 'atst', 'sailbarge', 'banthaiicargoskiff', 'tieininterceptor', 'imperialspeederbike']
		}
	],
	[
		1,
		{
			characters: [
				'c3po',
				'r2d2',
				'obiwankenobi',
				'anakinskywalker',
				'jabbadesilijictiure',
				'yoda',
				'palpatine',
				'quigonjinn',
				'nutegunray',
				'finisvalorum',
				'padmeamidala',
				'jarjarbinks',
				'roostarpals',
				'rugornass',
				'ricolie',
				'watto',
				'sebulba',
				'quarshpanaka',
				'shmiskywalker',
				'darthmaul',
				'aylasecura',
				'rattstyerel',
				'dudbolt',
				'gasgano',
				'benquadinaros',
				'macewindu',
				'kiadimundi',
				'kitfisto',
				'eethkoth',
				'adigallia',
				'saeseetiin',
				'yaraelpoof',
				'plokoon',
				'masamedda'
			],
			director: 'George Lucas',
			episodeId: 1,
			openingCrawl:
				'Turmoil has engulfed the\n' +
				'Galactic Republic. The taxation\n' +
				'of trade routes to outlying star\n' +
				'systems is in dispute.\n' +
				'\n' +
				'Hoping to resolve the matter\n' +
				'with a blockade of deadly\n' +
				'battleships, the greedy Trade\n' +
				'Federation has stopped all\n' +
				'shipping to the small planet\n' +
				'of Naboo.\n' +
				'\n' +
				'While the Congress of the\n' +
				'Republic endlessly debates\n' +
				'this alarming chain of events,\n' +
				'the Supreme Chancellor has\n' +
				'secretly dispatched two Jedi\n' +
				'Knights, the guardians of\n' +
				'peace and justice in the\n' +
				'galaxy, to settle the conflict....',
			planets: ['tatooine', 'naboo', 'coruscant'],
			producers: ['Rick McCallum'],
			releaseDate: '1999-05-19T00:00:00.000Z',
			species: [
				'human',
				'droid',
				'yodasspecies',
				'neimodian',
				'gungan',
				'toydarian',
				'dug',
				'twilek',
				'aleena',
				'vulptereen',
				'xexto',
				'toong',
				'cerean',
				'nautolan',
				'zabrak',
				'tholothian',
				'iktotchi',
				'quermian',
				'keldor',
				'chagrian'
			],
			starships: ['republiccruiser', 'droidcontrolship', 'naboofighter', 'nabooroyalstarship', 'scimitar'],
			title: 'The Phantom Menace',
			vehicles: [
				'vulturedroid',
				'multitrooptransport',
				'armoredassaulttank',
				'singletrooperaerialplatform',
				'c9979landingcraft',
				'tribubblebongo',
				'sithspeeder'
			]
		}
	],
	[
		2,
		{
			characters: [
				'c3po',
				'r2d2',
				'owenlars',
				'beruwhitesunlars',
				'obiwankenobi',
				'anakinskywalker',
				'yoda',
				'palpatine',
				'bobafett',
				'nutegunray',
				'padmeamidala',
				'jarjarbinks',
				'watto',
				'shmiskywalker',
				'aylasecura',
				'macewindu',
				'kiadimundi',
				'kitfisto',
				'plokoon',
				'masamedda',
				'gregartypho',
				'corde',
				'cliegglars',
				'pogglethelesser',
				'luminaraunduli',
				'barrissoffee',
				'dorme',
				'dooku',
				'bailprestororgana',
				'jangofett',
				'zamwesell',
				'dexterjettster',
				'lamasu',
				'taunwe',
				'jocastanu',
				'r4p17',
				'wattambor',
				'sanhill',
				'shaakti',
				'slymoore'
			],
			director: 'George Lucas',
			episodeId: 2,
			openingCrawl:
				'There is unrest in the Galactic\n' +
				'Senate. Several thousand solar\n' +
				'systems have declared their\n' +
				'intentions to leave the Republic.\n' +
				'\n' +
				'This separatist movement,\n' +
				'under the leadership of the\n' +
				'mysterious Count Dooku, has\n' +
				'made it difficult for the limited\n' +
				'number of Jedi Knights to maintain \n' +
				'peace and order in the galaxy.\n' +
				'\n' +
				'Senator Amidala, the former\n' +
				'Queen of Naboo, is returning\n' +
				'to the Galactic Senate to vote\n' +
				'on the critical issue of creating\n' +
				'an ARMY OF THE REPUBLIC\n' +
				'to assist the overwhelmed\n' +
				'Jedi....',
			planets: ['tatooine', 'naboo', 'coruscant', 'kamino', 'geonosis'],
			producers: ['Rick McCallum'],
			releaseDate: '2002-05-16T00:00:00.000Z',
			species: [
				'human',
				'droid',
				'yodasspecies',
				'gungan',
				'toydarian',
				'twilek',
				'geonosian',
				'mirialan',
				'clawdite',
				'besalisk',
				'kaminoan',
				'skakoan',
				'muun',
				'togruta'
			],
			starships: [
				'slave1',
				'droidcontrolship',
				'naboofighter',
				'jtypediplomaticbarge',
				'aa9coruscantfreighter',
				'jedistarfighter',
				'htypenubianyacht',
				'republicassaultship',
				'solarsailer'
			],
			title: 'Attack of the Clones',
			vehicles: [
				'sandcrawler',
				'zephyrgswoopbike',
				'koro2exodriveairspeeder',
				'xj6airspeeder',
				'laati',
				'laatc',
				'atte',
				'spha',
				'flitknotspeeder',
				'neimoidianshuttle',
				'geonosianstarfighter'
			]
		}
	],
	[
		3,
		{
			characters: [
				'lukeskywalker',
				'c3po',
				'r2d2',
				'darthvader',
				'leiaorgana',
				'owenlars',
				'beruwhitesunlars',
				'obiwankenobi',
				'anakinskywalker',
				'wilhufftarkin',
				'chewbacca',
				'yoda',
				'palpatine',
				'nutegunray',
				'padmeamidala',
				'aylasecura',
				'macewindu',
				'kiadimundi',
				'kitfisto',
				'eethkoth',
				'adigallia',
				'saeseetiin',
				'plokoon',
				'pogglethelesser',
				'luminaraunduli',
				'dooku',
				'bailprestororgana',
				'r4p17',
				'shaakti',
				'grievous',
				'tarfful',
				'raymusantilles',
				'slymoore',
				'tionmedon'
			],
			director: 'George Lucas',
			episodeId: 3,
			openingCrawl:
				'War! The Republic is crumbling\n' +
				'under attacks by the ruthless\n' +
				'Sith Lord, Count Dooku.\n' +
				'There are heroes on both sides.\n' +
				'Evil is everywhere.\n' +
				'\n' +
				'In a stunning move, the\n' +
				'fiendish droid leader, General\n' +
				'Grievous, has swept into the\n' +
				'Republic capital and kidnapped\n' +
				'Chancellor Palpatine, leader of\n' +
				'the Galactic Senate.\n' +
				'\n' +
				'As the Separatist Droid Army\n' +
				'attempts to flee the besieged\n' +
				'capital with their valuable\n' +
				'hostage, two Jedi Knights lead a\n' +
				'desperate mission to rescue the\n' +
				'captive Chancellor....',
			planets: [
				'tatooine',
				'alderaan',
				'dagobah',
				'naboo',
				'coruscant',
				'utapau',
				'mustafar',
				'kashyyyk',
				'polismassa',
				'mygeeto',
				'felucia',
				'catoneimoidia',
				'saleucami'
			],
			producers: ['Rick McCallum'],
			releaseDate: '2005-05-19T00:00:00.000Z',
			species: [
				'human',
				'droid',
				'wookie',
				'yodasspecies',
				'twilek',
				'toong',
				'cerean',
				'tholothian',
				'iktotchi',
				'quermian',
				'keldor',
				'chagrian',
				'geonosian',
				'mirialan',
				'clawdite',
				'skakoan',
				'muun',
				'togruta',
				'kaleesh',
				'pauan'
			],
			starships: [
				'cr90corvette',
				'droidcontrolship',
				'jedistarfighter',
				'tradefederationcruiser',
				'thetaclasst2cshuttle',
				'republicattackcruiser',
				'naboostarskiff',
				'jediinterceptor',
				'arc170',
				'bankingclanfrigte',
				'belbullab22starfighter',
				'vwing'
			],
			title: 'Revenge of the Sith',
			vehicles: [
				'vulturedroid',
				'laati',
				'atte',
				'neimoidianshuttle',
				'tsmeu6personalwheelbike',
				'emergencyfirespeeder',
				'droidtrifighter',
				'oevvaorjetcatamaran',
				'raddaughgnaspfluttercraft',
				'cloneturbotank',
				'corporatealliancetankdroid',
				'droidgunship',
				'atrt'
			]
		}
	]
]);
