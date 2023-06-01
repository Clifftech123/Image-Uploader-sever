# Nest  mangoDB   auth API
## Description


This project is an API for user authentication built with NestJS and MongoDB. Users can register and log in to the system using a username and password. Passport.js is used for authentication, providing a secure and reliable way to manage user sessions.

In addition to traditional username and password authentication, users can also log in using their Google account. This provides a convenient and secure way for users to access the system without having to create a new account.

Users can also delete their account if they no longer wish to use the system. This feature is implemented securely to ensure that user data is properly deleted and cannot be recovered.

The project uses modern JavaScript technologies such as npm, TypeScript, and Yarn to provide a robust and efficient development environment.GitHub Copilot: Sure, here's an improved version of the API description:

This API provides user authentication functionality using NestJS, npm, TypeScript, and Yarn. The API allows users to register, log in, and log out using a username and password. In addition, users can log in using their Google account, which provides a convenient and secure way to access the system without having to create a new account.

The API provides the following endpoints:

- `POST /auth/signup`: Allows users to register a new account by providing a username and password. Returns a JWT token that can be used to authenticate future requests.

- `POST /auth/login`: Allows users to log in to the system using their username and password. Returns a JWT token that can be used to authenticate future requests.

- `GET /auth/google`: Allows users to log in to the system using their Google account. Redirects the user to the Google login page.

- `GET /auth/google-redirect`: Handles the Google login callback and logs the user in to the system. Returns a JWT token that can be used to authenticate future requests.

- `GET /auth/protected`: A protected route that requires authentication. Returns a message indicating that the user is authenticated.

- `GET /auth/logout`: Logs the user out of the system and invalidates their JWT token.

- `DELETE /auth/delete`: Deletes the user's account and all associated data from the system. Requires authentication.

The API is built using modern JavaScript technologies such as npm, TypeScript, and Yarn, providing a robust and efficient development environment.