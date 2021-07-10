import { getFuzzyVehicleName, getFuzzyVehicleWithNested } from '#test-utils/queries/vehicles';
import { gCall } from '#test-utils/testUtils';

describe('getFuzzyVehicle', () => {
	describe('Name only requests', () => {
		test('GIVEN a valid name THEN returns Vehicle', async () => {
			const { data } = await gCall<'getFuzzyVehicle'>({
				source: getFuzzyVehicleName,
				variableValues: { vehicle: 'sand' }
			});

			expect(data.getFuzzyVehicle).toContainAllValues([{ name: 'Sand Crawler' }]);
		});

		test('GIVEN a valid name query AND multiple results request THEN returns Vehicle[]', async () => {
			const { data } = await gCall<'getFuzzyVehicle'>({
				source: getFuzzyVehicleName,
				variableValues: { vehicle: 't', take: 2 }
			});

			expect(data.getFuzzyVehicle).toContainAllValues([{ name: 'T-16 skyhopper' }, { name: 'TIE bomber' }]);
		});

		test('GIVEN a valid name query AND multiple results AND reverse request THEN returns Vehicle[]', async () => {
			const { data } = await gCall<'getFuzzyVehicle'>({
				source: getFuzzyVehicleName,
				variableValues: { vehicle: 'h', take: 2, reverse: true }
			});

			expect(data.getFuzzyVehicle).toContainAllValues([{ name: 'Vulture Droid' }, { name: 'Geonosian starfighter' }]);
		});
	});

	describe('Full data requests', () => {
		test('GIVEN a valid name THEN returns Vehicle', async () => {
			const { data } = await gCall<'getFuzzyVehicle'>({
				source: getFuzzyVehicleWithNested,
				variableValues: { vehicle: 'd' }
			});

			expect(data.getFuzzyVehicle).toContainAllValues([
				{
					cargoCapacity: 50000,
					consumables: '2 months',
					costInCredits: 150000,
					crew: 46,
					films: [{ title: 'A New Hope' }, { title: 'Attack of the Clones' }],
					length: 36.8,
					manufacturers: ['Corellia Mining Corporation'],
					maxAtmospheringSpeed: 30,
					model: 'Digger Crawler',
					name: 'Sand Crawler',
					passengers: 30,
					pilots: [],
					vehicleClass: 'wheeled'
				}
			]);
		});

		test('GIVEN a valid title query AND multiple results request THEN returns Vehicle[]', async () => {
			const { data } = await gCall<'getFuzzyVehicle'>({
				source: getFuzzyVehicleWithNested,
				variableValues: { vehicle: 'd', take: 2 }
			});

			expect(data.getFuzzyVehicle).toContainAllValues([
				{
					cargoCapacity: 50000,
					consumables: '2 months',
					costInCredits: 150000,
					crew: 46,
					films: [{ title: 'A New Hope' }, { title: 'Attack of the Clones' }],
					length: 36.8,
					manufacturers: ['Corellia Mining Corporation'],
					maxAtmospheringSpeed: 30,
					model: 'Digger Crawler',
					name: 'Sand Crawler',
					passengers: 30,
					pilots: [],
					vehicleClass: 'wheeled'
				},
				{
					cargoCapacity: 0,
					consumables: null,
					costInCredits: 60000,
					crew: 0,
					films: [{ title: 'Revenge of the Sith' }],
					length: 12.3,
					manufacturers: ['Baktoid Fleet Ordnance', 'Haor Chall Engineering'],
					maxAtmospheringSpeed: 820,
					model: 'HMP droid gunship',
					name: 'Droid gunship',
					passengers: 0,
					pilots: [],
					vehicleClass: 'airspeeder'
				}
			]);
		});
	});

	describe('Error Requests', () => {
		test('GIVEN an invalid vehicle THEN returns error', async () => {
			const data = await gCall({
				source: getFuzzyVehicleName,
				variableValues: { vehicle: 'totally_invalid_vehicle', take: 2 }
			});

			expect(data.errors).toHaveLength(1);
			expect(data.errors[0].message).toBe('No vehicles found for: totally_invalid_vehicle');
		});
	});
});
