import FuzzyPersonArgs from '#arguments/FuzzyArgs/FuzzyPersonArgs';
import PersonArgs from '#arguments/PersonArgs';
import people from '#assets/people';
import FilmService from '#services/FilmService';
import PlanetService from '#services/PlanetService';
import SpeciesService from '#services/SpeciesService';
import StarshipService from '#services/StarshipService';
import VehicleService from '#services/VehicleService';
import type Film from '#structures/Film';
import Person from '#structures/Person';
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

export default class PersonService {
	private filmService: FilmService;
	private planetService: PlanetService;
	private speciesService: SpeciesService;
	private starshipService: StarshipService;
	private vehicleService: VehicleService;

	public constructor() {
		this.filmService = new FilmService();
		this.planetService = new PlanetService();
		this.speciesService = new SpeciesService();
		this.starshipService = new StarshipService();
		this.vehicleService = new VehicleService();
	}

	public getByPersonName(@Args(() => PersonArgs) { person }: PersonArgs): StarWarsApi.Person | undefined {
		return people.get(person);
	}

	public mapPersonDataToPersonGraphQL(data: StarWarsApi.Person, requestedFields: GraphQLSet<keyof Person>, isReferencedCall = false): Person {
		const person = new Person();

		const films: Film[] = [];
		const species: Species[] = [];
		const starships: Starship[] = [];
		const vehicles: Vehicle[] = [];

		if (!isReferencedCall) {
			if (requestedFields.has('films')) {
				const filmFields = requestedFields.filterStartsWith<GraphQLSet<keyof Film>>('films.');

				for (const film of data.films) {
					const filmData = this.filmService.getByEpisodeNumber({ film })!;
					films.push(this.filmService.mapFilmDataToFilmGraphQL(filmData, filmFields, true));
				}
			}

			if (requestedFields.has('homeworld')) {
				const homeworldFields = requestedFields.filterStartsWith<GraphQLSet<keyof Planet>>('homeworld.');

				if (data.homeworld) {
					const homeworldData = this.planetService.getByPlanetName({ planet: data.homeworld })!;
					addPropertyToClass(
						person,
						'homeworld',
						this.planetService.mapPlanetDataToPlanetGraphQL(homeworldData, homeworldFields, true),
						requestedFields
					);
				}
			}

			if (requestedFields.has('species')) {
				const speciesFields = requestedFields.filterStartsWith<GraphQLSet<keyof Species>>('species.');

				for (const filmSpecies of data.species) {
					const speciesData = this.speciesService.getBySpeciesName({ species: filmSpecies })!;
					species.push(this.speciesService.mapSpeciesDataToSpeciesGraphQL(speciesData, speciesFields, true));
				}
			}

			if (requestedFields.has('starships')) {
				const starshipFields = requestedFields.filterStartsWith<GraphQLSet<keyof Starship>>('starships.');

				for (const starship of data.starships) {
					const starshipData = this.starshipService.getByStarshipName({ starship })!;
					starships.push(this.starshipService.mapStarshipDataToStarshipGraphQL(starshipData, starshipFields, true));
				}
			}

			if (requestedFields.has('vehicles')) {
				const vehicleFields = requestedFields.filterStartsWith<GraphQLSet<keyof Vehicle>>('vehicles.');

				for (const vehicle of data.vehicles) {
					const vehicleData = this.vehicleService.getByVehicleName({ vehicle })!;
					vehicles.push(this.vehicleService.mapVehicleDataToVehicleGraphQL(vehicleData, vehicleFields, true));
				}
			}
		}

		addPropertyToClass(person, 'birthYear', data.birthYear, requestedFields);
		addPropertyToClass(person, 'eyeColors', data.eyeColors, requestedFields);
		addPropertyToClass(person, 'films', films, requestedFields);
		addPropertyToClass(person, 'gender', data.gender, requestedFields);
		addPropertyToClass(person, 'hairColors', data.hairColors, requestedFields);
		addPropertyToClass(person, 'height', data.height, requestedFields);
		addPropertyToClass(person, 'mass', data.mass, requestedFields);
		addPropertyToClass(person, 'name', data.name, requestedFields);
		addPropertyToClass(person, 'skinColors', data.skinColors, requestedFields);
		addPropertyToClass(person, 'species', species, requestedFields);
		addPropertyToClass(person, 'starships', starships, requestedFields);
		addPropertyToClass(person, 'vehicles', vehicles, requestedFields);

		return person;
	}

	public findByFuzzy(@Args(() => FuzzyPersonArgs) { person, offset, reverse, take }: FuzzyPersonArgs): Fuse.FuseResult<StarWarsApi.Person>[] {
		person = Util.preParseInput(person);

		const fuzzyResult = new FuzzySearch(people, ['name'], { threshold: 0.3 }).runFuzzy(person);

		if (reverse) {
			fuzzyResult.reverse();
		}

		return fuzzyResult.slice(offset, offset + take);
	}
}
