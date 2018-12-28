# Overview
The application based on `create-react-app` kit. It includes tests with coverage, offline mode (chrome only), caching strict ESLint configuration and pre-commit hook. UI built with Material (responsive design is supported).

# Installation
Please install [NodeJS v8](https://nodejs.org/dist/latest-v8.x/) and run `npm run install` for installing all dependencies. Alternatively you can use `yarn` (`yarn install`).

# Running
Please run `npm start` (`yarn start`). Application will available by address `http://localhost:3000/`.

# Build
Please run `npm run build` (`yarn build`) for preparing artefact. The artefact could be deployed to any server.

# Tests
Please run `npm run test` (`yarn test`) for running tests. For enabling coverage please add additional argument `--coverage`: `npm run test --coverage` (`yarn test --coverage`). It will generate HTML documents in `coverage/lcov-report/src`.

# Progressive Web Application
The application supports offline mode and caching resources. For enabling please open sources (`src/index.jsx`) and comment next lines:
`10: const isDevEnvironment = process.env.NODE_ENV === 'development';`
`24: if (!isDevEnvironment) {`
`26: }`
The production build already includes PWA.
