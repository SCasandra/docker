## Docker
##### Network
Creating a custom network:
```bash
docker network create --driver bridge my-network
```
Inspecting the network configurations:
```bash
docker network ls
docker inspect my-network
```
Connecting containers to a custom network:
```bash
docker build -t demo-api:1
<!-- TOKEN=t123 - HARDCODED IN ANGULAR ENV FILE -->
docker run  --env TOKEN=t123 --network my-network --name course-api demo-api:1 - domain name = course-api
docker build -t demo-client:1
docker run --network my-network --name course-client demo-client:1
```

docker ps - lists running containers  (-a - all)
docker stop  ID, docker rm ID
docker inspect container_ID => find the ip address
##### Persistency
```bash
docker run -v vol:/home/customuser/app/tmp --env TOKEN=t123 --network my-network --name course-api -p 8088:8080 demo-api:1
docker run --env TOKEN=t123 --mount type=bind,source=C:\Users\User\Desktop\workspace\docker-client-server\course-api\tmp\courses.json,target=/home/customuser/app/tmp/courses.json -p 8088:8080 demo-api:1 
```

```bash
docker run --env TOKEN=t123 --network my-network --name course-api -p 8088:8080 demo-api:1
docker run --network my-network --name course-client -p 4201:4200 demo-client:1
```
##### Building
- development
```bash
$ docker build -f Dockerfile.dev -t {repository:tag} .
```
- production
```bash
$ docker build -t {repository:tag} .
```

Reducing the build time :
- Create a .dockerignore file - Avoid including unnecessary files
- Optimize the build cache - Order matters - a change causes a rebuild for the following steps

##### Running 

```bash
$ docker run --env TOKEN={token} -p {local-port}:{container-port} {repository:tag}
```

##### Networking
 - Docker isolates the container network from the host network, using linux network namespaces
```bash
$ docker run -p {local-port}:{container-port} {repository:tag}
```

##### Security 
- Avoid root permissions
- Use secure container registries

##### Image size
- Avoid including unnecessary files
- Use an appropiate base image

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
Simple app which returns a list of courses for authorized users by navigating to /api/courses

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
