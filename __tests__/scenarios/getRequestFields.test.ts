import { getFilmTitle } from '#test-utils/queries/films';
import { gCall } from '#test-utils/testUtils';
import * as gqlParse from 'graphql-parse-resolve-info';

describe('getRequestedFields', () => {
	beforeAll(() => {
		const mock = jest.spyOn(gqlParse, 'parse');
		mock.mockImplementation((_arg1, _arg2) => undefined);
	});

	afterAll(() => {
		jest.clearAllMocks();
	});

	test('GIVEN mocked out resolve tree THEN returns empty requested fields', async () => {
		const { data } = await gCall<'getFilm'>({
			source: getFilmTitle,
			variableValues: { film: 1 }
		});

		expect(data.getFilm).toStrictEqual({ title: 'The Phantom Menace' });
	});
});
