import { getVehicleName, getVehicleWithNested } from '#test-utils/queries/vehicles';
import { gCall } from '#test-utils/testUtils';

describe('getVehicle', () => {
	describe('Name only requests', () => {
		test('GIVEN a valid name THEN returns Vehicle', async () => {
			const { data } = await gCall<'getVehicle'>({
				source: getVehicleName,
				variableValues: { vehicle: 'sandcrawler' }
			});

			expect(data.getVehicle.name).toEqual('Sand Crawler');
		});
	});

	describe('Full data requests', () => {
		test('GIVEN valid name AND nested data request THEN returns Vehicle WITH nested data', async () => {
			const { data } = await gCall<'getVehicle'>({
				source: getVehicleWithNested,
				variableValues: { vehicle: 'sandcrawler' }
			});

			expect(data.getVehicle).toContainAllEntries([
				['cargoCapacity', 50000],
				['consumables', '2 months'],
				['costInCredits', 150000],
				['crew', 46],
				['films', [{ title: 'A New Hope' }, { title: 'Attack of the Clones' }]],
				['length', 36.8],
				['manufacturers', ['Corellia Mining Corporation']],
				['maxAtmospheringSpeed', 30],
				['model', 'Digger Crawler'],
				['name', 'Sand Crawler'],
				['passengers', 30],
				['pilots', []],
				['vehicleClass', 'wheeled']
			]);
		});
	});

	describe('Error Requests', () => {
		test('GIVEN an invalid vehicle THEN returns error', async () => {
			const data = await gCall({
				source: getVehicleName,
				variableValues: { vehicle: 'totally_invalid_vehicle' }
			});

			expect(data.errors).toHaveLength(1);
			expect(data.errors[0].message).toBe(
				'Variable "$vehicle" got invalid value "totally_invalid_vehicle"; Value "totally_invalid_vehicle" does not exist in "StarWarsVehicles" enum.'
			);
		});
	});
});
