# playground

this **monorepo** is a showcase project, where I implemend and add feature while I learn new concepts and technologies.

- pnpm
- nx
- nx cloud CI
- husky
- storybook
- mui
- typescript
- jest


- pnpm install
- pnpm build
- pnpm graph
- pnpm build:components-web
- pnpm app:testing
- pnpm lint
- pnpm storybook

- dependencies handled at root level


- pnpm --filter @playground/playground-space start
- pnpm --filter @playground/playground-space build
- pnpm --filter @playground/components-web build
- pnpm run --parallel -r build 