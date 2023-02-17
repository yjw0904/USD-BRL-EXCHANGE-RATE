// module.exports = {
//   displayName: 'myApp',
//   preset: '../../jest.preset.js',
//   setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
//   globals: {
//     'ts-jest': {
//       tsconfig: '<rootDir>/tsconfig.spec.json',
//       stringifyContentPathRegex: '\\.(html|svg)$'
//     }
//   },
//   coverageDirectory: '../../coverage/apps/myapp',
//   transform: {
//     '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular'
//   },
//   transformIgnorePatterns: [
//     '<rootDir>/node_modules/(?!lodash-es/.*)',
//     '<rootDir>/node_modules/(?!ng2-charts/.*)',
//     '^.+\\.js$'
//   ],
//   moduleNameMapper: {
//     '^lodash-es$': 'lodash'
//   },
//   snapshotSerializers: [
//     'jest-preset-angular/build/serializers/no-ng-attributes',
//     'jest-preset-angular/build/serializers/ng-snapshot',
//     'jest-preset-angular/build/serializers/html-comment'
//   ]
// };
module.exports = {
  testEnvironment: "jsdom"
};