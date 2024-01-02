# Social Network API

## Description
A RESTful API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. This project uses Express.js for routing, MongoDB as the database, and Mongoose ODM for data modeling.

## Features
- CRUD operations for managing users.
- CRUD operations for managing thoughts.
- Ability to add and remove friends from a user's friend list.
- Ability to add and delete reactions to thoughts.

## Installation
To install this project, follow these steps:
1. Clone the repository to your local machine:
git clone https://github.com/shambo-rambo/social-network-api.git
2. Navigate to the project directory:
cd social-network-api
3. Install the required npm packages:
npm install

## Usage
To start the server, run the following command in your terminal:
npm start

The server will start and connect to the MongoDB database. You can then use a tool like Insomnia to test the API routes.

## API Endpoints
### Users
- `GET /api/users`: Retrieve all users.
- `POST /api/users`: Create a new user.
- `GET /api/users/:id`: Retrieve a single user by ID.
- `PUT /api/users/:id`: Update a user by ID.
- `DELETE /api/users/:id`: Delete a user by ID.

### Thoughts
- `GET /api/thoughts`: Retrieve all thoughts.
- `POST /api/thoughts`: Create a new thought.
- `GET /api/thoughts/:id`: Retrieve a single thought by ID.
- `PUT /api/thoughts/:id`: Update a thought by ID.
- `DELETE /api/thoughts/:id`: Delete a thought by ID.

## Walkthrough Video
For a demonstration of the API functionality, please refer to the walkthrough video:
[Walkthrough Video Link](https://drive.google.com/file/d/1yjGiQBZPramtvOCbHpExowggSwufSG9u/view)

## Contributing
Contributions to this project are welcome. Please ensure to update tests as appropriate.

## License
Distributed under the MIT License. See `LICENSE` for more information.



