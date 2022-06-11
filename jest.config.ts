import { compilerOptions } from './tsconfig.json'
import { pathsToModuleNameMapper } from 'ts-jest'

export default {

  clearMocks: true,

  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),

  preset: '@shelf/jest-mongodb',

  transform: {
    '.+\\.ts$': 'ts-jest'
  }

}
