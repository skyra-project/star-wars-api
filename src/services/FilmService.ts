import FilmArgs from '#arguments/FilmsArgs';
import FuzzyFilmArgs from '#arguments/FuzzyArgs/FuzzyFilmArgs';
import films from '#assets/films';
import Film from '#structures/Film';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import FuzzySearch from '#utils/FuzzySearch';
import type GraphQLSet from '#utils/GraphQLSet';
import type StarWarsApi from '#utils/star-wars';
import Util from '#utils/util';
import type Fuse from 'fuse.js';
import { Args } from 'type-graphql';

export default class FilmService {
	public getByEpisodeNumber(@Args(() => FilmArgs) { film }: FilmArgs): StarWarsApi.Film | undefined {
		return films.get(film);
	}

	public mapFilmDataToFilmGraphQL(data: StarWarsApi.Film, requestedFields: GraphQLSet<keyof Film>): Film {
		const film = new Film();

		addPropertyToClass(film, 'director', data.director, requestedFields);

		return film;
	}

	public findByFuzzy(@Args(() => FuzzyFilmArgs) { film, offset, reverse, take }: FuzzyFilmArgs): Fuse.FuseResult<StarWarsApi.Film>[] {
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
