// eslint-disable-next-line @typescript-eslint/require-await
export default async () => ({
	coverageProvider: 'v8',
	preset: 'ts-jest',
	testEnvironment: 'node',
	testRunner: 'jest-circus/runner',
	testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
	setupFilesAfterEnv: ['<rootDir>/__tests__/testUtils/jest.setup.ts'],
	moduleNameMapper: {
		'^#test-utils/(.*)$': '<rootDir>/__tests__/testUtils/$1',
		'^#arguments/(.*)$': '<rootDir>/src/arguments/$1',
		'^#assets/(.*)$': '<rootDir>/src/assets/$1',
		'^#resolvers/(.*)$': '<rootDir>/src/resolvers/$1',
		'^#scalars/(.*)$': '<rootDir>/src/scalars/$1',
		'^#services/(.*)$': '<rootDir>/src/services/$1',
		'^#structures/(.*)$': '<rootDir>/src/structures/$1',
		'^#utils/(.*)$': '<rootDir>/src/utils/$1',
		'^#root/(.*)$': '<rootDir>/src/$1'
	},
	globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/__tests__/tsconfig.json'
		}
	}
});
