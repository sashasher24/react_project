import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  //"testEnvironment":"node",
  "transform": {
    // "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  // "transformIgnorePatterns": [
  //   "node_modules/*"
  // ],
  "moduleNameMapper": {
    "\\.(css|png|jpg)$": "identity-obj-proxy"
  },
}

export default config;