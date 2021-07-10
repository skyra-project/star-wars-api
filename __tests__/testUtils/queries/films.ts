import { gql } from '#test-utils/testUtils';

const FullDataFragment = gql`
	fragment FullDataFragment on Film {
		title
		characters {
			name
		}
		planets {
			name
		}
		species {
			name
		}
		starships {
			name
		}
		vehicles {
			name
		}
	}
`;

const TitleOnlyFragment = gql`
	fragment titleOnlyFilmData on Film {
		title
	}
`;

export const getFilmTitle = gql`
	${TitleOnlyFragment}
	query ($film: Int!) {
		getFilm(film: $film) {
			...titleOnlyFilmData
		}
	}
`;

export const getFilmWithNested = gql`
	${FullDataFragment}
	query ($film: Int!) {
		getFilm(film: $film) {
			...FullDataFragment
		}
	}
`;

export const getFuzzyFilmTitle = gql`
	${TitleOnlyFragment}
	query ($film: String!, $take: Int, $reverse: Boolean) {
		getFuzzyFilm(film: $film, take: $take, reverse: $reverse) {
			...titleOnlyFilmData
		}
	}
`;

export const getFuzzyFilmWithNested = gql`
	${FullDataFragment}
	query ($film: String!, $take: Int, $reverse: Boolean) {
		getFuzzyFilm(film: $film, take: $take, reverse: $reverse) {
			...FullDataFragment
		}
	}
`;
