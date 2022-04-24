FROM --platform=linux/amd64 node:18-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache dumb-init

COPY --chown=node:node package.json .
COPY --chown=node:node yarn.lock .
COPY --chown=node:node .yarnrc.yml .
COPY --chown=node:node tsconfig.base.json tsconfig.base.json
COPY --chown=node:node src/ src/
COPY --chown=node:node .yarn/ .yarn/

RUN yarn install --immutable

RUN yarn build

USER node

CMD [ "dumb-init", "yarn", "start"]
