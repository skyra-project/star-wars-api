export namespace StarWarsApi {
	export interface Film {
		characters: string[];
		director: string;
		episodeId: number;
		openingCrawl: string;
		planets: string[];
		producer: string[];
		releaseDate: string;
		species: string[];
		starships: string[];
		title: string;
		vehicles: string[];
	}

	export interface Person {
		birthYear: string | null;
		eyeColors: string[] | null;
		films: number[];
		gender: 'male' | 'female' | 'hermaphrodite' | null;
		hairColors: string[] | null;
		height: number | null;
		homeworld: string | null;
		mass: number | null;
		name: string;
		skinColors: string[] | null;
		species: string[];
		starships: string[];
		vehicles: string[];
	}

	export interface Planet {
		climate: string[] | null;
		diameter: number | null;
		films: number[];
		gravity: string | null;
		name: string;
		orbitalPeriod: string | null;
		population: string | null;
		residents: string[];
		rotationPeriod: string | null;
		surfaceWater: string | null;
		terrain: string[] | null;
	}

	export interface Species {
		averageHeight: number | null;
		averageLifespan: number | null;
		classification: string | null;
		designation: 'reptilian' | 'sentient';
		eyeColors: string[] | null;
		films: number[];
		hairColors: string[] | null;
		homeworld: string | null;
		language: string | null;
		name: string;
		people: string[];
		skinColors: string[] | null;
	}

	export interface Starship {
		cargoCapacity: number;
		consumables: string;
		costInCredits: number;
		crew: number;
		films: string[];
		hyperdriveRating: number;
		length: number;
		manufacturer: string[];
		maxAtmospheringSpeed: number;
		MGLT: number;
		model: string;
		name: string;
		passengers: number;
		pilots: string[];
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
		pilots: string[];
		vehicleClass: string;
	}
}

export default StarWarsApi;
