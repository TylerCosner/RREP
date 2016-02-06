FROM mhart/alpine-node:5.5.0

COPY package.json /app/package.json
WORKDIR /app

RUN apk --update add git gcc g++ make python && \
    npm install -g webpack@2.0.7-beta eslint babel-eslint mocha && \
    npm install && \
    rm -rf /var/cache/apk/*

COPY src /app/src
COPY test /app/test
COPY .babelrc /app/.babelrc
COPY .eslintignore /app/.eslintignore
COPY .eslintrc /app/.eslintrc
COPY webpack.config.js /app/webpack.config.js

RUN npm run build

EXPOSE 8080

CMD npm start
