import { gql } from '#test-utils/testUtils';

const FullDataFragment = gql`
	fragment FullDataFragment on Species {
		averageHeight
		averageLifespan
		classification
		designation
		eyeColors
		films {
			title
		}
		hairColors
		homeworld {
			name
		}
		language
		name
		people {
			name
		}
		skinColors
	}
`;

const NameOnlyFragment = gql`
	fragment NameOnlyFragment on Species {
		name
	}
`;

export const getSpeciesName = gql`
	${NameOnlyFragment}
	query ($species: StarWarsSpecies!) {
		getSpecies(species: $species) {
			...NameOnlyFragment
		}
	}
`;

export const getSpeciesWithNested = gql`
	${FullDataFragment}
	query ($species: StarWarsSpecies!) {
		getSpecies(species: $species) {
			...FullDataFragment
		}
	}
`;

export const getFuzzySpeciesName = gql`
	${NameOnlyFragment}
	query ($species: String!, $take: Int, $reverse: Boolean) {
		getFuzzySpecies(species: $species, take: $take, reverse: $reverse) {
			...NameOnlyFragment
		}
	}
`;

export const getFuzzySpeciesWithNested = gql`
	${FullDataFragment}
	query ($species: String!, $take: Int, $reverse: Boolean) {
		getFuzzySpecies(species: $species, take: $take, reverse: $reverse) {
			...FullDataFragment
		}
	}
`;
