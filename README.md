# Nest  mangoDB   auth API
## Description

GitHub Copilot: Sure, here's an improved version of the description:

This project is an API for user authentication built with NestJS and MongoDB. Users can register and log in to the system using a username and password. Passport.js is used for authentication, providing a secure and reliable way to manage user sessions.

In addition to traditional username and password authentication, users can also log in using their Google account. This provides a convenient and secure way for users to access the system without having to create a new account.

Users can also delete their account if they no longer wish to use the system. This feature is implemented securely to ensure that user data is properly deleted and cannot be recovered.

The project uses modern JavaScript technologies such as npm, TypeScript, and Yarn to provide a robust and efficient development environment.
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