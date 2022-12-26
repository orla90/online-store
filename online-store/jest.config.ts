import type { Config } from '@jest/types';
const config: Config.InitialOptions = {
  verbose: true,
};
export default config;
module.exports = {
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^(.{1,2}/.*).js$': '$1',
  },
  rootDir: './src/tests',
  transform: {
    '^.+.(ts|tsx)?$': 'ts-jest',
  },
  resetMocks: false,
};
