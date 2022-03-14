export default {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testPathIgnorePatterns: ['/node_modules/'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.ts(x)'],
	modulePaths: ['<rootDir>/src/'],
	moduleNameMapper: {
		'\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
