# social-network-api

![npm express](https://img.shields.io/npm/l/express)</br>

## Description

This application provides the API for a NoSQL database with MongoDB for a Social
Media Startup. It does not currently have the HTML/css . The functionality is described as:
WHEN the server is started, the Mongoose models are synced to the MongoDB database.
The user is able to use the API GET routes in Insomnia to obtain the users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON.
WHEN tested for API POST, PUT, and DELETE routes in Insomnia,
THEN the user is able to successfully create, update, and delete users and thoughts in my database.
WHEN tested for API POST and DELETE routes in Insomnia
THEN the user is able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.
The functionality in Insomnia is presented in the sample videos that have been provided
on this Readme.

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Videos](#Videos)
- [License](#license)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

---

## Installation

1. Type `npm init` in terminal and answer the prompts for npm.
2. Type `npm i` in terminal to instal node modules and packages.
3. Install MongoDB https://docs.mongodb.com/manual/installation
4. Install Node https://nodejs.org/en/download/
5. Install Mongoose here https://mongoosejs.com/docs/

## Usage

- First clone the repository from GitHub.
- Complete the necessary installation, in the installation tab.
- start MondoDB on your repective device (https://www.mongodb.com/docs/manual/tutorial/getting-started/)
- type npm start in the terminal to start the server.
  -Open Insomnia to test the API routes.

  API Routes:
  User

Get all users: GET /api/users

Create a user: POST /api/users

Get user by ID: GET /api/users/:userId

Update a user: PUT /api/users/:userId

Delete a user: DELETE /api/users/:userId

Add a friend: POST /api/users/:userId/friends/:friendId

Delete a friend: DELETE /api/users/:userId/friends/:friendId

Thought

Get all thoughts: GET /api/thoughts

Create a thought: POST /api/thoughts

Get thought by ID: GET /api/thoughts/:thoughtId

Update a thought: PUT /api/thoughts/:thoughtId

Delete a thought: DELETE /api/thoughts/:thoughtId

Reaction

Add a reaction: POST /api/thoughts/:thoughtId/reactions

Delete a reaction: DELETE /api/thoughts/:id/reactions/:reactionId

## Videos

## License

License badges above covered under MIT

## Contributing

none

## Test

none

## Questions

For further Questions About This Application , Please Feel Free To Use The Contact Below:

> Email: Racquelg85@hotmail.com
> GitHub : [Racquel](https://github.com/munozgit85/social-network-api.git)
