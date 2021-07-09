import { gql } from '#test-utils/testUtils';

const FullDataFragment = gql`
	fragment FullDataFragment on Person {
		birthYear
		eyeColors
		films {
			title
		}
		gender
		hairColors
		height
		homeworld {
			name
		}
		mass
		name
		skinColors
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

const NameOnlyFragment = gql`
	fragment NameOnlyFragment on Person {
		name
	}
`;

export const getPersonName = gql`
	${NameOnlyFragment}
	query ($person: StarWarsPeople!) {
		getPerson(person: $person) {
			...NameOnlyFragment
		}
	}
`;

export const getPersonWithNested = gql`
	${FullDataFragment}
	query ($person: StarWarsPeople!) {
		getPerson(person: $person) {
			...FullDataFragment
		}
	}
`;

export const getFuzzyPersonName = gql`
	${NameOnlyFragment}
	query ($person: String!, $take: Int) {
		getFuzzyPerson(person: $person, take: $take) {
			...NameOnlyFragment
		}
	}
`;

export const getFuzzyPersonWithNested = gql`
	${FullDataFragment}
	query ($person: String!, $take: Int) {
		getFuzzyPerson(person: $person, take: $take) {
			...FullDataFragment
		}
	}
`;
