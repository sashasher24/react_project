import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  "transform": {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  "moduleNameMapper": {
    "\\.(css|png|jpg)$": "identity-obj-proxy"
  },
}

export default config;