import { gql } from '#test-utils/testUtils';

const FullDataFragment = gql`
	fragment FullDataFragment on Starship {
		cargoCapacity
		consumables
		costInCredits
		crew
		films {
			title
		}
		hyperdriveRating
		length
		manufacturers
		maxAtmospheringSpeed
		MGLT
		model
		name
		passengers
		pilots {
			name
		}
		starshipClass
	}
`;

const NameOnlyFragment = gql`
	fragment NameOnlyFragment on Starship {
		name
	}
`;

export const getStarshipName = gql`
	${NameOnlyFragment}
	query ($starship: StarWarsStarships!) {
		getStarship(starship: $starship) {
			...NameOnlyFragment
		}
	}
`;

export const getStarshipWithNested = gql`
	${FullDataFragment}
	query ($starship: StarWarsStarships!) {
		getStarship(starship: $starship) {
			...FullDataFragment
		}
	}
`;

export const getFuzzyStarshipName = gql`
	${NameOnlyFragment}
	query ($starship: String!, $take: Int, $reverse: Boolean) {
		getFuzzyStarship(starship: $starship, take: $take, reverse: $reverse) {
			...NameOnlyFragment
		}
	}
`;

export const getFuzzyStarshipWithNested = gql`
	${FullDataFragment}
	query ($starship: String!, $take: Int, $reverse: Boolean) {
		getFuzzyStarship(starship: $starship, take: $take, reverse: $reverse) {
			...FullDataFragment
		}
	}
`;
