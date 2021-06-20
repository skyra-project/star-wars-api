export namespace StarWarsApi {
	export interface Film {
		characters: Person[];
		director: string;
		episodeId: number;
		openingCrawl: string;
		planets: Planet[];
		producer: string[];
		releaseDate: string;
		species: Species[];
		starships: Starship[];
		title: string;
		vehicles: Vehicle[];
	}

	export interface Person {
		birthYear: string;
		eyeColor: string;
		films: Film[];
		gender: 'male' | 'female' | null;
		hairColor: string;
		height: string;
		homeworld: string;
		mass: string;
		name: string;
		skinColor: string;
		species: Species[];
		starships: Starship[];
		vehicles: Vehicle[];
	}

	export interface Planet {
		climate: string;
		diameter: string;
		films: Film[];
		gravity: string;
		name: string;
		orbitalPeriod: string;
		population: string;
		residents: Person[];
		rotationPeriod: string;
		surfaceWater: string;
		terrain: string;
	}

	export interface Species {
		averageHeight: number | null;
		averageLifespan: number | null;
		classification: string;
		designation: 'reptilian' | 'sentient';
		eyeColors: string;
		films: Film[];
		hairColors: string;
		homeworld: Planet | null;
		language: string;
		name: string;
		people: Person[];
		skinColors: string;
	}

	export interface Starship {
		cargoCapacity: number;
		consumables: string;
		costInCredits: number;
		crew: number;
		films: Film[];
		hyperdriveRating: number;
		length: number;
		manufacturer: string[];
		maxAtmospheringSpeed: number;
		MGLT: number;
		model: string;
		name: string;
		passengers: number;
		pilots: Person[];
		starshipClass: string;
	}

	export interface Vehicle {
		cargoCapacity: number | null;
		consumables: string;
		costInCredits: number;
		crew: number;
		length: number;
		manufacturer: string[];
		maxAtmospheringSpeed: number | null;
		model: string;
		name: string;
		passengers: number;
		pilots: Person[];
		vehicleClass: string;
	}
}

export default StarWarsApi;
