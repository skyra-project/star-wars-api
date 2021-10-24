import { gql } from '#test-utils/testUtils';

const FullDataFragment = gql`
	fragment FullDataFragment on Vehicle {
		cargoCapacity
		consumables
		costInCredits
		crew
		films {
			title
		}
		length
		manufacturers
		maxAtmospheringSpeed
		model
		name
		passengers
		pilots {
			name
		}
		vehicleClass
	}
`;

const NameOnlyFragment = gql`
	fragment NameOnlyFragment on Vehicle {
		name
	}
`;

export const getVehicleName = gql`
	${NameOnlyFragment}
	query ($vehicle: StarWarsVehicles!) {
		getVehicle(vehicle: $vehicle) {
			...NameOnlyFragment
		}
	}
`;

export const getVehicleWithNested = gql`
	${FullDataFragment}
	query ($vehicle: StarWarsVehicles!) {
		getVehicle(vehicle: $vehicle) {
			...FullDataFragment
		}
	}
`;

export const getFuzzyVehicleName = gql`
	${NameOnlyFragment}
	query ($vehicle: String!, $take: Int, $reverse: Boolean) {
		getFuzzyVehicle(vehicle: $vehicle, take: $take, reverse: $reverse) {
			...NameOnlyFragment
		}
	}
`;

export const getFuzzyVehicleWithNested = gql`
	${FullDataFragment}
	query ($vehicle: String!, $take: Int, $reverse: Boolean) {
		getFuzzyVehicle(vehicle: $vehicle, take: $take, reverse: $reverse) {
			...FullDataFragment
		}
	}
`;
