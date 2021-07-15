/* eslint-disable */ // This is a generated file so we disable linting
import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export declare type Maybe<T> = T | null;
export declare type Exact<
	T extends {
		[key: string]: unknown;
	}
> = {
	[K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> &
	{
		[SubKey in K]?: Maybe<T[SubKey]>;
	};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
	{
		[SubKey in K]: Maybe<T[SubKey]>;
	};
export declare type RequireFields<T, K extends keyof T> = {
	[X in Exclude<keyof T, K>]?: T[X];
} &
	{
		[P in K]-?: NonNullable<T[P]>;
	};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
	DateTime: any;
	/** A 52-bit integer */
	Long: any;
};
/** A Star Wars film */
export declare type Film = {
	readonly __typename?: 'Film';
	/** The characters that appeared in this film */
	readonly characters: ReadonlyArray<Person>;
	/** The director of this film */
	readonly director: Scalars['String'];
	/** The episode number of this film */
	readonly episodeId: Scalars['Float'];
	/** The opening crawl text for this film */
	readonly openingCrawl: Scalars['String'];
	/** The planets that appeared in this film */
	readonly planets: ReadonlyArray<Planet>;
	/** The producers of this film */
	readonly producers: ReadonlyArray<Scalars['String']>;
	/** The date this film released */
	readonly releaseDate: Scalars['DateTime'];
	/** The species that appeared in this film */
	readonly species: ReadonlyArray<Species>;
	/** The starships that appeared in this film */
	readonly starships: ReadonlyArray<Starship>;
	/** The title of this film */
	readonly title: Scalars['String'];
	/** The vehicle that appeared in this film */
	readonly vehicles: ReadonlyArray<Vehicle>;
};
/** A character that appeared in Star Wars */
export declare type Person = {
	readonly __typename?: 'Person';
	/** The year this character was released */
	readonly birthYear?: Maybe<Scalars['String']>;
	/** The eye colours of this character */
	readonly eyeColors?: Maybe<ReadonlyArray<Scalars['String']>>;
	/** The films this character appeared in */
	readonly films: ReadonlyArray<Film>;
	/** The gender of this character, one of "male", "female", "hermaphrodite" or null */
	readonly gender?: Maybe<Scalars['String']>;
	/** The colours of this person's hair */
	readonly hairColors?: Maybe<ReadonlyArray<Scalars['String']>>;
	/** The height of this person in centimetres */
	readonly height?: Maybe<Scalars['Int']>;
	/** The planet that this person was born on */
	readonly homeworld?: Maybe<Planet>;
	/** The mass of this person in kilograms when applying standard gravity */
	readonly mass?: Maybe<Scalars['Float']>;
	/** The name of this person */
	readonly name: Scalars['String'];
	/** The colours of the skin of this person */
	readonly skinColors?: Maybe<ReadonlyArray<Scalars['String']>>;
	/** The species of this person. Some characters are a mix of multiple species. */
	readonly species: ReadonlyArray<Species>;
	/** The starships this character has flown or boarded */
	readonly starships: ReadonlyArray<Starship>;
	/** The vehicles this character has controlled */
	readonly vehicles: ReadonlyArray<Vehicle>;
};
/** A planet that appeared in Star Wars */
export declare type Planet = {
	readonly __typename?: 'Planet';
	/** The climates of this planet */
	readonly climates?: Maybe<ReadonlyArray<Scalars['String']>>;
	/** The diameter of this planet in kilometres */
	readonly diameter?: Maybe<Scalars['Int']>;
	/** The films in which this planet was featured */
	readonly films: ReadonlyArray<Film>;
	/** A number denoting the gravity of this planet, were "1" is standard gravity, "2" is twice standard gravity and "0.5" is half standard gravity. This is null for planets for which the gravity is unknown. */
	readonly gravity?: Maybe<Scalars['Float']>;
	/** The name of this planet */
	readonly name: Scalars['String'];
	/** The number of standard hours this planet takes to orbit around the nearest star. Nullable if the orbital period is unknown for this planet */
	readonly orbitalPeriod?: Maybe<Scalars['Int']>;
	/** The average population of sentient beings inhabiting this planet. Null if population is unknown. */
	readonly population?: Maybe<Scalars['Long']>;
	/** The people who inhabit this planet */
	readonly residents: ReadonlyArray<Person>;
	/** The number of standard hours this planet takes to rotate around its own axis. Nullable if the rotation period is unknown for this planet */
	readonly rotationPeriod?: Maybe<Scalars['Int']>;
	/** The percentage of the planet that is naturally occurring water or bodies of water. Null if this is unknown for this planet. */
	readonly surfaceWater?: Maybe<Scalars['Float']>;
	/** The types of terrain of this planet */
	readonly terrains?: Maybe<ReadonlyArray<Scalars['String']>>;
};
export declare type Query = {
	readonly __typename?: 'Query';
	/** Gets details on a Star Wars film, using the episode number of that film */
	readonly getFilm: Film;
	/**
	 * Gets details on a Star Wars film, using a fuzzy search on title or episode number
	 * This can be used to find multiple results based on the query
	 * By default only 1 result is returned. You can provide the arguments "take", "offset", and "reverse" to modify this behaviour.
	 */
	readonly getFuzzyFilm: ReadonlyArray<Film>;
	/** Gets details on a Star Wars person, using the name of that person */
	readonly getPerson: Person;
	/**
	 * Gets details on a Star Wars person, using a fuzzy search on that person's name
	 * This can be used to find multiple results based on the query
	 * By default only 1 result is returned. You can provide the arguments "take", "offset", and "reverse" to modify this behaviour.
	 */
	readonly getFuzzyPerson: ReadonlyArray<Person>;
	/** Gets details on a Star Wars planet, using the name of that planet */
	readonly getPlanet: Planet;
	/**
	 * Gets details on a Star Wars planet, using a fuzzy search on that planet's name
	 * This can be used to find multiple results based on the query
	 * By default only 1 result is returned. You can provide the arguments "take", "offset", and "reverse" to modify this behaviour.
	 */
	readonly getFuzzyPlanet: ReadonlyArray<Planet>;
	/** Gets details on a Star Wars species, using the name of that species */
	readonly getSpecies: Species;
	/**
	 * Gets details on a Star Wars species, using a fuzzy search on that species' name
	 * This can be used to find multiple results based on the query
	 * By default only 1 result is returned. You can provide the arguments "take", "offset", and "reverse" to modify this behaviour.
	 */
	readonly getFuzzySpecies: ReadonlyArray<Species>;
	/** Gets details on a Star Wars starship, using the name of that starship */
	readonly getStarship: Starship;
	/**
	 * Gets details on a Star Wars starship, using a fuzzy search on that starship' name
	 * This can be used to find multiple results based on the query
	 * By default only 1 result is returned. You can provide the arguments "take", "offset", and "reverse" to modify this behaviour.
	 */
	readonly getFuzzyStarship: ReadonlyArray<Starship>;
	/** Gets details on a Star Wars vehicle, using the name of that vehicle */
	readonly getVehicle: Vehicle;
	/**
	 * Gets details on a Star Wars vehicle, using a fuzzy search on that vehicle' name
	 * This can be used to find multiple results based on the query
	 * By default only 1 result is returned. You can provide the arguments "take", "offset", and "reverse" to modify this behaviour.
	 */
	readonly getFuzzyVehicle: ReadonlyArray<Vehicle>;
};
export declare type QueryGetFilmArgs = {
	film: Scalars['Int'];
};
export declare type QueryGetFuzzyFilmArgs = {
	offset?: Maybe<Scalars['Int']>;
	take?: Maybe<Scalars['Int']>;
	reverse?: Maybe<Scalars['Boolean']>;
	film: Scalars['String'];
};
export declare type QueryGetPersonArgs = {
	person: StarWarsPeople;
};
export declare type QueryGetFuzzyPersonArgs = {
	offset?: Maybe<Scalars['Int']>;
	take?: Maybe<Scalars['Int']>;
	reverse?: Maybe<Scalars['Boolean']>;
	person: Scalars['String'];
};
export declare type QueryGetPlanetArgs = {
	planet: StarWarsPlanets;
};
export declare type QueryGetFuzzyPlanetArgs = {
	offset?: Maybe<Scalars['Int']>;
	take?: Maybe<Scalars['Int']>;
	reverse?: Maybe<Scalars['Boolean']>;
	planet: Scalars['String'];
};
export declare type QueryGetSpeciesArgs = {
	species: StarWarsSpecies;
};
export declare type QueryGetFuzzySpeciesArgs = {
	offset?: Maybe<Scalars['Int']>;
	take?: Maybe<Scalars['Int']>;
	reverse?: Maybe<Scalars['Boolean']>;
	species: Scalars['String'];
};
export declare type QueryGetStarshipArgs = {
	starship: StarWarsStarships;
};
export declare type QueryGetFuzzyStarshipArgs = {
	offset?: Maybe<Scalars['Int']>;
	take?: Maybe<Scalars['Int']>;
	reverse?: Maybe<Scalars['Boolean']>;
	starship: Scalars['String'];
};
export declare type QueryGetVehicleArgs = {
	vehicle: StarWarsVehicles;
};
export declare type QueryGetFuzzyVehicleArgs = {
	offset?: Maybe<Scalars['Int']>;
	take?: Maybe<Scalars['Int']>;
	reverse?: Maybe<Scalars['Boolean']>;
	vehicle: Scalars['String'];
};
/** A species that appeared in Star Wars */
export declare type Species = {
	readonly __typename?: 'Species';
	/** The average heigh of this species, if specified */
	readonly averageHeight?: Maybe<Scalars['Int']>;
	/** The average lifespan of this species, if specified */
	readonly averageLifespan?: Maybe<Scalars['Long']>;
	/** The classification of this species, such as "mammal" or "reptile" */
	readonly classification?: Maybe<Scalars['String']>;
	/** The designation of this species, such as "sentient" */
	readonly designation: Scalars['String'];
	/** A list of common eye colours for this species, or null if the species doesn't have eyes */
	readonly eyeColors?: Maybe<ReadonlyArray<Scalars['String']>>;
	/** The films this species appeared in */
	readonly films: ReadonlyArray<Film>;
	/** A list of common hair colours for this species, or null if the species doesn't have hair */
	readonly hairColors?: Maybe<ReadonlyArray<Scalars['String']>>;
	/** The planet this species originates from, or null if unknown */
	readonly homeworld?: Maybe<Planet>;
	/** The language commonly spoken by this species */
	readonly language?: Maybe<Scalars['String']>;
	/** The name of this species */
	readonly name: Scalars['String'];
	/** The people who are part of this species */
	readonly people: ReadonlyArray<Person>;
	/** A list of common skin colours for this species, or null if the species doesn't have skin */
	readonly skinColors?: Maybe<ReadonlyArray<Scalars['String']>>;
};
/** The people in Star Wars */
export declare const enum StarWarsPeople {
	Lukeskywalker = 'lukeskywalker',
	C3po = 'c3po',
	R2d2 = 'r2d2',
	Darthvader = 'darthvader',
	Leiaorgana = 'leiaorgana',
	Owenlars = 'owenlars',
	Beruwhitesunlars = 'beruwhitesunlars',
	R5d4 = 'r5d4',
	Biggsdarklighter = 'biggsdarklighter',
	Obiwankenobi = 'obiwankenobi',
	Anakinskywalker = 'anakinskywalker',
	Wilhufftarkin = 'wilhufftarkin',
	Chewbacca = 'chewbacca',
	Hansolo = 'hansolo',
	Greedo = 'greedo',
	Jabbadesilijictiure = 'jabbadesilijictiure',
	Wedgeantilles = 'wedgeantilles',
	Jektonoporkins = 'jektonoporkins',
	Yoda = 'yoda',
	Palpatine = 'palpatine',
	Bobafett = 'bobafett',
	Ig88 = 'ig88',
	Bossk = 'bossk',
	Landocalrissian = 'landocalrissian',
	Lobot = 'lobot',
	Ackbar = 'ackbar',
	Monmothma = 'monmothma',
	Arvelcrynyd = 'arvelcrynyd',
	Wicketsystriwarrick = 'wicketsystriwarrick',
	Niennunb = 'niennunb',
	Quigonjinn = 'quigonjinn',
	Nutegunray = 'nutegunray',
	Finisvalorum = 'finisvalorum',
	Padmeamidala = 'padmeamidala',
	Jarjarbinks = 'jarjarbinks',
	Roostarpals = 'roostarpals',
	Rugornass = 'rugornass',
	Ricolie = 'ricolie',
	Watto = 'watto',
	Sebulba = 'sebulba',
	Quarshpanaka = 'quarshpanaka',
	Shmiskywalker = 'shmiskywalker',
	Darthmaul = 'darthmaul',
	Bibfortuna = 'bibfortuna',
	Aylasecura = 'aylasecura',
	Rattstyerel = 'rattstyerel',
	Dudbolt = 'dudbolt',
	Gasgano = 'gasgano',
	Benquadinaros = 'benquadinaros',
	Macewindu = 'macewindu',
	Kiadimundi = 'kiadimundi',
	Kitfisto = 'kitfisto',
	Eethkoth = 'eethkoth',
	Adigallia = 'adigallia',
	Saeseetiin = 'saeseetiin',
	Yaraelpoof = 'yaraelpoof',
	Plokoon = 'plokoon',
	Masamedda = 'masamedda',
	Gregartypho = 'gregartypho',
	Corde = 'corde',
	Cliegglars = 'cliegglars',
	Pogglethelesser = 'pogglethelesser',
	Luminaraunduli = 'luminaraunduli',
	Barrissoffee = 'barrissoffee',
	Dorme = 'dorme',
	Dooku = 'dooku',
	Bailprestororgana = 'bailprestororgana',
	Jangofett = 'jangofett',
	Zamwesell = 'zamwesell',
	Dexterjettster = 'dexterjettster',
	Lamasu = 'lamasu',
	Taunwe = 'taunwe',
	Jocastanu = 'jocastanu',
	R4p17 = 'r4p17',
	Wattambor = 'wattambor',
	Sanhill = 'sanhill',
	Shaakti = 'shaakti',
	Grievous = 'grievous',
	Tarfful = 'tarfful',
	Raymusantilles = 'raymusantilles',
	Slymoore = 'slymoore',
	Tionmedon = 'tionmedon'
}
/** The planets in Star War */
export declare const enum StarWarsPlanets {
	Tatooine = 'tatooine',
	Alderaan = 'alderaan',
	Yaviniv = 'yaviniv',
	Hoth = 'hoth',
	Dagobah = 'dagobah',
	Bespin = 'bespin',
	Endor = 'endor',
	Naboo = 'naboo',
	Coruscant = 'coruscant',
	Kamino = 'kamino',
	Geonosis = 'geonosis',
	Utapau = 'utapau',
	Mustafar = 'mustafar',
	Kashyyyk = 'kashyyyk',
	Polismassa = 'polismassa',
	Mygeeto = 'mygeeto',
	Felucia = 'felucia',
	Catoneimoidia = 'catoneimoidia',
	Saleucami = 'saleucami',
	Stewjon = 'stewjon',
	Eriadu = 'eriadu',
	Corellia = 'corellia',
	Rodia = 'rodia',
	Nalhutta = 'nalhutta',
	Dantooine = 'dantooine',
	Bestineiv = 'bestineiv',
	Ordmantell = 'ordmantell',
	Trandosha = 'trandosha',
	Socorro = 'socorro',
	Moncala = 'moncala',
	Chandrila = 'chandrila',
	Sullust = 'sullust',
	Toydaria = 'toydaria',
	Malastare = 'malastare',
	Dathomir = 'dathomir',
	Ryloth = 'ryloth',
	Aleenminor = 'aleenminor',
	Vulpter = 'vulpter',
	Troiken = 'troiken',
	Tund = 'tund',
	Haruunkal = 'haruunkal',
	Cerea = 'cerea',
	Gleeanselm = 'gleeanselm',
	Iridonia = 'iridonia',
	Tholoth = 'tholoth',
	Iktotch = 'iktotch',
	Quermia = 'quermia',
	Dorin = 'dorin',
	Champala = 'champala',
	Mirial = 'mirial',
	Serenno = 'serenno',
	Concorddawn = 'concorddawn',
	Zolan = 'zolan',
	Ojom = 'ojom',
	Skako = 'skako',
	Muunilinst = 'muunilinst',
	Shili = 'shili',
	Kalee = 'kalee',
	Umbara = 'umbara'
}
/** The species in Star Wars */
export declare const enum StarWarsSpecies {
	Human = 'human',
	Droid = 'droid',
	Wookiee = 'wookiee',
	Rodian = 'rodian',
	Hutt = 'hutt',
	Yodasspecies = 'yodasspecies',
	Trandoshan = 'trandoshan',
	Moncalamari = 'moncalamari',
	Ewok = 'ewok',
	Sullustan = 'sullustan',
	Neimodian = 'neimodian',
	Gungan = 'gungan',
	Toydarian = 'toydarian',
	Dug = 'dug',
	Twilek = 'twilek',
	Aleena = 'aleena',
	Vulptereen = 'vulptereen',
	Xexto = 'xexto',
	Toong = 'toong',
	Cerean = 'cerean',
	Nautolan = 'nautolan',
	Zabrak = 'zabrak',
	Tholothian = 'tholothian',
	Iktotchi = 'iktotchi',
	Quermian = 'quermian',
	Keldor = 'keldor',
	Chagrian = 'chagrian',
	Geonosian = 'geonosian',
	Mirialan = 'mirialan',
	Clawdite = 'clawdite',
	Besalisk = 'besalisk',
	Kaminoan = 'kaminoan',
	Skakoan = 'skakoan',
	Muun = 'muun',
	Togruta = 'togruta',
	Kaleesh = 'kaleesh',
	Pauan = 'pauan'
}
/** The starships in Star Wars */
export declare const enum StarWarsStarships {
	Cr90corvette = 'cr90corvette',
	Stardestroyer = 'stardestroyer',
	Sentinelclasslandingcraft = 'sentinelclasslandingcraft',
	Deathstar = 'deathstar',
	Millenniumfalcon = 'millenniumfalcon',
	Ywing = 'ywing',
	Xwing = 'xwing',
	Tieadvancedx1 = 'tieadvancedx1',
	Executor = 'executor',
	Rebeltransport = 'rebeltransport',
	Slave1 = 'slave1',
	Imperialshuttle = 'imperialshuttle',
	Ef76nebulonbescortfrigate = 'ef76nebulonbescortfrigate',
	Calamaricruiser = 'calamaricruiser',
	Awing = 'awing',
	Bwing = 'bwing',
	Republiccruiser = 'republiccruiser',
	Droidcontrolship = 'droidcontrolship',
	Naboofighter = 'naboofighter',
	Nabooroyalstarship = 'nabooroyalstarship',
	Scimitar = 'scimitar',
	Jtypediplomaticbarge = 'jtypediplomaticbarge',
	Aa9coruscantfreighter = 'aa9coruscantfreighter',
	Jedistarfighter = 'jedistarfighter',
	Htypenubianyacht = 'htypenubianyacht',
	Republicassaultship = 'republicassaultship',
	Solarsailer = 'solarsailer',
	Tradefederationcruiser = 'tradefederationcruiser',
	Thetaclasst2cshuttle = 'thetaclasst2cshuttle',
	Republicattackcruiser = 'republicattackcruiser',
	Naboostarskiff = 'naboostarskiff',
	Jediinterceptor = 'jediinterceptor',
	Arc170 = 'arc170',
	Bankingclanfrigte = 'bankingclanfrigte',
	Belbullab22starfighter = 'belbullab22starfighter',
	Vwing = 'vwing'
}
/** The vehicles in Star Wars */
export declare const enum StarWarsVehicles {
	Sandcrawler = 'sandcrawler',
	T16skyhopper = 't16skyhopper',
	X34landspeeder = 'x34landspeeder',
	Tielnstarfighter = 'tielnstarfighter',
	Snowspeeder = 'snowspeeder',
	Tiebomber = 'tiebomber',
	Atat = 'atat',
	Atst = 'atst',
	Stormivtwinpodcloudcar = 'stormivtwinpodcloudcar',
	Sailbarge = 'sailbarge',
	Banthaiicargoskiff = 'banthaiicargoskiff',
	Tieininterceptor = 'tieininterceptor',
	Imperialspeederbike = 'imperialspeederbike',
	Vulturedroid = 'vulturedroid',
	Multitrooptransport = 'multitrooptransport',
	Armoredassaulttank = 'armoredassaulttank',
	Singletrooperaerialplatform = 'singletrooperaerialplatform',
	C9979landingcraft = 'c9979landingcraft',
	Tribubblebongo = 'tribubblebongo',
	Sithspeeder = 'sithspeeder',
	Zephyrgswoopbike = 'zephyrgswoopbike',
	Koro2exodriveairspeeder = 'koro2exodriveairspeeder',
	Xj6airspeeder = 'xj6airspeeder',
	Laati = 'laati',
	Laatc = 'laatc',
	Atte = 'atte',
	Spha = 'spha',
	Flitknotspeeder = 'flitknotspeeder',
	Neimoidianshuttle = 'neimoidianshuttle',
	Geonosianstarfighter = 'geonosianstarfighter',
	Tsmeu6personalwheelbike = 'tsmeu6personalwheelbike',
	Emergencyfirespeeder = 'emergencyfirespeeder',
	Droidtrifighter = 'droidtrifighter',
	Oevvaorjetcatamaran = 'oevvaorjetcatamaran',
	Raddaughgnaspfluttercraft = 'raddaughgnaspfluttercraft',
	Cloneturbotank = 'cloneturbotank',
	Corporatealliancetankdroid = 'corporatealliancetankdroid',
	Droidgunship = 'droidgunship',
	Atrt = 'atrt'
}
/** A starship that appears in Star Wars */
export declare type Starship = {
	readonly __typename?: 'Starship';
	/** The maximum cargo capacity of this starship in kilograms */
	readonly cargoCapacity?: Maybe<Scalars['Long']>;
	/** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply */
	readonly consumables?: Maybe<Scalars['String']>;
	/** The cost of this starship, new, in galactic credits */
	readonly costInCredits?: Maybe<Scalars['Long']>;
	/** The number of personnel needed to run or pilot this starship */
	readonly crew?: Maybe<Scalars['Int']>;
	/** The films this starship appeared in */
	readonly films: ReadonlyArray<Film>;
	/** The class of hyperdrive this starship has */
	readonly hyperdriveRating?: Maybe<Scalars['Float']>;
	/** The length of this starship in meters */
	readonly length: Scalars['Float'];
	/** An array of manufacturers of this starship */
	readonly manufacturers: ReadonlyArray<Scalars['String']>;
	/** The maximum speed of this starship in the atmosphere, or null if this ship is incapable of atmospheric flight */
	readonly maxAtmospheringSpeed?: Maybe<Scalars['Int']>;
	/** The maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to the Astronomical Unit (AU), which is the distance between the human sun (Sol) and primary planet (Earth) */
	readonly MGLT?: Maybe<Scalars['Int']>;
	/** The model of this starship */
	readonly model: Scalars['String'];
	/** The name of this starship */
	readonly name: Scalars['String'];
	/** The number of non-essential people this starship can transport */
	readonly passengers?: Maybe<Scalars['Int']>;
	/** The people who have piloted this starship */
	readonly pilots: ReadonlyArray<Person>;
	/** The class of this starship */
	readonly starshipClass: Scalars['String'];
};
/** A vehicle that appeared in Star Wars */
export declare type Vehicle = {
	readonly __typename?: 'Vehicle';
	/** The maximum cargo capacity of this vehicle in kilograms */
	readonly cargoCapacity: Scalars['Int'];
	/** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. Null if unknown or unspecified. */
	readonly consumables?: Maybe<Scalars['String']>;
	/** The cost of this vehicle, new, in galactic credits */
	readonly costInCredits?: Maybe<Scalars['Int']>;
	/** The number of personnel needed to run or pilot this vehicle */
	readonly crew: Scalars['Int'];
	/** The films this vehicle appeared in */
	readonly films: ReadonlyArray<Film>;
	/** The length of this vehicle in meters */
	readonly length?: Maybe<Scalars['Float']>;
	/** An array of manufacturers of this vehicle */
	readonly manufacturers?: Maybe<ReadonlyArray<Scalars['String']>>;
	/** The maximum speed of this vehicle in the atmosphere, or null if this ship is incapable of atmospheric flight */
	readonly maxAtmospheringSpeed?: Maybe<Scalars['Int']>;
	/** The model of this vehicle */
	readonly model: Scalars['String'];
	/** The name of this vehicle */
	readonly name: Scalars['String'];
	/** The number of non-essential people this vehicle can transport */
	readonly passengers?: Maybe<Scalars['Int']>;
	/** The people who have piloted this vehicle */
	readonly pilots: ReadonlyArray<Person>;
	/** The class of this vehicle */
	readonly vehicleClass: Scalars['String'];
};
export declare type ResolverTypeWrapper<T> = Promise<T> | T;
export declare type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
	fragment: string;
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
	selectionSet: string;
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type StitchingResolver<TResult, TParent, TContext, TArgs> =
	| LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
	| NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export declare type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| StitchingResolver<TResult, TParent, TContext, TArgs>;
export declare type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => Promise<TResult> | TResult;
export declare type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;
export declare type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<
		{
			[key in TKey]: TResult;
		},
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{
			[key in TKey]: TResult;
		},
		TContext,
		TArgs
	>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export declare type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export declare type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
	| ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export declare type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export declare type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export declare type NextResolverFn<T> = () => Promise<T>;
export declare type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export declare type ResolversTypes = {
	DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
	Film: ResolverTypeWrapper<Film>;
	String: ResolverTypeWrapper<Scalars['String']>;
	Int: ResolverTypeWrapper<Scalars['Int']>;
	Long: ResolverTypeWrapper<Scalars['Long']>;
	Person: ResolverTypeWrapper<Person>;
	Planet: ResolverTypeWrapper<Planet>;
	Float: ResolverTypeWrapper<Scalars['Float']>;
	Query: ResolverTypeWrapper<{}>;
	Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
	Species: ResolverTypeWrapper<Species>;
	StarWarsPeople: StarWarsPeople;
	StarWarsPlanets: StarWarsPlanets;
	StarWarsSpecies: StarWarsSpecies;
	StarWarsStarships: StarWarsStarships;
	StarWarsVehicles: StarWarsVehicles;
	Starship: ResolverTypeWrapper<Starship>;
	Vehicle: ResolverTypeWrapper<Vehicle>;
};
/** Mapping between all available schema types and the resolvers parents */
export declare type ResolversParentTypes = {
	DateTime: Scalars['DateTime'];
	Film: Film;
	String: Scalars['String'];
	Int: Scalars['Int'];
	Long: Scalars['Long'];
	Person: Person;
	Planet: Planet;
	Float: Scalars['Float'];
	Query: {};
	Boolean: Scalars['Boolean'];
	Species: Species;
	Starship: Starship;
	Vehicle: Vehicle;
};
export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
	name: 'DateTime';
}
export declare type FilmResolvers<ContextType = any, ParentType extends ResolversParentTypes['Film'] = ResolversParentTypes['Film']> = {
	characters?: Resolver<ReadonlyArray<ResolversTypes['Person']>, ParentType, ContextType>;
	director?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	episodeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	openingCrawl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	planets?: Resolver<ReadonlyArray<ResolversTypes['Planet']>, ParentType, ContextType>;
	producers?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>;
	releaseDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	species?: Resolver<ReadonlyArray<ResolversTypes['Species']>, ParentType, ContextType>;
	starships?: Resolver<ReadonlyArray<ResolversTypes['Starship']>, ParentType, ContextType>;
	title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	vehicles?: Resolver<ReadonlyArray<ResolversTypes['Vehicle']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
	name: 'Long';
}
export declare type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
	birthYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	eyeColors?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
	films?: Resolver<ReadonlyArray<ResolversTypes['Film']>, ParentType, ContextType>;
	gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	hairColors?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
	height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	homeworld?: Resolver<Maybe<ResolversTypes['Planet']>, ParentType, ContextType>;
	mass?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	skinColors?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
	species?: Resolver<ReadonlyArray<ResolversTypes['Species']>, ParentType, ContextType>;
	starships?: Resolver<ReadonlyArray<ResolversTypes['Starship']>, ParentType, ContextType>;
	vehicles?: Resolver<ReadonlyArray<ResolversTypes['Vehicle']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type PlanetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Planet'] = ResolversParentTypes['Planet']> = {
	climates?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
	diameter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	films?: Resolver<ReadonlyArray<ResolversTypes['Film']>, ParentType, ContextType>;
	gravity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	orbitalPeriod?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	population?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
	residents?: Resolver<ReadonlyArray<ResolversTypes['Person']>, ParentType, ContextType>;
	rotationPeriod?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	surfaceWater?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	terrains?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
	getFilm?: Resolver<ResolversTypes['Film'], ParentType, ContextType, RequireFields<QueryGetFilmArgs, 'film'>>;
	getFuzzyFilm?: Resolver<
		ReadonlyArray<ResolversTypes['Film']>,
		ParentType,
		ContextType,
		RequireFields<QueryGetFuzzyFilmArgs, 'offset' | 'take' | 'reverse' | 'film'>
	>;
	getPerson?: Resolver<ResolversTypes['Person'], ParentType, ContextType, RequireFields<QueryGetPersonArgs, 'person'>>;
	getFuzzyPerson?: Resolver<
		ReadonlyArray<ResolversTypes['Person']>,
		ParentType,
		ContextType,
		RequireFields<QueryGetFuzzyPersonArgs, 'offset' | 'take' | 'reverse' | 'person'>
	>;
	getPlanet?: Resolver<ResolversTypes['Planet'], ParentType, ContextType, RequireFields<QueryGetPlanetArgs, 'planet'>>;
	getFuzzyPlanet?: Resolver<
		ReadonlyArray<ResolversTypes['Planet']>,
		ParentType,
		ContextType,
		RequireFields<QueryGetFuzzyPlanetArgs, 'offset' | 'take' | 'reverse' | 'planet'>
	>;
	getSpecies?: Resolver<ResolversTypes['Species'], ParentType, ContextType, RequireFields<QueryGetSpeciesArgs, 'species'>>;
	getFuzzySpecies?: Resolver<
		ReadonlyArray<ResolversTypes['Species']>,
		ParentType,
		ContextType,
		RequireFields<QueryGetFuzzySpeciesArgs, 'offset' | 'take' | 'reverse' | 'species'>
	>;
	getStarship?: Resolver<ResolversTypes['Starship'], ParentType, ContextType, RequireFields<QueryGetStarshipArgs, 'starship'>>;
	getFuzzyStarship?: Resolver<
		ReadonlyArray<ResolversTypes['Starship']>,
		ParentType,
		ContextType,
		RequireFields<QueryGetFuzzyStarshipArgs, 'offset' | 'take' | 'reverse' | 'starship'>
	>;
	getVehicle?: Resolver<ResolversTypes['Vehicle'], ParentType, ContextType, RequireFields<QueryGetVehicleArgs, 'vehicle'>>;
	getFuzzyVehicle?: Resolver<
		ReadonlyArray<ResolversTypes['Vehicle']>,
		ParentType,
		ContextType,
		RequireFields<QueryGetFuzzyVehicleArgs, 'offset' | 'take' | 'reverse' | 'vehicle'>
	>;
};
export declare type SpeciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Species'] = ResolversParentTypes['Species']> = {
	averageHeight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	averageLifespan?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
	classification?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	designation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	eyeColors?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
	films?: Resolver<ReadonlyArray<ResolversTypes['Film']>, ParentType, ContextType>;
	hairColors?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
	homeworld?: Resolver<Maybe<ResolversTypes['Planet']>, ParentType, ContextType>;
	language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	people?: Resolver<ReadonlyArray<ResolversTypes['Person']>, ParentType, ContextType>;
	skinColors?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type StarshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['Starship'] = ResolversParentTypes['Starship']> = {
	cargoCapacity?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
	consumables?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	costInCredits?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
	crew?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	films?: Resolver<ReadonlyArray<ResolversTypes['Film']>, ParentType, ContextType>;
	hyperdriveRating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
	length?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
	manufacturers?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>;
	maxAtmospheringSpeed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	MGLT?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	passengers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	pilots?: Resolver<ReadonlyArray<ResolversTypes['Person']>, ParentType, ContextType>;
	starshipClass?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type VehicleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vehicle'] = ResolversParentTypes['Vehicle']> = {
	cargoCapacity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	consumables?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	costInCredits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	crew?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	films?: Resolver<ReadonlyArray<ResolversTypes['Film']>, ParentType, ContextType>;
	length?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
	manufacturers?: Resolver<Maybe<ReadonlyArray<ResolversTypes['String']>>, ParentType, ContextType>;
	maxAtmospheringSpeed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	passengers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	pilots?: Resolver<ReadonlyArray<ResolversTypes['Person']>, ParentType, ContextType>;
	vehicleClass?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export declare type Resolvers<ContextType = any> = {
	DateTime?: GraphQLScalarType;
	Film?: FilmResolvers<ContextType>;
	Long?: GraphQLScalarType;
	Person?: PersonResolvers<ContextType>;
	Planet?: PlanetResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	Species?: SpeciesResolvers<ContextType>;
	Starship?: StarshipResolvers<ContextType>;
	Vehicle?: VehicleResolvers<ContextType>;
};
/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export declare type IResolvers<ContextType = any> = Resolvers<ContextType>;
//# sourceMappingURL=star-wars-api.d.ts.map
