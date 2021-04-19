# Overview

Project created with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest) template with basic typescript, eslint, prettier, linter, jest

## run project

- run project in development mode

```bash
# install root dependency, declared from package.json
yarn install

# run project from npm script inside package.json
yarn run dev
```

- run project with docker production build

navigate to root folder, then run the following command:

```bash
docker build . -t hackernews

docker run -p 3000:3000 hackernews
```

then navigate to localhost:3000

to stop container by image name `docker stop $(docker ps -q --filter ancestor=hackernews )`
