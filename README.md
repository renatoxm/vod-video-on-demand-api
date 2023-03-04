# VOD - Video On Demand API In Node.js + Express.js + Typescript

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

API for a Video on demand service using:

- Node.js
- Express.js
- TypeScript
- Docker
- MongoDB & Atlas Database
- Vercel
- AWS S3

Project was developed over my node.js boilerplate, available [here](https://github.com/renatoxm/node-boilerplate.git).

If you are looking for high-volume streaming, you should read my article

[The ideal VOD Platform build for high-volume Streaming Data](https://www.renato.digital/post/ideal-vod-platform-build)

## Features

1. Register user
2. Login
3. Get current logged in user (me)
4. Upload video
5. Get all videos
6. Stream a video

## Technologies

- [Express](https://expressjs.com/)
- [Mongoose](https://www.mongodb.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [argon2](https://www.npmjs.com/package/argon2)
- [busboy](https://www.npmjs.com/package/busboy)
- [Zod](https://github.com/colinhacks/zod)

## Installation

```sh
cp .env.example .env

npm i
```

## Scripts

### Basic

In order to compile and run our ts code we're going to use three scripts, start, dev and build.

start is the one that will be executed by the server in case of a deployment:

```sh
npm start
```

dev for our normal development

```sh
npm run dev
```

and build to compile our TypeScript code

```sh
npm run build
```

### Linter and Prettier actions

run lint for linter

```sh
npm run lint
```

or prettier:check to find errors

```sh
npm run prettier:check
```

or use write to fix problems

```sh
npm run prettier:write
```

### Testing

For testing use

```sh
npm run test
```

## Docker option (run client locally and server on container)

To start Docker server run **docker up -d** command. On the first time docker will install the containers.

1. Start client locally with **npm i**

```sh
cd client

npm run prod
```

2. Run server on Docker container

```sh
cd server

docker-compose up -d
```

To stop docker use **ctrl + c** keyboard command

## License

This project is licensed under the MIT license. For more information, see the [LICENSE](LICENSE.md) file.

All images used in this repository are from [Pexels](https://www.pexels.com/) and are under their [LICENSE](https://www.pexels.com/license/).

## Thank you notes

Thanks to [Pexels](https://www.pexels.com/) and their community for sharing such wonderful videos and images for free.
