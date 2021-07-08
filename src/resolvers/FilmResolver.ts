import FilmArgs from '#arguments/FilmsArgs';
import FuzzyFilmArgs from '#arguments/FuzzyArgs/FuzzyFilmArgs';
import FilmService from '#services/FilmService';
import Film from '#structures/Film';
import { getRequestedFields } from '#utils/getRequestedFields';
import GraphQLSet from '#utils/GraphQLSet';
import { Args, Query, Resolver } from 'type-graphql';

@Resolver(Film)
export default class FilmResolver {
	@Query(() => Film, {
		description: 'Gets details on a Star Wars film, using the episode number of that film'
	})
	public getFilm(@Args() args: FilmArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof Film>): Film {
		const filmData = FilmService.getByEpisodeNumber(args);

		if (!filmData) {
			throw new Error(`No film found for ${args.film}`);
		}

		const graphqlObject = FilmService.mapFilmDataToFilmGraphQL(filmData, requestedFields);

		if (!graphqlObject) {
			throw new Error(`Failed to get data for film: ${args.film}`);
		}

		return graphqlObject;
	}

	@Query(() => [Film], {
		description: [
			'Gets details on a Star Wars film, using a fuzzy search on title or episode number',
			'This can be used to find multiple results based on the query',
			'By default only 1 result is returned. You can provide the arguments "take", "offset", and "reverse" to modify this behaviour.'
		].join('\n')
	})
	public getFuzzyFilm(@Args() args: FuzzyFilmArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof Film>): Film[] {
		const filmEpisodeId = Number(args.film);

		let data = filmEpisodeId ? FilmService.getByEpisodeNumber({ film: filmEpisodeId }) : undefined;

		if (!data) {
			const fuzzyEntry = FilmService.findByFuzzy(args);

			if (fuzzyEntry === undefined || !fuzzyEntry.length) {
				throw new Error(`Failed to get data for film: ${args.film}`);
			}

			// TODO: Actually return multiple results by looping over this
			data = FilmService.getByEpisodeNumber({ film: fuzzyEntry[0].item.episodeId });

			if (!data) {
				throw new Error(`No film found for: ${args.film}`);
			}
		}

		const graphqlObject = FilmService.mapFilmDataToFilmGraphQL(data, requestedFields);

		if (!graphqlObject) {
			throw new Error(`Failed to get data for film: ${args.film}`);
		}

		// TODO: Actually return multiple results by looping over this
		return [graphqlObject];
	}
}
