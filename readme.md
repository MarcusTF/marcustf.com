# MarcusTF.com

## About this Repo:

This is the public repository for my personal website, [MarcusTF.com](https://marcustf.com). The website is built using React and Vite.

- Did I _need_ to use React for my personal site?
  - [x] No 😀👉👉
- Is it the _best_ tool for the job?
  - [x] Probably not 🤷‍♂️ (but also it's **not** _**not** the best tool_... I guess?)
- Is it super over-engineered?
  - [x] **_Absolutely_ 😅** _Have you **SEEN** the dependency list? **And** Unit tests!? `graphql-codegen`?????_

React is my bread and butter, so I wanted to use it to build my personal site. I figured it'd give a peek into how I like to build more robust things.

I considered using other tools like Qwik, Next.js, or even plain HTML, but I wanted to reduce as much friction as possible so that I'm actually motivated to update the site. When I'm not working, finding the energy to work on personal projects can be tough, so I figured why not make it as easy as possible? Anyway... here we are. Besides, it gives me a chance to play around with some new tools and libraries if I want to.

### Like this setup? Check out the [template](https://github.com/MarcusTF/vite-react-template).

It's got all the goodies you need to get started with a robust React project.

_(It's **super** overkill for a personal site, but we've already established that. However, if you're kickstarting something big, I think this is a really robust and organized way to go about it.)_

> _This project was bootstrapped with [`Vite`](https://vitejs.dev/)._

## Libraries

Below is a list of the libraries included in this project and links to their respective documentation.

| Dependency                                                                                | Description                                                                                                                           |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [`@radix-ui` primitives](https://www.radix-ui.com/primitives)                             | A set of low-level UI primitives for building high-quality, accessible design systems and web apps.                                   |
| [`@tanstack/react-query`](https://react-query.tanstack.com/)                              | A powerful and flexible JavaScript library for handling asynchronous data fetching, caching, and updating in React applications.      |
| [`@tanstack/react-table`](https://react-table.tanstack.com/)                              | A lightweight and extensible table component for React that provides features such as sorting, filtering, pagination, and more.       |
| [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom)                | Custom Jest matchers for enhancing the readability of tests.                                                                          |
| [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/) | A library for testing React components in a user-centric way.                                                                         |
| [`axios`](https://axios-http.com/)                                                        | A popular JavaScript library for making HTTP requests from browsers or Node.js.                                                       |
| [`clsx`](https://github.com/lukeed/clsx#readme)                                           | A tiny utility for constructing classNames strings in JavaScript.                                                                     |
| [`env-cmd`](https://www.npmjs.com/package/env-cmd)                                        | A command-line tool for executing commands using an environment from an env file.                                                     |
| [`eslint`](https://eslint.org/)                                                           | A popular JavaScript linter that helps identify and fix problems with your code.                                                      |
| [`final-form`](https://final-form.org/react)                                              | A high-performance form library for React applications that handles complex validation, state management, and form submission.        |
| [`immer`](https://immerjs.github.io/immer/)                                               | A JavaScript library that allows you to work with immutable state in a more convenient and intuitive way.                             |
| [`graphql-codegen`](https://the-guild.dev/graphql/codegen/docs)                           | A tool that generates code out of your GraphQL schema and operations, making it easy to work with typed queries, mutations, and more. |
| [`jsdom`](https://github.com/jsdom/jsdom#readme)                                          | A JavaScript library for emulating a browser environment in Node.js.                                                                  |
| [`prettier`](https://prettier.io/docs/en/)                                                | An opinionated code formatter that helps maintain consistent code style across your project.                                          |
| [`react-final-form`](https://final-form.org/react)                                        | A form state management library for React that focuses on simplicity and performance.                                                 |
| [`react-modal`](https://react-modal.com/)                                                 | A React component for creating accessible modal dialogs.                                                                              |
| [`react-toastify`](https://fkhadra.github.io/react-toastify/introduction/)                | React-Toastify allows you to add notifications to your app with ease                                                                  |
| [`vite-plugin-svgr`](https://github.com/pd4d10/vite-plugin-svgr)                          | Vite plugin to transform SVGs into React components.                                                                                  |
| [`use-immer`](https://github.com/immerjs/use-immer#readme)                                | A custom React hook that allows you to use Immer's immutable state management with minimal boilerplate.                               |
| [`vite-plugin-pwa`](https://vite-pwa-org.netlify.app/)                                    | A Vite plugin for generating a Progressive Web App (PWA) manifest and service worker.                                                 |
| [`vite`](https://vitejs.dev/)                                                             | A fast and lightweight build tool that supports modern JavaScript frameworks like React.                                              |
| [`vitest`](https://vitest.dev)                                                            | A test runner for Vite that provides a powerful and flexible testing environment for JavaScript and TypeScript.                       |
| [`generate-react-cli`](https://github.com/arminbro/generate-react-cli#readme)             | A CLI tool for generating a new React project with a variety of options.                                                              |

## Scripts

In the project directory, you can run:

| `npm run ...`                | Description                                                                                                                                                                                                                                                             |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `start:docker`               | This will start the application in a Docker container using the `compose.dev.yml` Docker Compose configuration file.                                                                                                                                                    |
| `start:dev`                  | This will run Vite with a custom environment file `.env.dev`.                                                                                                                                                                                                           |
| `start`                      | This will run Vite in development mode.                                                                                                                                                                                                                                 |
| `build`                      | This will transpile the TypeScript code and build the application for production.                                                                                                                                                                                       |
| `check:docker`               | This will start the application in a Docker container using the `compose.test.yml` Docker Compose configuration file and then remove the container.                                                                                                                     |
| `check:no-reinstall`         | This will run the checks without removing and reinstalling the dependencies.                                                                                                                                                                                            |
| `check`                      | This script will run all the necessary checks to make sure the code is ready for production. It will remove the `node_modules`folder, install all the dependencies, run linting, Prettier, build the application, and run tests. It will then remove the `dist` folder. |
| `codegen:local`              | This will generate code from the GraphQL schema and operations using the configuration file `codegen.ts` with environment variables loaded from `./dev.env`.                                                                                                            |
| `codegen`                    | This will generate code from the GraphQL schema and operations using the configuration file `codegen.ts`.                                                                                                                                                               |
| `docker:down`                | This will stop and remove the containers defined in the `compose.dev.yml` Docker Compose configuration file.                                                                                                                                                            |
| `docker:logs`                | This will display the logs from the containers defined in the `compose.dev.yml` Docker Compose configuration file.                                                                                                                                                      |
| `docker:rm`                  | This will forcefully remove the containers defined in the `compose.dev.yml` Docker Compose configuration file.                                                                                                                                                          |
| `docker:up`                  | This will start the application in a Docker container in detached mode using the `compose.dev.yml` Docker Compose configuration file.                                                                                                                                   |
| `lint:fix`                   | This will run ESLint to find, report, and automatically fix issues in the TypeScript files.                                                                                                                                                                             |
| `lint`                       | This will run ESLint to find and report issues in the TypeScript files.                                                                                                                                                                                                 |
| `new:page` & `new:component` | This will run the `generate-react-cli` to generate a new component or page.                                                                                                                                                                                             |
| `prettier:format`            | This will format the code to match the rules specified in the `.prettierrc` file.                                                                                                                                                                                       |
| `prettier`                   | This will check the code to match the rules specified in the `.prettierrc` file.                                                                                                                                                                                        |
| `preview`                    | This will build and serve the application as a static site, accessible at the specified URL.                                                                                                                                                                            |
| `test:coverage`              | This will run the tests and generate a coverage report using the `vitest` testing framework.                                                                                                                                                                            |
| `test:watch`                 | This will run the tests in watch mode, which will automatically re-run the tests when changes are made.                                                                                                                                                                 |
| `test`                       | This will run the tests using the `vitest` testing framework.                                                                                                                                                                                                           |
