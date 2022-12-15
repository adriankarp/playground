# playground

Monorepo used to implement and showcase different projects and technologies using JavaScript ecosystem.

## About

- Monorepo built with `pnpm workspaces && NX`
- `packages/**` based folder structure
- Shared codebase between packages
- Package name convention is `@playground/package-name`
- JavaScript ecosystem based

## Documentation

- Each package has its own `README.md` file with documentation
- _i.e._ `packages/components/web/README.md`

## Packages

### Apps

| name                      | path                      | description                                                                                   |
| ------------------------- | ------------------------- | --------------------------------------------------------------------------------------------- |
| `@playground/recipes-app` | `./packages/apis/recipes` | React client which consumes `@playground/recipes-api` [EDAMAM](https://developer.edamam.com/) |

### Apis

| name                      | path                      | description                                                                  |
| ------------------------- | ------------------------- | ---------------------------------------------------------------------------- |
| `@playground/recipes-api` | `./packages/apis/recipes` | GraphQL api for finding food recipes [EDAMAM](https://developer.edamam.com/) |

## Intitial setup

```
pnpm install
```

## Scripts

Scripts are executed from root level

| name                                | description                          |
| ----------------------------------- | ------------------------------------ |
| npx nx **command** **package-name** | run **command** for **package-name** |
| pnpm build                          | build all packages                   |
| pnpm build:affected                 | build only affected packages         |
| pnpm graph                          | graph for all packages               |
| pnpm graph:affected                 | graph only for affected packages     |
| pnpm storybook                      | run storybook                        |
| pnpm storybook:build                | build storybook                      |

## Roadmap

| goal                                          | status |
| --------------------------------------------- | ------ |
| monorepo setup & shared code between packages | ✅     |
| food recipes app with GraphQL and React       | ⏳     |
| TBA..                                         | ⏳     |

## Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

See [CONTRIBUTING.md](./CONTRIBUTING.md) for ways to get started

Please make sure to read [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)

## Feedback

If you have any feedback, please reach out to me at karp.adrian@protonmail.com

## License

[GNU General Public License 3.0](https://www.gnu.org/licenses/gpl-3.0.html)

## Authors

- [@adriankarp](https://www.github.com/adriankarp)
