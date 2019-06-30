# todos-practice-app
 
 Simple application for organizing your tasks

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this application, you will need to have the latest versions of the following software installed on your system

* [NPM](https://www.npmjs.com/)
* [Node](https://nodejs.org)
* [Git](https://git-scm.com/)

### Running the app locally

Follow the steps below to get the development environment running locally

1. Clone the repo to your local machine

- On your local computer, open your terminal and navigate to the directory you want the repo to reside in
- Run the following command to clone the repo to your machine
```
    git clone https://github.com/codeBlock-1984/todos-practice-app.git
```
- Next, navigate into the project root directory and run the following command to install project dependencies
```
    npm install
```
- To start the development server run
```
    npm run dev:start
```

## Running the tests

To run the automated tests, navigate to the project root directory and run the following command in your terminal
```
    npm test
```

## Built With

The following core packages where used in building this application

* [Express](https://expressjs.com/) - The web framework used
* [Babel](https://babeljs.io/) - Javascript transpiler
* [Express-validator](https://express-validator.github.io/docs/) - Middleware used for request validation and sanitization
* [Bcrypt](https://www.npmjs.com/package/bcrypt) - Password hashing function
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Used for generating and verify tokens for authentication and authorization
* [Swagger](https://swagger.io/) - Used for API documentation
* [Pg](https://node-postgres.com/) - Node Postgres Client
* [Nodemailer](https://nodemailer.com/about/) - Module used for sending email notifications
* [Mocha](https://mochajs.org/) - Test framework
* [Chai](https://www.chaijs.com/) - Assertion library used for tests
* [Eslint](https://eslint.org/) - Javascript linting utility