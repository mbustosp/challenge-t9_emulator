# kiwi-challenge

![JS](https://img.icons8.com/nolan/2x/react-native.png)
## Fullstack JS homework

Welcome to my solution attempt of Kiwi's Fullstack JS homework!

The project is structured in two parts, one is reserved for the frontend and the other is for the backend.

### The frontend

Consists of a React application that fetches T9 word prediction data from a web api. It includes Storybook for you to see each one of the components in an isolated environment.

#### Features
- Light / Dark theme based on the user's color schema.
- Nice numeric keyboard.
- T9 mode switch.
- Suggestions dictionary to avoid repeated service requests.

### The backend

Consists of a Node/Express application that provides a T9 word prediction data web API. The suggestion algorithm was implemented using Tries.
 
 #### Features
 
- Word database taken from English word dictionary of 10000 entries.
- Suggestions are sorted by its frequency rank.

#### General

Both applications are configured to use eslint (with airbnb style guide), prettier and husky. There are git hooks that trigger
linting and tests scripts before comitting and pushing, respectively.

### Instructions

#### How to install?
0. Move to the root folder of the project.
1. Run `npm run install` to install the tools.
2. Run `npm run both:install` to install the frontend and backend dependencies.
3. Run `npm run start` to start both applications. By default, the frontend will run in the port `3000` and the backend in the port `3001`

#### How do I run the tests?
0. Move to the root folder of the project.
1. Run `npm run both:test` to install the tools.

#### How do I change the URL of the API the frontend is using?
There is a .env file located in the frontend folder that has the environment variable that controls that value.
0. Move to the frontend folder.
1. Open the .env file.
2. Change the value of the REACT_APP_T9_API_URL variable.
