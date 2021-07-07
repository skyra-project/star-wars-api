import FuzzyPlanetArgs from '#arguments/FuzzyArgs/FuzzyPlanetArgs';
import PlanetArgs from '#arguments/PlanetArgs';
import planets from '#assets/planets';
import Planet from '#structures/Planet';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import FuzzySearch from '#utils/FuzzySearch';
import type GraphQLSet from '#utils/GraphQLSet';
import type StarWarsApi from '#utils/star-wars';
import Util from '#utils/util';
import type Fuse from 'fuse.js';
import { Args } from 'type-graphql';

export default class PlanetService {
	public getByPlanetName(@Args(() => PlanetArgs) { planet }: PlanetArgs): StarWarsApi.Planet | undefined {
		return planets.get(planet);
	}

	// TODO: add parameter to prevent deep-nesting
	// TODO: ensure requestedFields supports deep-nesting
	public mapPlanetDataToPlanetGraphQL(data: StarWarsApi.Planet, requestedFields: GraphQLSet<keyof Planet>): Planet {
		const planet = new Planet();

		addPropertyToClass(planet, 'climates', data.climate, requestedFields);
		addPropertyToClass(planet, 'diameter', data.diameter, requestedFields);
		addPropertyToClass(planet, 'films', data.films, requestedFields); // TODO: map to actual GraphQL Class
		addPropertyToClass(planet, 'gravity', data.gravity, requestedFields);
		addPropertyToClass(planet, 'name', data.name, requestedFields);
		addPropertyToClass(planet, 'orbitalPeriod', data.orbitalPeriod, requestedFields);
		addPropertyToClass(planet, 'population', data.population, requestedFields);
		addPropertyToClass(planet, 'residents', data.residents, requestedFields); // TODO: map to actual GraphQL Class
		addPropertyToClass(planet, 'rotationPeriod', data.rotationPeriod, requestedFields);
		addPropertyToClass(planet, 'surfaceWater', data.surfaceWater, requestedFields);
		addPropertyToClass(planet, 'terrains', data.terrains, requestedFields);

		return planet;
	}

	public findByFuzzy(@Args(() => FuzzyPlanetArgs) { planet, offset, reverse, take }: FuzzyPlanetArgs): Fuse.FuseResult<StarWarsApi.Planet>[] {
		planet = Util.preParseInput(planet);

		const fuzzyResult = new FuzzySearch(planets, ['name'], { threshold: 0.3 }).runFuzzy(planet);

		if (reverse) {
			fuzzyResult.reverse();
		}

		return fuzzyResult.slice(offset, offset + take);
	}
}
