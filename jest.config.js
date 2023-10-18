/** @type {import('jest').Config} */

const config = {
  verbose: true,
};

const tsconfig = {
  preset: "ts-jest",
  testEnvironment: "node",
};

module.exports = tsconfig;
