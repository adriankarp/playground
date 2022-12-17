# playground

Template monorepo used to kickstart JavaScript based projects

## About

- Monorepo built with `pnpm workspaces && NX`
- `packages/**` based folder structure
- Package naming convention `@playground/package-name`
- JavaScript ecosystem based

## Intitial setup

```
pnpm install
```

## Technologies

- PNPM
- NX
- TypeScript
- Jest
- Husky
- ESLint
- Prettier
- Storybook

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
| pnpm storybook:clean                | clean storybook                      |

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
