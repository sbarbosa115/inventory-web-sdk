module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    moduleNameMapper: {
        '^@App/(.*)$': '<rootDir>/src/$1',
    }
};