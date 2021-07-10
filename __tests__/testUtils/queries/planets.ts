import { gql } from '#test-utils/testUtils';

const FullDataFragment = gql`
	fragment FullDataFragment on Planet {
		climates
		diameter
		films {
			title
		}
		gravity
		name
		orbitalPeriod
		population
		residents {
			name
		}
		rotationPeriod
		surfaceWater
		terrains
	}
`;

const NameOnlyFragment = gql`
	fragment NameOnlyFragment on Planet {
		name
	}
`;

export const getPlanetName = gql`
	${NameOnlyFragment}
	query ($planet: StarWarsPlanets!) {
		getPlanet(planet: $planet) {
			...NameOnlyFragment
		}
	}
`;

export const getPlanetWithNested = gql`
	${FullDataFragment}
	query ($planet: StarWarsPlanets!) {
		getPlanet(planet: $planet) {
			...FullDataFragment
		}
	}
`;

export const getFuzzyPlanetName = gql`
	${NameOnlyFragment}
	query ($planet: String!, $take: Int, $reverse: Boolean) {
		getFuzzyPlanet(planet: $planet, take: $take, reverse: $reverse) {
			...NameOnlyFragment
		}
	}
`;

export const getFuzzyPlanetWithNested = gql`
	${FullDataFragment}
	query ($planet: String!, $take: Int, $reverse: Boolean) {
		getFuzzyPlanet(planet: $planet, take: $take, reverse: $reverse) {
			...FullDataFragment
		}
	}
`;
