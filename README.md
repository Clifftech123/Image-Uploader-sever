# Nest  mangoDB   auth API
## Description

 This is a simple API for authentication using NestJS and MongoDB . User can register and login to the system.  Passport.js is used for authentication.

## Installation

```bash
$ npm install 
$ Yarn install
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

## API Endpoints

### Register User

```bash

POST  /auth/signup

```

### Login User

```bash

POST /auth/login

```

### Logout  with  google

```bash

GET /auth/google

```


###  Google  callback

```bash

GET /auth/google-redirect
```


###  Protected route

```bash

GET  /auth/protected

```

### Logout

```bash


GET /auth/logout

```



### Delete User

```bash

DELETE /auth/delete

```