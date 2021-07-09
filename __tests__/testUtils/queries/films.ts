import { gql } from '#test-utils/testUtils';

const fullDataFragment = `
fragment fullDataFragment on Film {
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
}`;

const titleOnlyFragment = `
fragment titleOnlyFilmData on Film {
  title
}`;

export const getFilmTitle = gql`
	${titleOnlyFragment}
	query ($film: Int!) {
		getFilm(film: $film) {
			...titleOnlyFilmData
		}
	}
`;

export const getFilmWithNested = gql`
	${fullDataFragment}

	query ($film: Int!) {
		getFilm(film: $film) {
			...fullDataFragment
		}
	}
`;

export const getFuzzyFilmTitle = gql`
	${titleOnlyFragment}

	query ($film: String!, $take: Int) {
		getFuzzyFilm(film: $film, take: $take) {
			...titleOnlyFilmData
		}
	}
`;

export const getFuzzyFilmWithNested = gql`
	${fullDataFragment}

	query ($film: String!, $take: Int) {
		getFuzzyFilm(film: $film, take: $take) {
			...fullDataFragment
		}
	}
`;
