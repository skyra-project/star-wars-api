import FuzzySpeciesArgs from '#arguments/FuzzyArgs/FuzzySpeciesArgs';
import SpeciesArgs from '#arguments/SpeciesArgs';
import speciesData from '#assets/species';
import Species from '#structures/Species';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import FuzzySearch from '#utils/FuzzySearch';
import type GraphQLSet from '#utils/GraphQLSet';
import type StarWarsApi from '#utils/star-wars';
import Util from '#utils/util';
import type Fuse from 'fuse.js';
import { Args } from 'type-graphql';

export default class SpeciesService {
	public getBySpeciesName(@Args(() => SpeciesArgs) { species }: SpeciesArgs): StarWarsApi.Species | undefined {
		return speciesData.get(species);
	}

	// TODO: add parameter to prevent deep-nesting
	// TODO: ensure requestedFields supports deep-nesting
	public mapSpeciesDataToSpeciesGraphQL(data: StarWarsApi.Species, requestedFields: GraphQLSet<keyof Species>, _isReferencedCall = false): Species {
		const species = new Species();

		addPropertyToClass(species, 'averageHeight', data.averageHeight, requestedFields);
		addPropertyToClass(species, 'averageLifespan', data.averageLifespan, requestedFields);
		addPropertyToClass(species, 'classification', data.classification, requestedFields);
		addPropertyToClass(species, 'designation', data.designation, requestedFields);
		addPropertyToClass(species, 'eyeColors', data.eyeColors, requestedFields);
		// addPropertyToClass(species, 'films', data.films, requestedFields); // TODO: map to actual GraphQL Class
		addPropertyToClass(species, 'hairColors', data.hairColors, requestedFields);
		addPropertyToClass(species, 'homeworld', data.homeworld, requestedFields); // TODO: map to actual GraphQL Class
		addPropertyToClass(species, 'language', data.language, requestedFields);
		addPropertyToClass(species, 'name', data.name, requestedFields);
		addPropertyToClass(species, 'people', data.people, requestedFields); // TODO: map to actual GraphQL Class
		addPropertyToClass(species, 'skinColors', data.skinColors, requestedFields);

		return species;
	}

	public findByFuzzy(@Args(() => FuzzySpeciesArgs) { species, offset, reverse, take }: FuzzySpeciesArgs): Fuse.FuseResult<StarWarsApi.Species>[] {
		species = Util.preParseInput(species);

		const fuzzyResult = new FuzzySearch(speciesData, ['name'], { threshold: 0.3 }).runFuzzy(species);

		if (reverse) {
			fuzzyResult.reverse();
		}

		return fuzzyResult.slice(offset, offset + take);
	}
}
