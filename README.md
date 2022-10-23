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
- webpack
- babel
- react


- pnpm install
- pnpm build
- pnpm graph
- pnpm build:components-web
- pnpm app:testing
- pnpm lint
- pnpm storybook



- npx nx dev @playground/playground-space
- npx nx build @playground/playground-space
- npx nx build @playground/components-web
- npx nx run-many --target=build --all (build all packages)
- npx nx graph
- npx nx affected:graph (graph for affected packages)
- npx nx affected:build (build for affected packages)