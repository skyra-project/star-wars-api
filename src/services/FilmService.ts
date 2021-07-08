import FilmArgs from '#arguments/FilmsArgs';
import FuzzyFilmArgs from '#arguments/FuzzyArgs/FuzzyFilmArgs';
import films from '#assets/films';
import PersonService from '#services/PersonService';
import PlanetService from '#services/PlanetService';
import SpeciesService from '#services/SpeciesService';
import StarshipService from '#services/StarshipService';
import VehicleService from '#services/VehicleService';
import Film from '#structures/Film';
import type Person from '#structures/Person';
import type Planet from '#structures/Planet';
import type Species from '#structures/Species';
import type Starship from '#structures/Starship';
import type Vehicle from '#structures/Vehicle';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import FuzzySearch from '#utils/FuzzySearch';
import type GraphQLSet from '#utils/GraphQLSet';
import type StarWarsApi from '#utils/star-wars';
import Util from '#utils/util';
import type Fuse from 'fuse.js';
import { Args } from 'type-graphql';

export default class FilmService {
	public static getByEpisodeNumber(@Args(() => FilmArgs) { film }: FilmArgs): StarWarsApi.Film | undefined {
		return films.get(film);
	}

	public static mapFilmDataToFilmGraphQL(data: StarWarsApi.Film, requestedFields: GraphQLSet<keyof Film>, isReferencedCall = false): Film {
		const film = new Film();

		const characters: Person[] = [];
		const planets: Planet[] = [];
		const species: Species[] = [];
		const starships: Starship[] = [];
		const vehicles: Vehicle[] = [];

		if (!isReferencedCall) {
			if (requestedFields.has('characters')) {
				const characterFields = requestedFields.filterStartsWith<GraphQLSet<keyof Person>>('characters.');

				for (const character of data.characters) {
					const personData = PersonService.getByPersonName({ person: character })!;
					characters.push(PersonService.mapPersonDataToPersonGraphQL(personData, characterFields, true));
				}
			}

			if (requestedFields.has('planets')) {
				const planetFields = requestedFields.filterStartsWith<GraphQLSet<keyof Planet>>('planets.');

				for (const planet of data.planets) {
					const planetData = PlanetService.getByPlanetName({ planet })!;
					planets.push(PlanetService.mapPlanetDataToPlanetGraphQL(planetData, planetFields, true));
				}
			}

			if (requestedFields.has('species')) {
				const speciesFields = requestedFields.filterStartsWith<GraphQLSet<keyof Species>>('species.');

				for (const filmSpecies of data.species) {
					const speciesData = SpeciesService.getBySpeciesName({ species: filmSpecies })!;
					species.push(SpeciesService.mapSpeciesDataToSpeciesGraphQL(speciesData, speciesFields, true));
				}
			}

			if (requestedFields.has('starships')) {
				const starshipFields = requestedFields.filterStartsWith<GraphQLSet<keyof Starship>>('starships.');

				for (const starship of data.starships) {
					const starshipData = StarshipService.getByStarshipName({ starship })!;
					starships.push(StarshipService.mapStarshipDataToStarshipGraphQL(starshipData, starshipFields, true));
				}
			}

			if (requestedFields.has('vehicles')) {
				const vehicleFields = requestedFields.filterStartsWith<GraphQLSet<keyof Vehicle>>('vehicles.');

				for (const vehicle of data.vehicles) {
					const vehicleData = VehicleService.getByVehicleName({ vehicle })!;
					vehicles.push(VehicleService.mapVehicleDataToVehicleGraphQL(vehicleData, vehicleFields, true));
				}
			}
		}

		addPropertyToClass(film, 'characters', characters, requestedFields);
		addPropertyToClass(film, 'director', data.director, requestedFields);
		addPropertyToClass(film, 'episodeId', data.episodeId, requestedFields);
		addPropertyToClass(film, 'openingCrawl', data.openingCrawl, requestedFields);
		addPropertyToClass(film, 'planets', planets, requestedFields);
		addPropertyToClass(film, 'producers', data.producers, requestedFields);
		addPropertyToClass(film, 'releaseDate', new Date(data.releaseDate), requestedFields);
		addPropertyToClass(film, 'species', species, requestedFields);
		addPropertyToClass(film, 'starships', starships, requestedFields);
		addPropertyToClass(film, 'title', data.title, requestedFields);
		addPropertyToClass(film, 'vehicles', vehicles, requestedFields);

		return film;
	}

	public static findByFuzzy(@Args(() => FuzzyFilmArgs) { film, offset, reverse, take }: FuzzyFilmArgs): Fuse.FuseResult<StarWarsApi.Film>[] {
		if (!Number(film)) {
			film = Util.preParseInput(film);
		}

		const fuzzyResult = new FuzzySearch(films, ['title', 'episodeId'], { threshold: 0.3 }).runFuzzy(film);

		if (reverse) {
			fuzzyResult.reverse();
		}

		return fuzzyResult.slice(offset, offset + take);
	}
}
