// SPDX-FileCopyrightText: 2025 aas-core3.1-typescript AUTHORS
//
// SPDX-License-Identifier: MIT

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
};
