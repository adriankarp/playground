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

## Intitial setup

```
pnpm install
```

## Packages

| name                       | path                        | description                                                |
| -------------------------- | --------------------------- | ---------------------------------------------------------- |
| @playground/components-web | `./packages/components/web` | web UI components library based on [MUI](https://mui.com/) |
| ...                        | ...                         | ...                                                        |

## Scripts

Scripts are executed from root level

| command                                         | description                                      |
| ----------------------------------------------- | ------------------------------------------------ |
| npx nx **command** **@playground/package-name** | run **command** for **@playground/package-name** |
| npx nx run-many --target=build --all            | build all packages                               |
| npx nx graph                                    | graph for all packages                           |
| npx nx affected:build                           | build only affected packages                     |
| npx nx affected:graph                           | graph only for affected packages                 |

## Roadmap

| goal                                                    | status |
| ------------------------------------------------------- | ------ |
| monorepo setup & shared code between packages           | ✅     |
| web components library based on [MUI](https://mui.com/) | ⏳     |
| TBA..                                                   | ⏳     |

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
