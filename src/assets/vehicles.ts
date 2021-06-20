import GraphQLCollection from '#utils/GraphQLCollection';
import type StarWarsApi from '#utils/star-wars';

/** The Star Wars Vehicles */
export default new GraphQLCollection<string, StarWarsApi.Vehicle>([
	[
		'sandcrawler',
		{
			cargoCapacity: 50000,
			consumables: '2 months',
			costInCredits: 150000,
			crew: 46,
			films: [4, 2],
			length: 36.8,
			manufacturers: ['Corellia Mining Corporation'],
			maxAtmospheringSpeed: 30,
			model: 'Digger Crawler',
			name: 'Sand Crawler',
			passengers: 30,
			pilots: [],
			vehicleClass: 'wheeled'
		}
	],
	[
		't16skyhopper',
		{
			cargoCapacity: 50,
			consumables: '0',
			costInCredits: 14500,
			crew: 1,
			films: [4],
			length: 10.4,
			manufacturers: ['Incom Corporation'],
			maxAtmospheringSpeed: 1200,
			model: 'T-16 skyhopper',
			name: 'T-16 skyhopper',
			passengers: 1,
			pilots: [],
			vehicleClass: 'repulsorcraft'
		}
	],
	[
		'x34landspeeder',
		{
			cargoCapacity: 5,
			consumables: null,
			costInCredits: 10550,
			crew: 1,
			films: [4],
			length: 3.4,
			manufacturers: ['SoroSuub Corporation'],
			maxAtmospheringSpeed: 250,
			model: 'X-34 landspeeder',
			name: 'X-34 landspeeder',
			passengers: 1,
			pilots: [],
			vehicleClass: 'repulsorcraft'
		}
	],
	[
		'tielnstarfighter',
		{
			cargoCapacity: 65,
			consumables: '2 days',
			costInCredits: null,
			crew: 1,
			films: [4, 5, 6],
			length: 6.4,
			manufacturers: ['Sienar Fleet Systems'],
			maxAtmospheringSpeed: 1200,
			model: 'Twin Ion Engine/Ln Starfighter',
			name: 'TIE/LN starfighter',
			passengers: 0,
			pilots: [],
			vehicleClass: 'starfighter'
		}
	],
	[
		'snowspeeder',
		{
			cargoCapacity: 10,
			consumables: 'none',
			costInCredits: null,
			crew: 2,
			films: [5],
			length: 4.5,
			manufacturers: ['Incom corporation'],
			maxAtmospheringSpeed: 650,
			model: 't-47 airspeeder',
			name: 'Snowspeeder',
			passengers: 0,
			pilots: ['lukeskywalker', 'wedgeantilles'],
			vehicleClass: 'airspeeder'
		}
	],
	[
		'tiebomber',
		{
			cargoCapacity: NaN,
			consumables: '2 days',
			costInCredits: null,
			crew: 1,
			films: [5, 6],
			length: 7.8,
			manufacturers: ['Sienar Fleet Systems'],
			maxAtmospheringSpeed: 850,
			model: 'TIE/sa bomber',
			name: 'TIE bomber',
			passengers: 0,
			pilots: [],
			vehicleClass: 'space/planetary bomber'
		}
	],
	[
		'atat',
		{
			cargoCapacity: 1000,
			consumables: null,
			costInCredits: null,
			crew: 5,
			films: [5, 6],
			length: 20,
			manufacturers: ['Kuat Drive Yards', 'Imperial Department of Military Research'],
			maxAtmospheringSpeed: 60,
			model: 'All Terrain Armored Transport',
			name: 'AT-AT',
			passengers: 40,
			pilots: [],
			vehicleClass: 'assault walker'
		}
	],
	[
		'atst',
		{
			cargoCapacity: 200,
			consumables: 'none',
			costInCredits: null,
			crew: 2,
			films: [5, 6],
			length: 2,
			manufacturers: ['Kuat Drive Yards', 'Imperial Department of Military Research'],
			maxAtmospheringSpeed: 90,
			model: 'All Terrain Scout Transport',
			name: 'AT-ST',
			passengers: 0,
			pilots: ['chewbacca'],
			vehicleClass: 'walker'
		}
	],
	[
		'stormivtwinpodcloudcar',
		{
			cargoCapacity: 10,
			consumables: '1 day',
			costInCredits: 75000,
			crew: 2,
			films: [5],
			length: 7,
			manufacturers: ['Bespin Motors'],
			maxAtmospheringSpeed: 1500,
			model: 'Storm IV Twin-Pod',
			name: 'Storm IV Twin-Pod cloud car',
			passengers: 0,
			pilots: [],
			vehicleClass: 'repulsorcraft'
		}
	],
	[
		'sailbarge',
		{
			cargoCapacity: 2000000,
			consumables: 'Live food tanks',
			costInCredits: 285000,
			crew: 26,
			films: [6],
			length: 30,
			manufacturers: ['Ubrikkian Industries Custom Vehicle Division'],
			maxAtmospheringSpeed: 100,
			model: 'Modified Luxury Sail Barge',
			name: 'Sail barge',
			passengers: 500,
			pilots: [],
			vehicleClass: 'sail barge'
		}
	],
	[
		'banthaiicargoskiff',
		{
			cargoCapacity: 135000,
			consumables: '1 day',
			costInCredits: 8000,
			crew: 5,
			films: [6],
			length: 9.5,
			manufacturers: ['Ubrikkian Industries'],
			maxAtmospheringSpeed: 250,
			model: 'Bantha-II',
			name: 'Bantha-II cargo skiff',
			passengers: 16,
			pilots: [],
			vehicleClass: 'repulsorcraft cargo skiff'
		}
	],
	[
		'tieininterceptor',
		{
			cargoCapacity: 75,
			consumables: '2 days',
			costInCredits: null,
			crew: 1,
			films: [6],
			length: 9.6,
			manufacturers: ['Sienar Fleet Systems'],
			maxAtmospheringSpeed: 1250,
			model: 'Twin Ion Engine Interceptor',
			name: 'TIE/IN interceptor',
			passengers: 0,
			pilots: [],
			vehicleClass: 'starfighter'
		}
	],
	[
		'imperialspeederbike',
		{
			cargoCapacity: 4,
			consumables: '1 day',
			costInCredits: 8000,
			crew: 1,
			films: [6],
			length: 3,
			manufacturers: ['Aratech Repulsor Company'],
			maxAtmospheringSpeed: 360,
			model: '74-Z speeder bike',
			name: 'Imperial Speeder Bike',
			passengers: 1,
			pilots: ['lukeskywalker', 'leiaorgana'],
			vehicleClass: 'speeder'
		}
	],
	[
		'vulturedroid',
		{
			cargoCapacity: 0,
			consumables: 'none',
			costInCredits: null,
			crew: 0,
			films: [1, 3],
			length: 3.5,
			manufacturers: ['Haor Chall Engineering', 'Baktoid Armor Workshop'],
			maxAtmospheringSpeed: 1200,
			model: 'Vulture-class droid starfighter',
			name: 'Vulture Droid',
			passengers: 0,
			pilots: [],
			vehicleClass: 'starfighter'
		}
	],
	[
		'multitrooptransport',
		{
			cargoCapacity: 12000,
			consumables: null,
			costInCredits: 138000,
			crew: 4,
			films: [1],
			length: 31,
			manufacturers: ['Baktoid Armor Workshop'],
			maxAtmospheringSpeed: 35,
			model: 'Multi-Troop Transport',
			name: 'Multi-Troop Transport',
			passengers: 112,
			pilots: [],
			vehicleClass: 'repulsorcraft'
		}
	],
	[
		'armoredassaulttank',
		{
			cargoCapacity: null,
			consumables: null,
			costInCredits: null,
			crew: 4,
			films: [1],
			length: 9.75,
			manufacturers: ['Baktoid Armor Workshop'],
			maxAtmospheringSpeed: 55,
			model: 'Armoured Assault Tank',
			name: 'Armored Assault Tank',
			passengers: 6,
			pilots: [],
			vehicleClass: 'repulsorcraft'
		}
	],
	[
		'singletrooperaerialplatform',
		{
			cargoCapacity: NaN,
			consumables: 'none',
			costInCredits: 2500,
			crew: 1,
			films: [1],
			length: 2,
			manufacturers: ['Baktoid Armor Workshop'],
			maxAtmospheringSpeed: 400,
			model: 'Single Trooper Aerial Platform',
			name: 'Single Trooper Aerial Platform',
			passengers: 0,
			pilots: [],
			vehicleClass: 'repulsorcraft'
		}
	],
	[
		'c9979landingcraft',
		{
			cargoCapacity: 1800000,
			consumables: '1 day',
			costInCredits: 200000,
			crew: 140,
			films: [1],
			length: 210,
			manufacturers: ['Haor Chall Engineering'],
			maxAtmospheringSpeed: 587,
			model: 'C-9979 landing craft',
			name: 'C-9979 landing craft',
			passengers: 284,
			pilots: [],
			vehicleClass: 'landing craft'
		}
	],
	[
		'tribubblebongo',
		{
			cargoCapacity: 1600,
			consumables: null,
			costInCredits: null,
			crew: 1,
			films: [1],
			length: 15,
			manufacturers: ['Otoh Gunga Bongameken Cooperative'],
			maxAtmospheringSpeed: 85,
			model: 'Tribubble bongo',
			name: 'Tribubble bongo',
			passengers: 2,
			pilots: ['obiwankenobi', 'quigonjinn'],
			vehicleClass: 'submarine'
		}
	],
	[
		'sithspeeder',
		{
			cargoCapacity: 2,
			consumables: null,
			costInCredits: 4000,
			crew: 1,
			films: [1],
			length: 1.5,
			manufacturers: ['Razalon'],
			maxAtmospheringSpeed: 180,
			model: 'FC-20 speeder bike',
			name: 'Sith speeder',
			passengers: 0,
			pilots: ['darthmaul'],
			vehicleClass: 'speeder'
		}
	],
	[
		'zephyrgswoopbike',
		{
			cargoCapacity: 200,
			consumables: 'none',
			costInCredits: 5750,
			crew: 1,
			films: [2],
			length: 3.68,
			manufacturers: ['Mobquet Swoops and Speeders'],
			maxAtmospheringSpeed: 350,
			model: 'Zephyr-G swoop bike',
			name: 'Zephyr-G swoop bike',
			passengers: 1,
			pilots: ['anakinskywalker'],
			vehicleClass: 'repulsorcraft'
		}
	],
	[
		'koro2exodriveairspeeder',
		{
			cargoCapacity: 80,
			consumables: null,
			costInCredits: null,
			crew: 1,
			films: [2],
			length: 6.6,
			manufacturers: ['Desler Gizh Outworld Mobility Corporation'],
			maxAtmospheringSpeed: 800,
			model: 'Koro-2 Exodrive airspeeder',
			name: 'Koro-2 Exodrive airspeeder',
			passengers: 1,
			pilots: ['zamwesell'],
			vehicleClass: 'airspeeder'
		}
	],
	[
		'xj6airspeeder',
		{
			cargoCapacity: null,
			consumables: null,
			costInCredits: null,
			crew: 1,
			films: [2],
			length: 6.23,
			manufacturers: ['Narglatch AirTech prefabricated kit'],
			maxAtmospheringSpeed: 720,
			model: 'XJ-6 airspeeder',
			name: 'XJ-6 airspeeder',
			passengers: 1,
			pilots: ['anakinskywalker'],
			vehicleClass: 'airspeeder'
		}
	],
	[
		'laati',
		{
			cargoCapacity: 170,
			consumables: null,
			costInCredits: null,
			crew: 6,
			films: [2, 3],
			length: 17.4,
			manufacturers: ['Rothana Heavy Engineering'],
			maxAtmospheringSpeed: 620,
			model: 'Low Altitude Assault Transport/infrantry',
			name: 'LAAT/i',
			passengers: 30,
			pilots: [],
			vehicleClass: 'gunship'
		}
	],
	[
		'laatc',
		{
			cargoCapacity: 40000,
			consumables: null,
			costInCredits: null,
			crew: 1,
			films: [2],
			length: 28.82,
			manufacturers: ['Rothana Heavy Engineering'],
			maxAtmospheringSpeed: 620,
			model: 'Low Altitude Assault Transport/carrier',
			name: 'LAAT/c',
			passengers: 0,
			pilots: [],
			vehicleClass: 'gunship'
		}
	],
	[
		'atte',
		{
			cargoCapacity: 10000,
			consumables: '21 days',
			costInCredits: null,
			crew: 6,
			films: [2, 3],
			length: 13.2,
			manufacturers: ['Rothana Heavy Engineering', 'Kuat Drive Yards'],
			maxAtmospheringSpeed: 60,
			model: 'All Terrain Tactical Enforcer',
			name: 'AT-TE',
			passengers: 36,
			pilots: [],
			vehicleClass: 'walker'
		}
	],
	[
		'spha',
		{
			cargoCapacity: 500,
			consumables: '7 days',
			costInCredits: null,
			crew: 25,
			films: [2],
			length: 140,
			manufacturers: ['Rothana Heavy Engineering'],
			maxAtmospheringSpeed: 35,
			model: 'Self-Propelled Heavy Artillery',
			name: 'SPHA',
			passengers: 30,
			pilots: [],
			vehicleClass: 'walker'
		}
	],
	[
		'flitknotspeeder',
		{
			cargoCapacity: null,
			consumables: null,
			costInCredits: 8000,
			crew: 1,
			films: [2],
			length: 2,
			manufacturers: ['Huppla Pasa Tisc Shipwrights Collective'],
			maxAtmospheringSpeed: 634,
			model: 'Flitknot speeder',
			name: 'Flitknot speeder',
			passengers: 0,
			pilots: ['dooku'],
			vehicleClass: 'speeder'
		}
	],
	[
		'neimoidianshuttle',
		{
			cargoCapacity: 1000,
			consumables: '7 days',
			costInCredits: null,
			crew: 2,
			films: [2, 3],
			length: 20,
			manufacturers: ['Haor Chall Engineering'],
			maxAtmospheringSpeed: 880,
			model: 'Sheathipede-class transport shuttle',
			name: 'Neimoidian shuttle',
			passengers: 6,
			pilots: [],
			vehicleClass: 'transport'
		}
	],
	[
		'geonosianstarfighter',
		{
			cargoCapacity: null,
			consumables: null,
			costInCredits: null,
			crew: 1,
			films: [2],
			length: 9.8,
			manufacturers: ['Huppla Pasa Tisc Shipwrights Collective'],
			maxAtmospheringSpeed: 20000,
			model: 'Nantex-class territorial defense',
			name: 'Geonosian starfighter',
			passengers: 0,
			pilots: [],
			vehicleClass: 'starfighter'
		}
	],
	[
		'tsmeu6personalwheelbike',
		{
			cargoCapacity: 10,
			consumables: 'none',
			costInCredits: 15000,
			crew: 1,
			films: [3],
			length: 3.5,
			manufacturers: ['Z-Gomot Ternbuell Guppat Corporation'],
			maxAtmospheringSpeed: 330,
			model: 'Tsmeu-6 personal wheel bike',
			name: 'Tsmeu-6 personal wheel bike',
			passengers: 1,
			pilots: ['grievous'],
			vehicleClass: 'wheeled walker'
		}
	],
	[
		'emergencyfirespeeder',
		{
			cargoCapacity: null,
			consumables: null,
			costInCredits: null,
			crew: 2,
			films: [3],
			length: null,
			manufacturers: null,
			maxAtmospheringSpeed: null,
			model: 'Fire suppression speeder',
			name: 'Emergency Firespeeder',
			passengers: null,
			pilots: [],
			vehicleClass: 'fire suppression ship'
		}
	],
	[
		'droidtrifighter',
		{
			cargoCapacity: 0,
			consumables: 'none',
			costInCredits: 20000,
			crew: 1,
			films: [3],
			length: 5.4,
			manufacturers: ['Colla Designs', 'Phlac-Arphocc Automata Industries'],
			maxAtmospheringSpeed: 1180,
			model: 'tri-fighter',
			name: 'Droid tri-fighter',
			passengers: 0,
			pilots: [],
			vehicleClass: 'droid starfighter'
		}
	],
	[
		'oevvaorjetcatamaran',
		{
			cargoCapacity: 50,
			consumables: '3 days',
			costInCredits: 12125,
			crew: 2,
			films: [3],
			length: 15.1,
			manufacturers: ['Appazanna Engineering Works'],
			maxAtmospheringSpeed: 420,
			model: 'Oevvaor jet catamaran',
			name: 'Oevvaor jet catamaran',
			passengers: 2,
			pilots: [],
			vehicleClass: 'airspeeder'
		}
	],
	[
		'raddaughgnaspfluttercraft',
		{
			cargoCapacity: 20,
			consumables: 'none',
			costInCredits: 14750,
			crew: 2,
			films: [3],
			length: 7,
			manufacturers: ['Appazanna Engineering Works'],
			maxAtmospheringSpeed: 310,
			model: 'Raddaugh Gnasp fluttercraft',
			name: 'Raddaugh Gnasp fluttercraft',
			passengers: 0,
			pilots: [],
			vehicleClass: 'air speeder'
		}
	],
	[
		'cloneturbotank',
		{
			cargoCapacity: 30000,
			consumables: '20 days',
			costInCredits: 350000,
			crew: 20,
			films: [3],
			length: 49.4,
			manufacturers: ['Kuat Drive Yards'],
			maxAtmospheringSpeed: 160,
			model: 'HAVw A6 Juggernaut',
			name: 'Clone turbo tank',
			passengers: 300,
			pilots: [],
			vehicleClass: 'wheeled walker'
		}
	],
	[
		'corporatealliancetankdroid',
		{
			cargoCapacity: NaN,
			consumables: 'none',
			costInCredits: 49000,
			crew: 0,
			films: [3],
			length: 10.96,
			manufacturers: ['Techno Union'],
			maxAtmospheringSpeed: 100,
			model: 'NR-N99 Persuader-class droid enforcer',
			name: 'Corporate Alliance tank droid',
			passengers: 4,
			pilots: [],
			vehicleClass: 'droid tank'
		}
	],
	[
		'droidgunship',
		{
			cargoCapacity: 0,
			consumables: 'none',
			costInCredits: 60000,
			crew: 0,
			films: [3],
			length: 12.3,
			manufacturers: ['Baktoid Fleet Ordnance', 'Haor Chall Engineering'],
			maxAtmospheringSpeed: 820,
			model: 'HMP droid gunship',
			name: 'Droid gunship',
			passengers: 0,
			pilots: [],
			vehicleClass: 'airspeeder'
		}
	],
	[
		'atrt',
		{
			cargoCapacity: 20,
			consumables: '1 day',
			costInCredits: 40000,
			crew: 1,
			films: [3],
			length: 3.2,
			manufacturers: ['Kuat Drive Yards'],
			maxAtmospheringSpeed: 90,
			model: 'All Terrain Recon Transport',
			name: 'AT-RT',
			passengers: 0,
			pilots: [],
			vehicleClass: 'walker'
		}
	]
]);
