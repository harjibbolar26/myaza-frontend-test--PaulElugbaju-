module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/assets(.*)$': '<rootDir>/src/assets$1',
    '^@/ui-component(.*)$': '<rootDir>/src/ui-component$1',
    '^@/app(.*)$': '<rootDir>/src/app$1',
    '^@/components(.*)$': '<rootDir>/src/components$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
};